const mongoose = require("mongoose");
const Events = mongoose.model("Events");

exports.list_all_events = (req, res) => {
    let query = Events.findOne({}, { "_id": 0, "events.id": 1, "events.name": 1 });
    query.exec((err, event) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.json(event);
        }
    });
};