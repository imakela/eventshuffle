const mongoose = require('mongoose');
const Event = mongoose.model('Event');

exports.list_all_events = (req, res) => {
    Event.find({}, { '_id': 0, 'id': 1, 'name': 1 })
        .then((events) => {
            res.json({ 'events': events });
        })
        .catch((e) => {
            res.send(err);
        })
};