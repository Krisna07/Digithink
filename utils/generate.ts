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
  // *** THE FIX IS HERE: Remove responseMimeType from config ***
  const config = {
    responseModalities: ['IMAGE', 'TEXT'], // Explicitly tell the model we want both
  };

  const contents = [
    {
      role: 'user',
      parts: [
        {
          // Refined prompt for clarity to the model
          text: `generate an image based on the following prompt: ${prompt}`,
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

    // console.log(response)

    for await (const chunk of response) {
      // console.log("Received chunk:", JSON.stringify(chunk, null, 2)); // Log the entire chunk for debugging

      if (chunk.candidates?.[0]?.safetyRatings && chunk.candidates[0].safetyRatings.some(rating => rating.blocked)) {
        console.warn("Image generation blocked due to safety policies.");
        return {
          status: 403,
          message: "Image generation blocked by safety policies. Please try a different prompt."
        };
      }

      // Ensure we have candidates, content, and parts before proceeding
      if (!chunk.candidates || chunk.candidates.length === 0 ||
        !chunk.candidates[0].content || !chunk.candidates[0].content.parts ||
        chunk.candidates[0].content.parts.length === 0) {
        continue; // Skip if the chunk doesn't contain expected content structure
      }

      const firstPart = chunk.candidates[0].content.parts[0];
      // console.log("First part:", JSON.stringify(firstPart, null, 2)); // Log the first part for more detail

      if (firstPart.inlineData) {
        const inlineData = firstPart.inlineData;
        const fileExtension = mime.getExtension(inlineData.mimeType || 'jpeg'); // Default to jpeg if mimeType is missing
        const buffer = Buffer.from(inlineData.data || '', 'base64');

        let fileToUpload;
        // Conditional handling for browser vs Node.js environments
        if (typeof window !== 'undefined' && typeof Blob !== 'undefined' && typeof File !== 'undefined') {
          // Browser environment: Create a Blob and then a File
          const blob = new Blob([buffer], { type: inlineData.mimeType });
          fileToUpload = new File([blob], `${fileName}.${fileExtension}`, { type: inlineData.mimeType });
        } else {
          // Node.js environment: Sanity's upload generally accepts a Buffer directly
          fileToUpload = buffer;
        }

        const asset = await client.assets.upload("image", fileToUpload);
        // console.log("Sanity Asset uploaded:", asset);

        return {
          status: 200,
          message: asset.id // Return the Sanity asset ID
        };
      } else if (firstPart.text) {
        // This block will catch if the model returns text for some reason
        // (e.g., if it couldn't generate an image and defaulted to a text explanation).
        console.warn("Model returned text instead of inlineData (expected image):", firstPart.text);
        return {
          status: 400,
          message: `Model returned text instead of image data: ${firstPart.text}`
        };
      } else {
        // If the part exists but is neither inlineData nor text, log for investigation
        console.warn("Unexpected content part structure:", firstPart);
      }
    }

    // If the loop completes without finding and returning an image
    console.warn("No image data found in any of the response chunks.");
    return {
      status: 404,
      message: "Image generation failed: No image data received from the model."
    };

  } catch (error: any) {
    console.error("Error during image generation or upload:", error);
    return {
      status: 500,
      message: `Internal server error: ${error.message || error.toString()}`
    };
  }
};

export { generateBlogContext, handleImageGeneration };
