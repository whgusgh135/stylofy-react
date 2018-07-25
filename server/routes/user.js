const express = require("express");
const router = express.Router();
const User = require("../controllers/user");

// user controller api routes
router.post("/auth", User.authenticate);
router.post("/register", User.register);

module.exports = router;