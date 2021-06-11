## Frontend Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the frontend directory, you can run:

#### `npm install`
#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Backend Scripts

In the backend directory, you can run:

#### `npm install`
#### `npm run server`

## API

This API uses GET and POST requests to manage The Cabin Company content.

All responses come in standard JSON.
All requests must include a content-type of application/json and the body must be valid JSON.

## Failed Resquests and response:

For all endpoints, upon receiving a bad request you get:

**Failed Response:**

```json
HTTP/1.1 400 Bad Request
Content-Type: application/json

{
    "error": "error message here"
}
```

## Endpoints:

## Listing

**You get:** A list of all cabins and for each cabin:

- id => string
- name => string
- pricePerNight => number
- address => object
- beds => number
- baths => number
- image => string
- bookings => object

**Request:**

```json
GET /api/cabins/ HTTP/1.1
Content-Type: application/json
```

**Successful Response:**

```json
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "cabins": [
        {
            "address": {
                "street": "123 Main St",
                "city": "Portland",
                "state": "Maine",
                "zipCode": 14019
            },
            "beds": 3,
            "baths": 2,
            "_id": "60b9496354ac21f5f14c96be",
            "name": "Snowy Bungalow",
            "pricePerNight": 150,
            "image": "https://images.pexels.com/photos/754268/pexels-photo-754268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "bookings": [
                {
                    "isPaid": true,
                    "_id": "60c0f50e6c1afd20847e9e23",
                    "checkIn": "2021-06-16T04:00:00.000Z",
                    "checkOut": "2021-06-19T04:00:00.000Z",
                    "numNights": 3,
                    "totalPrice": 450
                }
            ]
        },
        {
            "address": {
                "street": "123 Chingu Road",
                "city": "Denver",
                "state": "Colorado",
                "zipCode": 80014
            },
            "beds": 5,
            "baths": 3,
            "_id": "60b9496354ac21f5f14c96bf",
            "name": "Mountain Getaway",
            "pricePerNight": 275,
            "image": "https://images.pexels.com/photos/2294125/pexels-photo-2294125.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            "bookings": [
                {
                    "isPaid": false,
                    "_id": "60c0ed696c1afd20847e9e1f",
                    "checkIn": "2021-06-10T04:00:00.000Z",
                    "checkOut": "2021-06-12T04:00:00.000Z",
                    "numNights": 2,
                    "totalPrice": 550
                }
            ]
        }
]
```

## Cabin details

**You send:** The cabin id.

**You get:** The cabin details:

- id => string
- name => string
- pricePerNight => number
- address => object
- beds => number
- baths => number
- image => string
- bookings => object

**Request:**

```json
GET /api/cabins/:id HTTP/1.1
Content-Type: application/json

```

**Successful Response:**

```json
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
      "address": {
        "street": "123 Chingu Road",
        "city": "Denver",
        "state": "Colorado",
        "zipCode": 80014
    },
    "beds": 5,
    "baths": 3,
    "_id": "60b9496354ac21f5f14c96bf",
    "name": "Mountain Getaway",
    "pricePerNight": 275,
    "image": "https://images.pexels.com/photos/2294125/pexels-photo-2294125.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "bookings": [
        {
            "isPaid": false,
            "_id": "60c0ed696c1afd20847e9e1f",
            "checkIn": "2021-06-10T04:00:00.000Z",
            "checkOut": "2021-06-12T04:00:00.000Z",
            "numNights": 2,
            "totalPrice": 550
        }
    ]
  }  
]
```

## Book a cabin

**You send:** The check-in date, the check-out date.

**You get:** The booking details:

- id => string
- checkIn => string
- checkOut => string
- numNights => number
- totalPrice => number
- isPaid => boolean

**Request:**

```json
POST /api/cabins/:id HTTP/1.1
Content-Type: application/json

```

**Successful Response:**

```json
HTTP/1.1 201 Created
Content-Type: application/json

[
  {
          "booking": {
        "isPaid": false,
        "_id": "60c13e46c4afb63774beca40",
        "checkIn": "2020-08-16T04:00:00.000Z",
        "checkOut": "2020-08-19T04:00:00.000Z",
        "numNights": 3,
        "totalPrice": 825
        }
  }  
]
```

