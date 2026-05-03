import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import User from "./user.model.js";
import OrderItem from "./orderItem.model.js";
const Order = sequelize.define(
  "Order",
  {
    totalAmountPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("PENDING", "PAID", "FAILED"),
      defaultValue: "PENDING",
    },
  },

  { timestamps: true },
);
Order.belongsTo(User, { foreignKey: "userId" });
Order.hasMany(OrderItem, { foreignKey: "orderId" });

export default Order;
