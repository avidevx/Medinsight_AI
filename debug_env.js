
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Current working directory:', process.cwd());
console.log('__dirname:', __dirname);

// Mimic server.js logic
if (process.env.NODE_ENV === 'production') {
    console.log('Loading .env for PRODUCTION mode');
    dotenv.config();
} else {
    console.log('Loading .env for DEV mode (override: true)');
    const result = dotenv.config({ override: true });
    if (result.error) {
        console.error('Error loading .env file:', result.error);
    } else {
        console.log('.env parsed successfully');
    }
}

const key = process.env.GROQ_API_KEY;

if (key) {
    console.log('GROQ_API_KEY is SET.');
    console.log('Length:', key.length);
    console.log('Starts with:', key.substring(0, 4) + '...');
} else {
    console.error('GROQ_API_KEY is NOT set.');
}

console.log('Full Environment Keys:', Object.keys(process.env).filter(k => k.includes('API')));
