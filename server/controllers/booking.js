const Booking = require("../models/booking");
const Hairdresser = require("../models/hairdresser");
const User = require("../models/user");
const moment = require("moment");

exports.getBookings = async function(req, res, next) {
    try {
        Hairdresser.findById(req.params.id)
            .populate("bookings")
            .exec(async function(error, foundHairdresser) {
                if(error) {
                    return next(error);
                }
                let bookings = foundHairdresser.bookings;
                return res.status(200).json(bookings);
        });
    } catch(error) {
        return next(error);
    }
}

exports.createBooking = async function(req, res, next) {
    try {
        const {date, time, user} = req.body;

        Hairdresser.findById(req.params.id)
            .populate("bookings")
            .exec(async function(error, selectedHairdresser) {
                if(error) {
                    return next(error);
                }

                if(isValidBooking(date, time, selectedHairdresser)) {
                    const booking = new Booking({ date, time, hairdresser: selectedHairdresser, user});
                    // save booking on hairdresser model
                    selectedHairdresser.bookings.push(booking);
                    await selectedHairdresser.save();
                    // save booking on booking model
                    await Booking.create(booking);
                    // save booking on user model
                    await User.findById(user._id)
                        .populate("bookings")
                        .exec(async function(error, selectedUser) {
                            if(error) {
                                return next(error);
                            }
                            selectedUser.bookings.push(booking);
                            await selectedUser.save();
                    });

                    return res.status(200).json({"booking": true});

                } else {
                    let message = "The booking already exists."
                    return next({
                        status: 400,
                        message
                    });
                }
        });

    } catch(error) {
        return next(error);
    }
}

// check there is not overlap booking
// will implement on client side to stop this but just in case
function isValidBooking(date, time, hairdresser) {
    let isValid = true;

    // check if there is any booking first
    if(hairdresser.bookings) {
        isValid = hairdresser.bookings.every(function(booking) {
            // check only bookings with the same date
            if (moment(date).month() === moment(booking.date).month()
                && moment(date).date() === moment(booking.date).date()) 
            {
                return (!(booking.time === time));
            } else {
                return true;
            }
        })
    }
    return isValid;
}