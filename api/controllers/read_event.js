const mongoose = require("mongoose");
//Events = mongoose.model("Events");

exports.read_event = (req, res) => {
    Events.findById(req.params.id, (err, event) => {
        if (err) {
            res.send(err);
        }
        res.json(event);
    });
};