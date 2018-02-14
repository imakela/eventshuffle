const mongoose = require("mongoose");
Events = mongoose.model("Events");

exports.add_vote = (req, res) => {
    Events.findOne({}, (err, eventsDoc) => {
        let eventIndex = req.params.id;
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            for (let i = 0; i < req.body.votes.length; i++) {
                let dateExists = (eventsDoc.events[eventIndex].votes.filter(e => e.date === req.body.votes[i])
                    .length > 0);
                if (!dateExists) {
                    eventsDoc.events[eventIndex].votes
                        .push({ "date": req.body.votes[i], "people": [req.body.name] });
                } else {
                    let oldIndex = eventsDoc.events[eventIndex].votes.findIndex((e) => {
                        return e.date === req.body.votes[i]
                    });
                    eventsDoc.events[eventIndex].votes[oldIndex].people
                        .push(req.body.name);
                }

            }
            eventsDoc.save((err, saved) => {
                if (err) {
                    console.log(err);
                } else {
                    let resObj = {
                        "id": req.params.id,
                        "name": saved.events[req.params.id].name,
                        "dates": saved.events[req.params.id].dates,
                        "votes": saved.events[req.params.id].votes
                    }
                    res.json(resObj);
                }
            });
        }
    });
};