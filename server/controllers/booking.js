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

exports.getUserBookings = async function(req, res, next) {
    try {
        User.findById(req.params.id)
            .populate("bookings")
            .exec(async function(error, foundUser) {
                if(error) {
                    return next(error);
                }
                let bookings = foundUser.bookings;
                return res.status(200).json(bookings);
        });
    } catch(error) {
        return next(error);
    }
}

exports.deleteBooking = async function(req, res, next) {
    try {
        // remove booking
        let foundBooking = await Booking.findById(req.params.booking_id);
        await foundBooking.remove();

        // remove the booking from user model
        await User.findById(req.params.id)
            .populate("bookings")
            .exec(async function(error, foundUser) {
                if(error) {
                    return next(error);
                }
                foundUser.bookings = foundUser.bookings.filter(booking => booking._id !== req.params.booking_id);
                await User.findByIdAndUpdate(req.params.id, foundUser);
        });

        // remove the booking from hairdresser model
        await Hairdresser.findById(req.body.hairdresserId)
            .populate("bookings")
            .exec(async function(error, foundHairdresser) {
                if(error) {
                    return next(error);
                }
                foundHairdresser.bookings = foundHairdresser.bookings.filter(booking => booking._id !== req.params.booking_id);
                await Hairdresser.findByIdAndUpdate(req.body.hairdresserId, foundHairdresser);
        });
        

        return res.status(200).json({"message": "The booking is deleted."});
    } catch(error) {
        return next(error);
    }
}