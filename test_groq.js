import OpenAI from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: 'https://api.groq.com/openai/v1',
});

async function main() {
  try {
    const completion = await openai.chat.completions.create({
      model: 'llama3-8b-8192',
      messages: [{ role: 'user', content: 'What is Java?' }],
    });
    console.log("SUCCESS:", completion.choices[0].message.content);
  } catch (e) {
    console.error("GROQ ERROR IS:", e.message);
  }
}
main();
