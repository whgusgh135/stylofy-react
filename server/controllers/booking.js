const Booking = require("../models/booking");
const Hairdresser = require("../models/hairdresser");

exports.createBooking = async function(req, res, next) {
    try {
        const {startAt, endAt, hairdresser} = req.body;

        Hairdresser.findById(hairdresser._id)
            .populate("bookings")
            .exec(function(error, selectedHairdresser) {
                if(error) {
                    return next(error);
                }
                if(isValidBooking(startAt, endAt, selectedHairdresser)) {
                    // save booking
                }

            })

    } catch(error) {
        return next(error);
    }
}

// check there is not overlap booking
// will implement on client side to stop this but just in case
function isValidBooking(startAt, endAt, hairdresser) {
    let isValid = true;

    // check if there is any booking first
    if(hairdresser.bookings) {
        isValid = hairdresser.bookings.every(function(booking) {

        })
    }
}