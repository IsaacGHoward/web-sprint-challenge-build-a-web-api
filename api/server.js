const express = require('express');
const actionsRouter = require('./actions/actions-router');
const projectsRouter = require('./projects/projects-router');

const server = express();

// Complete your server here!
// Do NOT `server.listen()` inside this file!
server.use(express.json());
server.use(express.urlencoded({extended: false}));
server.use('/api/actions', actionsRouter);
server.use('/api/projects', projectsRouter);


server.get('/', (req, res) => {
  res.send(`<h2>Server is up</h2>`);
});


module.exports = server;
