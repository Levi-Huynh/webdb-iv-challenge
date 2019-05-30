const express = require('express');
const helmet = require('helmet');

const dishesRouter = require('../Dishes/dishes-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/dishes', dishesRouter);

// sanity check route
server.get('/', (req, res) => {
  res.status(200).json({ hello: 'World!' });
});

module.exports = server;
