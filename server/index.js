const express = require("express");
const app = express();

// import sensitive informations
// const config = require("./config/dev");
// doesnt need it on production env

// middleware that parses req.body to json
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// connect to mlab database (mongodb)
// return data as Promise
// mlab uses mongod v3.6.6 so it requires userNewUrlParser:true
const mongoose = require("mongoose");
mongoose.Promise = Promise;
// mongoose.connect(config.DB_URI, { useNewUrlParser: true });
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });


// fix cross origin issue
const cors = require("cors");
app.use(cors());


// handle routes
const userRoutes = require("./routes/user");
const hairdresserRoutes = require("./routes/hairdresser");
const bookingRoutes = require("./routes/booking");

app.use("/api/user", userRoutes);
app.use("/api/hairdresser", hairdresserRoutes);
app.use("/api/hairdresser", bookingRoutes);

app.get("/error", function(req, res, next) {
    throw new Error;
});

// error handler 
// note: function that takes 4 arguments is only called if an error occurs
app.use(function(error, request, response, next) {
    return response.status(error.status || 500)
        .json({ error: {
            message: error.message || "Something went wrong."
        }})
});

// run static page together with server
const path = require("path");
const appPath = path.join(__dirname, "..", "build");
app.use(express.static(appPath));
app.get("*", function(req, res) {
    res.sendFile(path.resolve(appPath, "index.html"));
});


// listen to env.PORT or localhost:3001
const PORT = process.env.PORT || 3001;

// starts server
app.listen(PORT, function() {
    console.log("Server Running");
})