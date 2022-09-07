const express = require('express');
const router = require('../router/router');
require("dotenv").config();
const app = express();

app.use(express.json());

app.use('/db', router);


app.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Service is Up',
    });
});

// default SERVICE call (kinda like an actuator)
// app.get('/', (req, res, next) => {
//     res.status(200).json({
//         message: 'Service is Up',
//     });
// });

// cors = Cross Origin Resource Sharing
// localhost:3000/ this for example will appear in ("/")
// or 
// localhost:3000/example will appear as ("/example")
app.use('/', router);

// middleware to handle errors and bad urls
app.use((req, res, next) => {
    const error = new Error("Not Found"); // error is a class and we pass in an error
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
        },
    });
});

module.exports = app;