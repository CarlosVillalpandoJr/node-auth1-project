const express = require('express')
const session = require('express-session')
const connectSessionKnex = require('connect-session-knex')

const apiRouter = require('./api-router.js');
const configureMiddleware = require('./configure-middleware');
const db = require('../database/dbConfig.js')

const server = express();

const KnexSessionStore = connectSessionKnex(session)

const sessionConfig = {
    name: 'session', // session id
    secret: 'super secret key', // encryption key, for production should not be hardcoded 
    cookie: {
        maxAge: 1000 * 60 * 60, // session expiration
        secure: false, // would want to be true in real world (https)
        httpOnly: true // browser can't access via javascript
    },
    resave: false,
    saveUninitialized: false,
    // where do we store our sessions
    store: new KnexSessionStore({
        knex: db,
        tablename: 'sessions',
        sidfilename: 'sid',
        createtable: true,
        clearInterval: 1000 * 60 * 60 // clear expired sessions at end of day
    })
}

configureMiddleware(server);

server.use(session(sessionConfig)); // makes available a req.session object
server.use('/api', apiRouter) 

server.get('/', (req, res) => {
    res.json({ message: 'Inital GET working' })
})

module.exports = server;