const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const dishesRouter = require('../Dishes/dishes-router.js');
const recipeRouter= require('../Recipes/recipes-router.js');
const ingredientsRouter= require('../Ingredients/ingredients-router.js');
const riRouter = require('../Recipe-Ingredients/ri-router.js');


const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/dishes', dishesRouter);
server.use('/api/recipes', recipeRouter);
server.use('/api/ingredients', ingredientsRouter);
server.use('/api/ri', riRouter);

// sanity check route
server.get('/', (req, res) => {
  res.status(200).json({ hello: 'World!' });
});

module.exports = server;
