const express = require('express')

const apiRouter = require('./api-router.js');
const configureMiddleware = require('./configure-middleware');

const server = express();

configureMiddleware(server);

server.use('/api', apiRouter)

server.get('/', (req, res) => {
    res.json({ message: 'Inital GET working' })
})

module.exports = server;