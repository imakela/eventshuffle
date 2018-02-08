const mongoose = require("mongoose");
Event = mongoose.model("Events");

exports.list_all_events = (req, res) => {
    Event.find({}, (err, event) => {
        if (err) {
            res.send(err);
        }
        res.json(event);
    });
};

exports.create_event = (req, res) => {
    let new_event = new Event(req.body);
    new_event.save((err, event) => {
        if (err) {
            res.send(err)
        }
        res.json(event);
    });
};

exports.read_event = (req, res) => {
    Event.findById(req.params.id, (err, event) => {
        if (err) {
            res.send(err);
        }
        res.json(event);
    });
};

exports.add_vote = (req, res) => {
    Event.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, event) => {
        if (err) {
            res.send(err);
        }
        res.json(event);
    });
};

exports.show_results = (req, res) => {
    Event.findById(req.params.id, (err, event) => {
        if (err) {
            res.send(err);
        }
        res.json(event);
    });
};