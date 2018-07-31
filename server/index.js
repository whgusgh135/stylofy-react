const express = require("express");
const app = express();

// import sensitive informations
const config = require("./config/dev");

// middleware that parses req.body to json
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// connect to mlab database (mongodb)
// return data as Promise
// mlab uses mongod v3.6.6 so it requires userNewUrlParser:true
const mongoose = require("mongoose");
mongoose.Promise = Promise;
mongoose.connect(config.DB_URI, { useNewUrlParser: true });

// fix cross origin issue
const cors = require("cors");
app.use(cors());


// handle routes
const userRoutes = require("./routes/user");
const hairdresserRoutes = require("./routes/hairdresser");

app.use("/api/user", userRoutes);
app.use("/api/hairdresser", hairdresserRoutes);

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

// listen to env.PORT or localhost:3001
const PORT = process.env.PORT || 3001;

// starts server
app.listen(PORT, function() {
    console.log("Server Running");
})