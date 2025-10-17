
export function authorizeRoles(...allowedRoles) {
    //Have to wrap the middleware function in additional function due to needing additional parameters (allowedRoles).
    return (req, res, next) => {
        if(!allowedRoles.includes(req.user.role)){
            const error = new Error('Forbidden: insufficient permissions');
            error.status = 403;
            return next(error);
        }
        return next();
    };
}