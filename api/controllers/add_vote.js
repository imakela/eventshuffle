const mongoose = require("mongoose");
Event = mongoose.model("Event");

exports.add_vote = (req, res) => {
    Event.findOne({ "id": req.params.id }, (err, event) => {
        let eventIndex = req.params.id;
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            for (let i = 0; i < req.body.votes.length; i++) {
                let dateExists = (event.votes.filter(e => e.date === req.body.votes[i])
                    .length > 0);
                if (!dateExists) {
                    event.votes
                        .push({ "date": req.body.votes[i], "people": [req.body.name] });
                } else {
                    let oldIndex = event.votes.findIndex((e) => {
                        return e.date === req.body.votes[i]
                    });
                    event.votes[oldIndex].people
                        .push(req.body.name);
                }

            }
            event.save((err, saved) => {
                if (err) {
                    console.log(err);
                } else {
                    let resObj = {
                        "id": req.params.id,
                        "name": saved.name,
                        "dates": saved.dates,
                        "votes": saved.votes
                    }
                    res.json(resObj);
                }
            });
        }
    });
};
