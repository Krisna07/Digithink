import { GoogleGenAI } from "@google/genai";
import mime from 'mime';
import client from "./sanityClient";

const apiKey = process.env.GEMINI_API_KEY || '';
// if (!apiKey) {
//   console.log("GEMINI_API_KEY is not defined");
// }
const genAI = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// const imageAI = new GoogleGenAI({
//   apiKey: process.env.GEMINI_IMAGE_API
// })


const generateBlogContext = async (title: string, description: string) => {
  const model = "gemini-2.5-flash"
  const prompt = `Generate a blogpost using the following title and description:
    Title: ${title}
    Description: ${description}
    
    Provide the response in the following JSON format:
    {
      "title": "string",
      "description": "string (20 words max)",
      "readTime": "estimated read time",
      "creator": ["username"],
      "blogBody": {
        "introduction": "string",
        "sections": [
          {
            "title": "string",
            "content": "string",
          }
        ],
        "conclusion": "string"
      }
    }
    
    Requirements:
    - At least 3 sections in blogBody, sections should be explained properly can break the lines too 
    - 1-3 creators
    - Date should be the current date
    - Valid JSON format
  `;

  try {
    const response = await genAI.models.generateContent({
      model,
      contents: prompt
    })
    const text = response.text;
    const result = text && text.replace(/```json|```/g, "").trim();
    return result;
  } catch (error) {
    return "Error with autoblog AI. Please try again later";
  }
};

const handleImageGeneration = async (prompt: string, fileName: string) => {
  const model = 'gemini-2.0-flash-preview-image-generation';
  // Fixed config based on working example
  const config = {
    responseModalities: ['IMAGE', 'TEXT'],
    responseMimeType: 'text/plain', // This is the key fix!
  };

  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: prompt, // Simplified prompt like in working example
        },
      ],
    },
  ];

  try {
    const response = await genAI.models.generateContentStream({
      model,
      config,
      contents,
    });

    console.log("Starting image generation...");

    for await (const chunk of response) {
      console.log("Processing chunk...");

      // Check for safety blocks first
      if (chunk.candidates?.[0]?.safetyRatings && chunk.candidates[0].safetyRatings.some(rating => rating.blocked)) {
        console.warn("Image generation blocked due to safety policies.");
        return {
          status: 403,
          message: "Image generation blocked by safety policies. Please try a different prompt."
        };
      }

      // Check if chunk has the expected structure
      if (!chunk.candidates || !chunk.candidates[0]?.content || !chunk.candidates[0].content.parts) {
        continue;
      }

      // Look for inline data (image)
      if (chunk.candidates[0].content.parts[0]?.inlineData) {
        console.log("Found image data!");
        const inlineData = chunk.candidates[0].content.parts[0].inlineData;
        const fileExtension = mime.getExtension(inlineData.mimeType || 'jpeg');
        const buffer = Buffer.from(inlineData.data || '', 'base64');

        try {
          // For Node.js environment (server-side), upload buffer directly
          const asset = await client.assets.upload("image", buffer, {
            filename: `${fileName}.${fileExtension}`,
          });

          console.log("Sanity Asset uploaded successfully:", asset._id);

          return {
            status: 200,
            message: asset._id // Return the Sanity asset ID
          };
        } catch (uploadError: any) {
          console.error("Error uploading to Sanity:", uploadError);
          return {
            status: 500,
            message: `Upload failed: ${uploadError.message || uploadError.toString()}`
          };
        }
      } else if (chunk.text) {
        // Handle text responses (but continue looking for image)
        console.log("Received text response:", chunk.text);
      }
    }

    // If no image was found
    console.warn("No image data found in response chunks.");
    return {
      status: 404,
      message: "Image generation failed: No image data received from the model."
    };

  } catch (error: any) {
    console.error("Error during image generation:", error);
    return {
      status: 500,
      message: `Internal server error: ${error.message || error.toString()}`
    };
  }
};

export { generateBlogContext, handleImageGeneration };
