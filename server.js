const http = require('http'); // proven design pattern, lightweight smaller than using express
const app = require('./app/app');
require("dotenv").config();

http.createServer(app).listen(process.env.port, () => {
    console.log(`Server is running on port ${process.env.port}`);
});




// const express = require('express');
// require('dotenv').config();
// const app = express();

// app.use(express.json());

// app.get('/', (req, res, next) => {
//     res.json({
//         message: 'Using Get /',
//         // host

//     });
// });


// http.createServer(app).listen(process.env.port, () => {
//     console.log(`Server is running on port ${process.env.port}`);
// });