const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// user data model
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    bookings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking"
    }]
});

// hashing password before storing data
// this is called whenever new user data is created
userSchema.pre("save", async function(next) {
    try {
        // just in case the password is already hashed
        if(!this.isModified("password")) {
            return next();
        };
        const user = this;

        // hashing the password
        await bcrypt.hash(user.password, 10)
            .then(function(hash) {
                user.password = hash;
                next();
        });

    } catch(error) {
        return next(error);
    }
});

// method to compare user input with hashed password that is stored in database
userSchema.methods.comparePassword = async function(userPassword, next) {
    try {
        let isSame = await bcrypt.compareSync(userPassword, this.password);
        return isSame;
    } catch(error) {
        return next(error);
    }
}

module.exports = mongoose.model("User", userSchema);