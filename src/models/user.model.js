import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";
import Order from "./order.model.js";
const User = sequelize.define(
  "user",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("ADMIN", "USER"),
      defaultValue: "USER",
    },
  },
  {
    timestamps: true,
  },
);

User.belongsToMany(Product, {
  through: "CartItem",
  foreignKey: "userId",
  as: "cart",
});
User.hasMany(Order, {
  foreignKey: "userId",
});
export default User;
