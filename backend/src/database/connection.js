const knex = require('knex');
const configurations = require('../../knexfile');

const configDb = process.env.NODE_ENV == 'test' ? configurations.test : configurations.development;
const connection = knex(configDb);

module.exports = connection;
