const express = require("express");
const router = express.Router();
const Booking = require("../controllers/booking");
const { loginRequired } = require("../controllers/middleware");

router.post("/:id/booking", loginRequired, Booking.createBooking);
router.get("/:id/booking", Booking.getBookings);

module.exports = router;