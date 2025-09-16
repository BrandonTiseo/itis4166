import { param, query } from 'express-validator';
import { handleValidationErrors } from './handleValidationErrors.js';


export const validateBlogId = [
    param('id')
        .isInt({ min: 1 })
        .withMessage('Blog ID must be a positive integer.'),
    handleValidationErrors
];

export const validateBlogQuery = [
    query('author').optional().trim().escape().toLowerCase(),
    query('title').optional().trim().escape().toLowerCase(),
    query('published')
        .optional()
        .isBoolean()
        .withMessage('published must be true or false')
        .toBoolean(),
    handleValidationErrors,
];
