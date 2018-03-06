const mongoose = require('mongoose');
const Event = mongoose.model('Event');

exports.read_event = (req, res) => {
    Event.findOne({ 'id': req.params.id }, (err, event) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else if (event !== null) {
            const resObj = {         // For response being in proper order.
                'id': event.id,
                'name': event.name,
                'dates': event.dates,
                'votes': event.votes
            };
            res.json(resObj);
        } else {
            res.status(404).send('Event with id: ' + req.params.id + ' not found');
        }
    });
};
