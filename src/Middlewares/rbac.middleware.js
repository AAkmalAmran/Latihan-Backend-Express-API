const AppError = require('../utils/AppError'); 
const authorize = (requiredRoles) => {
    return (req, res, next) => {
        const { role } = req.user; 
        
        if (!requiredRoles.includes(role)) {
            return next(new AppError('Forbidden: You do not have permission to perform this action.', 403));
        }
        next();
    };
};

module.exports = { authorize };