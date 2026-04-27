import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";
import Category from "./category.model.js";
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
export default Product;
