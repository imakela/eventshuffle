const mongoose = require("mongoose");
const Event = mongoose.model("Event");
const Events = mongoose.model("Events");

let events;
Events.findOneAndUpdate({}, { upsert: true }, (err, doc) => {
    if (err) {
        console.log(err);
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
        }
    })
    events.events.push(new_event);
    events.save((err, events) => {
        if (err) {
            console.log(err);
        }
    });
};