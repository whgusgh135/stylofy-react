const jwt = require("jsonwebtoken");
// const config = require("../config/dev");

exports.loginRequired = async function(req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.JWT_KEY, function(error, decoded){
            if(decoded) {
                return next();
            } else {
                return next({status: 401, message: "Unauthorized"});
            }
        })

    } catch(error) {
        return next({
            status: 400,
            message: "Unauthorized. Please log in first."
        });
    }
};

exports.ensureCorrectUser = async function(req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.JWT_KEY, function(error, decoded){
            if(decoded && decoded.userId === req.params.id) {
                return next();
            } else {
                return next({status: 401, message: "Unauthorized"});
            }
        })
    } catch(error) {
        return next({
            status: 400,
            message: "Unauthorized. Please log in first."
        });
    }
}