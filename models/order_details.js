'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  order_details.init({
    order_id: DataTypes.INTEGER,
    item_id: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    qty: DataTypes.INTEGER,
    subtotal: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'order_details',
  });
  return order_details;
};