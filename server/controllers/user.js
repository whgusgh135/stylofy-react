const User = require("../models/user");
const jwt = require("jsonwebtoken");
const config = require("../config/dev");

// register controller
exports.register = async function(req, res, next) {
    try {
        const {firstName, lastName, phoneNumber, password, passwordConfirmation} = req.body;

        // check if password matches password confirmation
        // this can be done in client side form but this seems more safe
        if(password !== passwordConfirmation) {
            return next({
                status: 400,
                message: "Passwords do not match."
            });
        };
        
        // create an user
        await User.create({
            firstName,
            lastName,
            phoneNumber,
            password
        });
        let user = await User.findOne({phoneNumber});
        // assign json web token when successfully registered
        const token = jwt.sign({
            firstName,
            lastName,
            userId: user._id
        }, config.JWT_KEY, { expiresIn: "1h" });

        return res.json({
            token,
            firstName,
            lastName
        });

    } catch(error) {
        // 11000 code called because of unique property of phone number
        if(error.code === 11000) {
            error.message = "The phone number already exists."
        }
        // other errors such as not entering required values
        // this will be caught in client side form but just in case
        return next({
            status: 400,
            message: error.message
        });
    }
}

// authentication controller
exports.authenticate = async function(req, res, next) {
    try {
        let user = await User.findOne({phoneNumber: req.body.phoneNumber});
        let { firstName, lastName } = user;
        // check if password matches the stored password
        let isMatch = await user.comparePassword(req.body.password);
        if(isMatch) {
            // assign json web token when successfully signed in
            const token = jwt.sign({
                firstName: user.firstName,
                lastName: user.lastName,
                userId: user._id
            }, config.JWT_KEY, { expiresIn: "1h" });

            return res.json({
                token,
                firstName,
                lastName
            });

        } else {
            return next({
                status: 400,
                message: "Wrong phone number or password."
            });
        }
        

    } catch(error) {
        return next({
            status: 400,
            message: "Invalid phone number or password."
        });
    }
}