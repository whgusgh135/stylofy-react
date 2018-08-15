const express = require("express");
const router = express.Router();
const User = require("../controllers/user");
const Booking = require("../controllers/booking");
const { ensureCorrectUser } = require("../controllers/middleware");

// user controller api routes
router.post("/auth", User.authenticate);
router.post("/register", User.register);

router.get("/:id/bookings", ensureCorrectUser, Booking.getUserBookings);
router.delete("/:id/booking/:booking_id", ensureCorrectUser, Booking.deleteBooking);

module.exports = router;