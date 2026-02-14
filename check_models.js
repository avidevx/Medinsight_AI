import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.GROQ_API_KEY;
const url = 'https://api.groq.com/openai/v1/models';

async function listModels() {
    if (!API_KEY) {
        console.error('Error: GROQ_API_KEY not found in .env');
        return;
    }

    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            console.error(`Error fetching models: ${response.status} ${response.statusText}`);
            const text = await response.text();
            console.error(text);
            return;
        }

        const data = await response.json();
        console.log('Available Models:');
        data.data.forEach(model => {
            console.log(`- ${model.id}`);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

listModels();
