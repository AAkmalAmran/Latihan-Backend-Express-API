'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class threads extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      threads.belongsTo(models.User, { foreignKey: 'userId' });
      threads.hasMany(models.komentar, { foreignKey: 'threadsId' });
    }

  }
  threads.init({
    judul: DataTypes.STRING,
    isi: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'threads',
  });
  return threads;
};