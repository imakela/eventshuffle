const mongoose = require("mongoose");
const Event = mongoose.model("Event");
const Events = mongoose.model("Events");

const events = new Events;
exports.create_event = (req, res) => {
    let new_event = new Event(req.body);
    events.events.push(new_event);
    events.save((err, events) => {
        if (err) {
            console.log(err);
        }
        Event.findOneAndUpdate({ _id: new_event._id }, (err, event) => {
            res.send(event.id);
        })
    });
};