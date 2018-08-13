const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        required: true
    },
    hairdresser: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Hairdresser"
    }
});

module.exports = mongoose.model("Booking", bookingSchema);