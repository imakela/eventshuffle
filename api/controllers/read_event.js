const mongoose = require('mongoose');
const Event = mongoose.model('Event');

exports.read_event = (req, res) => {
    Event.findOne({ 'id': req.params.id }, '-__v -_id')
        .then((event) => {
            if (event === null) {
                res.status(404).send('Event with id: ' + req.params.id + ' not found');
            } else {
                res.json(event);
            }
        })
        .catch((e) => {
            res.send(e);
        });
};
