'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //TODO Verificar cardionalidade do sequelize em todas as models
      Notes.belongsTo(models.Patient, {
        foreignKey: 'patient_id'
      })
    }
  }
  Notes.init({
    date: DataTypes.DATE,
    description: DataTypes.STRING,
    title: DataTypes.STRING,
    positive: DataTypes.FLOAT,
    negative: DataTypes.FLOAT,
    neutral: DataTypes.FLOAT,
    sentiment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Note',
  });
  return Notes;
};