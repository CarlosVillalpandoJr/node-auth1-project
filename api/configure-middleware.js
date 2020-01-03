const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
// const session = require('express-session')

// const sessionConfig = {
//     name: 'session', // session id
//     secret: 'super secret key', // encryption key, for production should not be hardcoded 
//     cookie: {
//         maxAge: 1000 * 60 * 60, // session expiration
//         secure: false, // would want to be true in real world (https)
//         httpOnly: true // browser can't access via javascript
//     },
//     resave: false,
//     saveUninitialized: false 
// }

module.exports = server => {
    server.use(helmet());
    server.use(express.json());
    server.use(cors());
    // server.use(session(sessionConfig))
};