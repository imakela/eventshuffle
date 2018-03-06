module.exports = (app) => {
    const listAll = require('../controllers/list_all');
    const createNew = require('../controllers/create_new');
    const readEvent = require('../controllers/read_event');
    const addVote = require('../controllers/add_vote');
    const showResults = require('../controllers/show_results');

    app.route('/api/v1/event/list')
        .get(listAll.list_all_events);

    app.route('/api/v1/event')
        .post(createNew.create_event);

    app.route('/api/v1/event/:id')
        .get(readEvent.read_event);

    app.route('/api/v1/event/:id/vote')
        .post(addVote.add_vote);

    app.route('/api/v1/event/:id/results')
        .get(showResults.show_results);
}