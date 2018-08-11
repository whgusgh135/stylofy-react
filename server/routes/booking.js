const express = require("express");
const router = express.Router();
const Booking = require("../controllers/booking");

router.post("/:id/booking", Booking.createBooking);
router.get("/:id/booking", Booking.getBookings);

module.exports = router;