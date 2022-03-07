const { Sequelize } = require('sequelize');

const database = new Sequelize('peliculas', 'root', 'Proyecto$23',{
  host: 'localhost',
  dialect: 'mysql'
});


module.exports.database = database;
