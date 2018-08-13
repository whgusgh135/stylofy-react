const mongoose = require("mongoose");

const hairdresserSchema = new mongoose.Schema({
    name: String,
    bookings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking"
    }],
    index: Number
});

module.exports = mongoose.model("Hairdresser", hairdresserSchema);