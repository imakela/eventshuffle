const mongoose = require("mongoose");
const Event = mongoose.model("Event");
const Events = mongoose.model("Events");

let events;
// Check if Events document exists, if it doesn't, create it.
Events.findOneAndUpdate({}, { upsert: true }, (err, doc) => {
    if (err) {
        console.log(err);
        res.send(err);
    } else if (!doc) {
        events = new Events;
    } else {
        events = doc;
    }
});

exports.create_event = (req, res) => {
    let new_event = new Event(req.body);
    Event.nextCount((err, count) => {
        if (!err) {
            res.json({ id: count })
        } else {
            console.log(err);
            res.send(err);
        }
    })
    events.events.push(new_event);
    events.save((err, events) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
    });
};