import { validationResult } from 'express-validator';

export function handleValidationErrors(req, res, next) {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res
        .status(errors.status || 400)
        .json({errors: errors.array().map((err)=>err.msg)});
    }
    next();
}