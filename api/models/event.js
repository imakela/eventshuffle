const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const autoIncrement = require("mongoose-auto-increment");

autoIncrement.initialize(mongoose.connection);

const Event = new Schema({
    id: {
        type: Number, default: 0
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
    },
});

Event.plugin(autoIncrement.plugin, { model: 'event', field: 'id' });

module.exports = mongoose.model("Event", Event);