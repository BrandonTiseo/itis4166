import express from 'express';
import { getAllUsersHandler, getUserByIdHandler, updateUserHandler, deleteUserHandler, getUserPostsHandler, updateOtherUserHandler } from '../controllers/userController.js';
import { authenticate } from '../middleware/authenticate.js';
import { authorizeRoles } from '../middleware/authorizeRoles.js';
import { validateUpdateUser, validateUpdateUserRole } from '../middleware/userValidators.js';
const router = express.Router();

router.get('/', authenticate, authorizeRoles('ADMIN'), getAllUsersHandler);

router.get('/me', authenticate, getUserByIdHandler);

router.put('/me', authenticate, validateUpdateUser, updateUserHandler );

router.delete('/me', authenticate, deleteUserHandler);

router.get('/me/posts', authenticate, getUserPostsHandler);

router.patch('/:id/role', authenticate, authorizeRoles('ADMIN'), validateUpdateUserRole, updateOtherUserHandler);

export default router;