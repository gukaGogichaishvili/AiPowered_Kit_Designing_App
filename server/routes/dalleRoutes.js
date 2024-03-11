import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';



dotenv.config();

const router = express.Router();


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  router.route('api/v1/dalle').get((req, res) => {
    res.send('Hello From DALL-E!');
  });

  export default router;