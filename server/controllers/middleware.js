const jwt = require("jsonwebtoken");
const config = require("../config/dev");

exports.loginRequired = function(req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, config.JWT_KEY, function(error, decoded){
            if (decoded) {
                return next();
            } else {
                return next(error);
            }
        })

    } catch(error) {
        return next(error);
    }
};

exports.ensureCorrectUser = function(req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, config.JWT_KEY, function(error, decoded){
            if(decoded && decoded.userId === req.params.id) {
                return next();
            } else {
                return next(error);
            }
        })
    } catch(error) {
        return next(error);
    }
}