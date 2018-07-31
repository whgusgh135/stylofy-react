const mongoose = require("mongoose");

const hairdresserSchema = new mongoose.Schema({
    name: String,
    bookings: String
});

module.exports = mongoose.model("Hairdresser", hairdresserSchema);