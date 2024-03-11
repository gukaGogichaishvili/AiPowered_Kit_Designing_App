import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

import Post from '../mongodb/models/post.js';

dotenv.config();

const router = express.Router();

router.route('api/v1/post').get(async(req, res) => {
    res.send('Hello From DALL-E!3');
  });

export default router;