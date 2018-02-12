const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Event = mongoose.model("Event");


const Events = new Schema({
    events: [Event.schema]
});


module.exports = mongoose.model("Events", Events); 