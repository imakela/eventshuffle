const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

const dateValidator = (date) => {
    return date.length > 0;
};

const Event = new Schema({
    id: {
        type: Number,
        default: 0
    },
    name: {
        type: String,
        required: true,
    },
    dates: {
        type: [{
            type: String,
        }],
        validate: dateValidator
    },
    votes: {
        type: [{
            _id: false,
            date: {
                type: String,
            },
            people: {
                type: [{
                    type: String,
                }]
            }
        }]
    },
});

Event.plugin(autoIncrement.plugin, { model: 'event', field: 'id' });

module.exports = mongoose.model('Event', Event);