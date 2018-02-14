const mongoose = require("mongoose");
Event = mongoose.model("Event");

exports.show_results = (req, res) => {
    Event.findOne(req.params.id, (err, event) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {

            res.json(event);
        }
    });
};