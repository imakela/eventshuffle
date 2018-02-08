const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    id: {
        type: Number,
    },
    name: {
        type: String,
    },
    dates: {
        type: [{
            type: String,
        }]
    },
    votes: {
        type: [{
            dates: {
                type: String,
            },
            people: {
                type: [{
                    String
                }]
            }
        }]
    }
});

module.exports = mongoose.model("Events", EventSchema);