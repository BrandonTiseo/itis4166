import { body, param, oneOf } from 'express-validator';
import { handleValidationErrors } from './handleValidationErrors.js';

export const validateUser = [
    body('email')
        .exists({values: 'false'})
        .withMessage('email is required')
        .bail()
        .isEmail()
        .withMessage('email is not valid')
        .normalizeEmail(),
    
    body('password')
        .exists({values: 'false'})
        .withMessage('password is required')
        .bail()
        .isLength({min: 8, max: 64})
        .withMessage('password must contain at least 8 characters and at most 64 characters'),    
    
    handleValidationErrors
];

export const validateUpdateUser = [
    oneOf(
    [
        body('email').exists({ values: 'falsy' }),
        body('password').exists({ values: 'falsy' }),
    ],
    {
        message:
        'At least one field (email, password) must be provided',
    },
    ),

    body('email')
        .optional()
        .isEmail()
        .withMessage('email is not valid')
        .normalizeEmail(),

    body('password')
        .optional()
        .isLength({min: 8, max: 64})
        .withMessage('password must contain at least 8 characters and at most 64 characters'),    

    handleValidationErrors
];

export const validateUpdateUserRole = [
    body('role')
        .exists({ values: 'falsy' })
        .withMessage('Role is required')
        .isIn(['USER', 'ADMIN'])
        .withMessage('Invalid role'),
    handleValidationErrors
];