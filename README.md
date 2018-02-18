# futu_eventshuffle
Task for Futurice tech-interview

## Installation & running the app
1. Clone or download this repository
2. Run npm install in repo directory
3. Install & start MongoDB
4. Run npm start / node server.js in repo directory
5. Make requests to localhost:3000

## API endpoints
### Create event

Creates a new event.

```POST /api/v1/event/```

**Example body:**

```
{
  "name": "Epic lanparty",
  "dates": [
    "2018-02-19",
    "2018-02-24",
    "2018-03-01"
  ]
}
```

**Example response:**

```
{
  "id": 0
}
```
### List all events

Lists all events and their id's.

```GET /api/v1/event/list ```

**Example response:**

```
{
  "events": [
    {
      "id": 0,
      "name": "Epic lanparty"
    },
    {
      "id": 1,
      "name": "Poker night"
    },
    {
      "id": 2,
      "name": "Housewarming party"
    }
  ]
}
```

### Show an event

Shows a specific event.

Parameters: ```id```

```GET /api/v1/event/{id}```

**Example response:**
```
{
  "id": 0,
  "name": "Epic lanparty",
  "dates": [
    "2018-02-19",
    "2018-02-24",
    "2018-03-01"
  ],
  "votes": [
    {
      "date": "2018-02-19",
      "people": [
        "Michael",
        "Peter",
        "Jennifer",
        "Lowel",
        "Pekka"
      ]
    },
    {
      "date": "2018-02-24",
      "people": [
        "Michael"
      ]
    }
  ]
}
```

### Add votes to an event

Adds a vote to an event.

Parameters: ```id```

```POST /api/v1/event/{id}/vote```

**Example body:**

```
{
  "name": "Robert",
  "votes": [
    "2018-02-19",
    "2018-02-24"
  ]
}
```

**Example response:**

```
{
  "id": "0",
  "name": "Epic lanparty",
  "dates": [
    "2018-02-19",
    "2018-02-24",
    "2018-03-01"
  ],
  "votes": [
    {
      "date": "2018-02-19",
      "people": [
        "Michael",
        "Peter",
        "Jennifer",
        "Lowel",
        "Pekka",
        "Robert"
      ]
    },
    {
      "date": "2018-02-24",
      "people": [
        "Michael",
        "Robert"
      ]
    }
  ]
}
```

### Show the results of an event

Shows dates which are suitable for all participants.

Parameters: ```id```

```GET /api/v1/event/{id}/results```

**Example response:**

```
{
  "id": 0,
  "name": "Epic lanparty",
  "suitableDates": [
    {
      "date": "2018-02-19",
      "people": [
        "Michael",
        "Peter",
        "Jennifer",
        "Lowel",
        "Pekka",
        "Robert"
      ]
    }
  ]
}
```
