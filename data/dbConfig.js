const knex = require('knex');

const knexConfig = require('../knexfile.js'); //development

// pick the development configuration
//returns configuration development object from knexfile.js
const db= knex(knexConfig.development);

module.exports = db;