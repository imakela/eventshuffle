const mongoose = require('mongoose');
const Event = mongoose.model('Event');

exports.create_event = (req, res) => {
    const new_event = new Event(req.body);
    new_event.save().then((event) => {
        res.json({ id: event.id })
    }).catch((e) => {
        res.send(e);
    })
};