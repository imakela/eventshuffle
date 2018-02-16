const mongoose = require("mongoose");
const Event = mongoose.model("Event");

exports.list_all_events = (req, res) => {
    Event.find({}, { "_id": 0, "id": 1, "name": 1 }, (err, events) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            const orderedData = events.map((e) => {
                return { "id": e.id, "name": e.name }
            });
            const resObj = { "events": orderedData };
            res.json(resObj);
        }
    });
};