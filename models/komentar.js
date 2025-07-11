'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class komentar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      komentar.belongsTo(models.User, { foreignKey: 'userId' });
      komentar.belongsTo(models.threads, { foreignKey: 'threadsId' });
    }
  }
  komentar.init({
    isi: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    threadsId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'komentar',
  });
  return komentar;
};