module.exports = (app) => {
    const event = require("../controllers/controller");

    app.route("/api/v1/event/list")
        .get(event.list_all_events);

    app.route("/api/v1/event")
        .post(event.create_event);

    app.route("/api/v1/event/:id")
        .get(event.read_event);

    app.route("/api/v1/event/:id/vote")
        .post(event.add_vote);

    app.route("/api/v1/event/:id/results")
        .get(event.show_results);
}