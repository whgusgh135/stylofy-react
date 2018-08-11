const Hairdresser = require("../models/hairdresser");

exports.getHairdressers = async function(req, res, next) {
    try {
        let hairdressers = await Hairdresser.find({});
        return res.status(200).json(hairdressers);
    } catch(error) {
        return next(error);
    }
}

exports.selectHairdresser = async function(req, res, next) {
    try {
        let hairdresserId = req.params.id;
        let selectedHairdresser = await Hairdresser.findById(hairdresserId);

        return res.status(200).json(selectedHairdresser);
    } catch(error) {
        return next(error);
    }
}