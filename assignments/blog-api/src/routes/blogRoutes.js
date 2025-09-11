import express from 'express';
import { getAllBlogsHandler, getBlogByIDHandler, createBlogHandler, updateBlogHandler, deleteBlogHandler } from '../controllers/blogController.js';

const router = express.Router();


router.get('/', getAllBlogsHandler);

router.get('/:id', getBlogByIDHandler);

router.post('/', createBlogHandler);

router.put('/:id', updateBlogHandler);

router.delete('/:id', deleteBlogHandler);

export default router;