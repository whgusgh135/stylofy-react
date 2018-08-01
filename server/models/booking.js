const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    startAt: {
        type: Date,
        required: true
    },
    endAt: {
        type: Date,
        required: true
    },
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User"
    },
    hairdresser: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Hairdresser"
    }
});

module.exports = mongoose.model("Booking", bookingSchema);