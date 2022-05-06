var request = require('request');
var jwt=require('jsonwebtoken');
var zoom_key = process.env.CLIENT_ID;
var zoom_sec = process.env.CLIENT_SEC;


const data = {
    iss: process.env.ZOOM_API_KEY,
    exp: ((new Date()).getTime() + 5000)
};
const token = jwt.sign(data, process.env.ZOOM_API_SEC);

// Create and Save a new Meeting
exports.createMeetingScheduled = (req, res) => {
    const playload = req.body;

    try {
        var options = {
            url: `https://api.zoom.us/v2/users/me/meetings`,
            method: "POST",
            auth: {
                bearer: token,
            },
            json: true,
            body: {
                start_time: playload.date,
                duration: playload.duration,
                topic: playload.topic,
                timezone:playload.timezone,
                type: 2,
            },
        };
        request(options, (error, response, body) => {
            console.log(response.statusCode);
            if (!error && response.statusCode === 201) {
                res.send(response);
            } else {
                res.send({ message: body.message });
            }
        });
    } catch (e) {
        res.status(500).send(e.toString());
    }
};


// Create and Save a new Meeting
exports.createMeeting = (req, res) => {
    const playload = req.body;

    try {
        var options = {
            url: `https://api.zoom.us/v2/users/me/meetings`,
            method: "POST",
            auth: {
                bearer: token,
            },
            json: true,
            body: {
                type: 1,
            },
        };
        request(options, (error, response, body) => {
            console.log(response.statusCode);
            if (!error && response.statusCode === 201) {
                res.send(response);
            } else {
                res.send({ message: body.message });
            }
        });
    } catch (e) {
        res.status(500).send(e.toString());
    }
};



//Webinars
// Create and Save a new Meeting
exports.createWebinarScheduled = (req, res) => {
    const playload = req.body;

    try {
        var options = {
            url: `https://api.zoom.us/v2/users/me/webinars`,
            method: "POST",
            auth: {
                bearer: token,
            },
            json: true,
            body: {
                start_time: playload.date,
                duration: playload.duration,
                topic: playload.topic,
                timezone:playload.timezone,
                type: 2,
            },
        };
        request(options, (error, response, body) => {
            console.log(response.statusCode);
            if (!error && response.statusCode === 201) {
                res.send(response);
            } else {
                res.send({ message: body.message });
            }
        });
    } catch (e) {
        res.status(500).send(e.toString());
    }
};


// Create and Save a new Meeting
exports.createWebinar = (req, res) => {
    const playload = req.body;

    try {
        var options = {
            url: `https://api.zoom.us/v2/users/me/webinars`,
            method: "POST",
            auth: {
                bearer: token,
            },
            json: true,
            body: {
                type: 1,
            },
        };
        request(options, (error, response, body) => {
            console.log(response.statusCode);
            if (!error && response.statusCode === 201) {
                res.send(response);
            } else {
                res.send({ message: body.message });
            }
        });
    } catch (e) {
        res.status(500).send(e.toString());
    }
};