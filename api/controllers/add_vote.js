const mongoose = require("mongoose");
//Events = mongoose.model("Events");

exports.add_vote = (req, res) => {
    Events.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, event) => {
        if (err) {
            res.send(err);
        }
        res.json(event);
    });
};