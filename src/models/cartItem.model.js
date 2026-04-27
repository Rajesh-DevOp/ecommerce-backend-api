import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";

const CartItem = sequelize.define(
  "CardItem",
  {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  { timestamps: true },
);
