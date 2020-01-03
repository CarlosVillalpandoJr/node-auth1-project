const express = require('express')
const session = require('express-session')

const apiRouter = require('./api-router.js');
const configureMiddleware = require('./configure-middleware');

const server = express();

const sessionConfig = {
    name: 'session', // session id
    secret: 'super secret key', // encryption key, for production should not be hardcoded 
    cookie: {
        maxAge: 1000 * 60 * 60, // session expiration
        secure: false, // would want to be true in real world (https)
        httpOnly: true // browser can't access via javascript
    },
    resave: false,
    saveUninitialized: false 
}

configureMiddleware(server);

server.use('/api', apiRouter)

server.get('/', (req, res) => {
    res.json({ message: 'Inital GET working' })
})

module.exports = server;