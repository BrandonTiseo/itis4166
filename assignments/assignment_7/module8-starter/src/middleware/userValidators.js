import { body } from 'express-validator';
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