import { param, query, body } from 'express-validator';
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


export const validateCreateBlog = [
    body('title')
        .trim()
        .escape()
        .notEmpty()
        .withMessage('title is required')
        .bail()
        .isLength({min: 3}).withMessage('title must be at least 3 characters'),
    body('content')
        .trim()
        .escape()
        .notEmpty()
        .withMessage('content is required')
        .bail()
        .isLength({min: 10}).withMessage('content must be at least 10 characters'),
    body('author')
        .trim()
        .escape()
        .notEmpty()
        .withMessage('author is required')
        .bail()
        .isAlphanumeric().withMessage('author can only contain letters and digits')
        .toLowerCase(),
    body('isPublished')
        .optional()
        .isBoolean()
        .withMessage('published must be true or false')
        .toBoolean(),
    handleValidationErrors,
];

export const validateUpdateBlog = [
   body('title')
        .optional()
        .trim()
        .escape()
        .notEmpty()
        .withMessage('title is required')
        .bail()
        .isLength({min: 3}).withMessage('title must be at least 3 characters'),
    body('content')
        .optional()
        .trim()
        .escape()
        .notEmpty()
        .withMessage('content is required')
        .bail()
        .isLength({min: 10}).withMessage('content must be at least 10 characters'),
    body('author')
        .optional()
        .trim()
        .escape()
        .notEmpty()
        .withMessage('author is required')
        .bail()
        .isAlphanumeric().withMessage('author can only contain letters and digits')
        .toLowerCase(),
    body('isPublished')
        .optional()
        .isBoolean()
        .withMessage('published must be true or false')
        .toBoolean(),
    handleValidationErrors,

];


