import {GoogleGenAI} from "@google/genai"
console.log("API Key:", process.env.GEMINI_API_KEY);
const ai = new GoogleGenAI({
   apiKey:process.env.GEMINI_API_KEY,
})

export const reviewCode = async (code)=>{
    const response = await ai.models.generateContent({
        model:"gemini-3.5-flash",
     contents: `
You are an expert software engineer.

Review the following code.

Explain:
1. Bugs
2. Improvements
3. Best practices
4. Time complexity (if applicable)
5. Space complexity (if applicable)

Code:

${code}
`
    })
    console.log(response.text)
    return response.text
}