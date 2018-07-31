const Hairdresser = require("../models/hairdresser");

exports.getHairdressers = async function(req, res, next) {
    try {
        let hairdressers = await Hairdresser.find({});
        return res.status(200).json(hairdressers);
    } catch(error) {
        return next(error);
    }
}