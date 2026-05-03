import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";
import Category from "./category.model.js";
import CartItem from "./cartItem.model.js";
import User from "./user.model.js";
const Product = sequelize.define(
  "product",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  { timestamps: true },
);

// Define Association
Product.belongsTo(Category, {
  foreignKey: "categoryId",
  as: "category",
});

Product.belongsToMany(User, {
  through: "CartItem",
  foreignKey: "productId",
  as: "users",
});

export default Product;
