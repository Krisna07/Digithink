import { GoogleGenerativeAI } from "@google/generative-ai";

// export interface ResponsePost {
//   title: string;
//   description: string;
//   readTime: string;
//   creator: string[];
//   blogBody: {
//     introduction: string;
//     sections: {
//       title: string;
//       content: string;
//       _ref: string;
//     }[];
//     conclusion: string;
//   };
// }

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  throw new Error("GEMINI_API_KEY is not defined");
}
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const generateBlogContext = async (title: string, description: string) => {
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
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    const response = text.replace(/```json|```/g, "").trim();

    return response;
  } catch (error) {
    return "Error with autoblog AI. Please try again later";
  }
};

export default generateBlogContext;
