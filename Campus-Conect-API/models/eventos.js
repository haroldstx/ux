'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Eventos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Eventos.init({
    titulo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    fecha: DataTypes.STRING,
    lugar: DataTypes.STRING,
    tipo_evento: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Eventos',
  });
  return Eventos;
};