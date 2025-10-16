import express from 'express';
import { signUpHandler } from '../controllers/authController.js';
const router = express.Router();

router.post('/signup', signUpHandler);

export default router;