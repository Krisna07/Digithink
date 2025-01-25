import { GoogleGenerativeAI } from "@google/generative-ai";

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
      "date": "current date",
      "readTime": "estimated read time",
      "creator": ["username"],
      "blogBody": {
        "introduction": "string",
        "sections": [
          {
            "title": "string",
            "content": "string"
          }
        ],
        "conclusion": "string"
      }
    }
    
    Requirements:
    - At least 3 sections in blogBody
    - 1-3 creators
    - Valid JSON format
  `;

  const result = await model.generateContent(prompt);
  const text = result.response.text();

  return text.replace(/```json|```/g, "").trim();
};

export default generateBlogContext;
