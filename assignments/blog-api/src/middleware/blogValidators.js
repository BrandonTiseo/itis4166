import { param } from 'express-validator';
import { handleValidationErrors } from './handleValidationErrors.js';


export const validateBlogId = [
    param('id')
        .isInt({ min: 1 })
        .withMessage('Blog ID must be a positive integer.'),
    handleValidationErrors
];


