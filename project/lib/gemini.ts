// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import {
  GoogleGenAI,
} from '@google/genai';

// Define the structure for the content in history and contents
interface Content {
    roles: 'user' | 'assistant';
    parts: [{
        text: string;
    }];
}

export async function generateResponseStream(prompt: string, history: Content[] = []) {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  const config = {
    thinkingConfig: {
      thinkingBudget: -1,
    },
  };
  const model = 'gemini-flash-latest';
  const contents = history
  contents.push(
        {
        roles: 'user',
        parts: [
            {
            text: prompt,
            },
        ],
        },
    );

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  return response;
}