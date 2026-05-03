import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Order from "./order.model.js";
import Product from "./product.model.js";
const OrderItem = sequelize.define(
  "OrderItem",
  {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: Datatypes.FLOAT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  },
);
OrderItem.belongsTo(Order, {
  foreignKey: "orderId",
  as: "item",
});
OrderItem.belongsTo(Product, {
  foreignKey: "productId",
});
export default OrderItem;
