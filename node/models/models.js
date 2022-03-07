const {Sequelize,DataTypes} = require('sequelize');
const{database} = require('../database/db.js');

//console.log(database);
//Crear una instancia del modelo.

const ModeloPelicula = database.define('Pelicula',{

  title : {type: DataTypes.STRING},
  content : {type: DataTypes.STRING}
})

//console.log(ModeloPelicula);
module.exports.ModeloPelicula = ModeloPelicula;
