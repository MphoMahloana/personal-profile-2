import { GoogleGenAI, Chat } from "@google/genai";
import { personalData } from '../data';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const dataContext = JSON.stringify(personalData, null, 2);

const systemInstruction = `You are a friendly and professional AI assistant for Mpho Mahloana, a talented Data Analyst and Software Developer. 
Your purpose is to answer questions about Mpho's skills, experience, projects, and contact information based ONLY on the context provided below. 
Be concise, helpful, and personable. 
Format your responses clearly using markdown where appropriate (e.g., lists, bold text).
If a user asks a question you cannot answer from the context, politely state that you don't have that specific information and try to redirect to what you do know. 
Do not invent any information.

Here is all the information about Mpho:

--- CONTEXT START ---
${dataContext}
--- CONTEXT END ---

Now, begin the conversation by introducing yourself and offering to answer questions about Mpho.
`;


let chat: Chat | null = null;

export const initializeChat = (): Chat => {
    if (chat) {
        return chat;
    }
    chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: systemInstruction,
        },
    });
    return chat;
};

export const sendMessageToAI = async (message: string) => {
    if (!chat) {
        initializeChat();
    }
    try {
        const response = await (chat as Chat).sendMessage({ message });
        return response.text;
    } catch (error) {
        console.error("Error sending message to AI:", error);
        return "I'm sorry, I'm having trouble connecting right now. Please try again later.";
    }
};