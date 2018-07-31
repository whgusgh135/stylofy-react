const express = require("express");
const router = express.Router();
const Hairdresser = require("../controllers/hairdresser");

router.get("/", Hairdresser.getHairdressers);

module.exports = router;