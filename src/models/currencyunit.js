'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CurrencyUnit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CurrencyUnit.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CurrencyUnit',
    tableName: 'currencyunit',
    createdAt: false,
    updatedAt: false,
    underscore: false,
  });

  CurrencyUnit.associate=(models)=>{
    CurrencyUnit.hasMany(models.PromoCode,{
      onDelete:'No Action',
      foreignKey:'unit',
    });
    CurrencyUnit.hasMany(models.Subscription,{
      onDelete:'No Action',
      foreignKey:'unit',
    });
  }
  return CurrencyUnit;
};
