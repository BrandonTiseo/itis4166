import express from 'express';
import { validateBlogId } from '../middleware/blogValidators.js';

import { getAllBlogsHandler, getBlogByIDHandler, createBlogHandler, updateBlogHandler, deleteBlogHandler } from '../controllers/blogController.js';



const router = express.Router();


router.get('/', getAllBlogsHandler);

router.get('/:id', validateBlogId, getBlogByIDHandler);

router.post('/', createBlogHandler);

router.put('/:id', validateBlogId, updateBlogHandler);

router.delete('/:id', validateBlogId, deleteBlogHandler);

export default router;