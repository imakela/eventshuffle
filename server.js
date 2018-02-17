const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
const routes = require("./api/routes/routes");
const Event = require("./api/models/event");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/Eventdb");

app.use(bodyparser.json());

routes(app);

app.listen(port);

console.log("Server started on: ", port);