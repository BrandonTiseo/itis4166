import express from 'express';
import { validateCategoryId, validateCreateCategory, validateUpdateCategory, validateCreateQuery } from '../middleware/categoryValidators.js';

import { getAllCategoriesHandler, getCategoryByIDHandler, createCategoryHandler, updateCategoryHandler, deleteCategoryHandler } from '../controllers/categoryController.js';



const router = express.Router();


router.get('/', validateCreateQuery, getAllCategoriesHandler);

router.get('/:id', validateCategoryId, getCategoryByIDHandler);

router.post('/', validateCreateCategory, createCategoryHandler);

router.put('/:id', validateCategoryId, validateUpdateCategory, updateCategoryHandler);

router.delete('/:id', validateCategoryId, deleteCategoryHandler);

export default router;