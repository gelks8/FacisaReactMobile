import { GoogleGenerativeAI } from '@google/generative-ai';

const genAi = new GoogleGenerativeAI(process.env.EXPO_PUBLIC_GEMINI_API_KEY);

const model = genAi.getGenerativeModel({
    model: "gemini-2.0-flash-thinking-exp-01-21"
})

const AiService = {
    prompt: async (question) => {
        const result = await model.generateContent({
            contents: [
                {
                    parts: [{ text: question }]
                }
            ]
        });
        const response = await result.response;
        return response.text();
    },
    longContext: () => {

    }
}

export default AiService