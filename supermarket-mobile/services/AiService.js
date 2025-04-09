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
    longContext: async (userData, question) => {
        const context  = `
        Você está conversando com o usuário abaixo. Responda considerando seus dados:

        Nome: ${userData.name || ''}
        Email: ${userData.formEmail || ''}
        Histórico de compras: ${JSON.stringify(userData.purchaseHistory || [])}

        Pergunta: ${question}
        `;
    
        const result = await model.generateContent({
            contents: [
                {
                    role: 'user',
                    parts: [{ text: context }],
                },
            ],
        });
    
        const response = await result.response;
        return response.text();
    }
};

export default AiService