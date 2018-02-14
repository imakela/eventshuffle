const mongoose = require("mongoose");
Events = mongoose.model("Events");
Event = mongoose.model("Event");

exports.read_event = (req, res) => {
    Events.findOne({}, (err, eventsDoc) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else if (eventsDoc.events[req.params.id] !== undefined) {
            let obj = eventsDoc.events[req.params.id];
            res.json({ "id": obj.id, "name": obj.name, "dates": obj.dates, "votes": obj.votes });
        } else {
            res.status(404).send("Event with id: " + req.params.id + " not found");
        }
    });
};