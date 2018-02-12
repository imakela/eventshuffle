const mongoose = require("mongoose");
const Event = mongoose.model("Event");
const Events = mongoose.model("Events");

exports.list_all_events = (req, res) => {
    let query = Events.find({}, { "_id": 0, "events.name": 1, "events.id": 1 });
    query.exec((err, event) => {
        if (err) {
            res.send(err);
        }
        res.json(event);
    });
};