import express from 'express';
import {
  validatePostId,
  validatePostQuery,
  validateCreatePost,
  validateUpdatePost,
} from '../middleware/postValidators.js';

import {
  getAllPostsHandler,
  getPostByIdHandler,
  createPostHandler,
  updatePostHandler,
  deletePostHandler,
} from '../controllers/postController.js';

import { authenticate } from '../middleware/authenticate.js';
import { authorizeOwnership } from '../middleware/authorizeOwnership.js';

const router = express.Router();

router.get('/', validatePostQuery, getAllPostsHandler);

router.get('/:id', validatePostId, getPostByIdHandler);

router.post('/', authenticate, validateCreatePost, createPostHandler);

router.put('/:id', validatePostId, authenticate, authorizeOwnership, validateUpdatePost, updatePostHandler);

router.delete('/:id', validatePostId, authenticate, authorizeOwnership, deletePostHandler);

export default router;
