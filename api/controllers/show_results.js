const mongoose = require("mongoose");
const _ = require("lodash");
const Event = mongoose.model("Event");

exports.show_results = (req, res) => {
    Event.findOne({ "id": req.params.id }, (err, event) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else if (event !== null) {
            let suitableDates = [];
            if (event.votes.length > 0) {
                const everyone = [...new Set(event.votes.map((v) => {
                    return v.people
                }).reduce((a, b) => a.concat(b)))];
                if (everyone.length > 0) {
                    for (let i = 0; i < event.votes.length; i++) {
                        if (_.difference(everyone, event.votes[i].people).length === 0) {
                            suitableDates.push(event.votes[i]);
                        }
                    }
                }
            }
            const orderedDates = suitableDates.map((e) => {
                return { "date": e.date, "people": e.people }
            });
            const resObj = {
                "id": event.id,
                "name": event.name,
                "suitableDates": orderedDates
            };
            res.json(resObj);
        } else {
            res.status(404).send("Event with id: '" + req.params.id + "' not found");
        }
    });
};