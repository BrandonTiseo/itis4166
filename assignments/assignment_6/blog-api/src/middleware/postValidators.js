import { param, query, body, oneOf } from 'express-validator';
import { handleValidationErrors } from './handleValidationErrors.js';
import { exists } from '../respositories/categoryRepo.js';

export const validatePostId = [
  param('id')
    .isInt({ min: 1 })
    .withMessage('Post id must be a positive integer'),
  handleValidationErrors,
];

const allowedSortFields = ['id','title','createdAt','categoryId']
const allowedSortOrders = ['asc','desc']
export const validatePostQuery = [
  query('categoryId')
    .optional()
    .isInt({min: 1})
    .withMessage('CategoryId must be a positive integer'),

  query('search')
    .optional()
    .isString()
    .withMessage('search must be a string'),

  query('sortBy')
    .optional()
    .isIn(allowedSortFields)
    .withMessage(`sortBy must be one of: ${allowedSortFields}`),
  
    query('sortOrder')
      .optional()
      .isIn(allowedSortOrders)
      .withMessage(`sortOrder must be one of: ${allowedSortOrders}`),

    query('limit')
      .optional()
      .isInt({min:1, max:10})
      .withMessage('limit must be an integer between 1 and 100'),
    
    query('offset')
      .optional()
      .isInt({min:0})
      .withMessage('offset must be 0 or a positive integer'),

  handleValidationErrors,
];

export const validateCreatePost = [
  body('title')
    .exists({ values: 'falsy' })
    .withMessage('title is required')
    .bail()
    .trim()
    .escape()
    .isString()
    .withMessage('title must be a string')
    .bail()
    .isLength({ min: 3 })
    .withMessage('title must be at least 3 characters'),

  body('content')
    .exists({ values: 'falsy' })
    .withMessage('content is required')
    .bail()
    .trim()
    .escape()
    .isString()
    .withMessage('content must be a string')
    .bail()
    .isLength({ min: 10 })
    .withMessage('content must be at least 10 characters'),

  body('categoryId')
    .optional()
    .isInt({min:1})
    .withMessage('categoryId must be a positive integer')
    .bail()
    .custom(async (value) =>{
      if(value && !(await exists(value))){
        throw new Error(`Invalid categoryId: ${value}`);
      }
      return true;
    }),

  handleValidationErrors,
];

export const validateUpdatePost = [
  oneOf(
    [
      body('title').exists({ values: 'falsy' }),
      body('content').exists({ values: 'falsy' }),
      body('categoryId').exists({values: 'falsy'})
    ],
    {
      message: 'At least one field (title, content, categoryId) must be provided',
    },
  ),

  body('title')
    .optional()
    .trim()
    .escape()
    .isString()
    .withMessage('title must be a string')
    .bail()
    .isLength({ min: 3 })
    .withMessage('title must be at least 3 characters'),

  body('content')
    .optional()
    .trim()
    .escape()
    .isString()
    .withMessage('content must be a string')
    .bail()
    .isLength({ min: 10 })
    .withMessage('content must be at least 10 characters'),
  
  body('categoryId')
    .optional()
    .isInt({min:1})
    .withMessage('categoryId must be a positive integer')
    .bail()
    .custom(async (value) =>{
      if(value && !(await exists(value))){
        throw new Error(`Invalid categoryId: ${value}`);
      }
      return true;
    }),

  handleValidationErrors,
];
