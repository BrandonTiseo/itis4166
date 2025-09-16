import express from 'express';
import { validateBlogId, validateBlogQuery, validateCreateBlog, validateUpdateBlog } from '../middleware/blogValidators.js';

import { getAllBlogsHandler, getBlogByIDHandler, createBlogHandler, updateBlogHandler, deleteBlogHandler } from '../controllers/blogController.js';



const router = express.Router();


router.get('/', validateBlogQuery, getAllBlogsHandler);

router.get('/:id', validateBlogId, getBlogByIDHandler);

router.post('/', validateCreateBlog, createBlogHandler);

router.put('/:id', validateBlogId, validateUpdateBlog, updateBlogHandler);

router.delete('/:id', validateBlogId, deleteBlogHandler);

export default router;