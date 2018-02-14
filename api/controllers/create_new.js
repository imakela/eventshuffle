const mongoose = require("mongoose");
const Event = mongoose.model("Event");

exports.create_event = (req, res) => {
    let new_event = new Event(req.body);
    Event.nextCount((err, count) => {
        if (!err) {
            res.json({ id: count })
        } else {
            console.log(err);
            res.send(err);
        }
    });
    new_event.save((err, event) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
    });
};