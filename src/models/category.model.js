import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Category = sequelize.define(
  "category",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: true },
);

Category.hasMany(Product, {
  foreignKey: "categoryId",
  as: "products",
});
export default Category;
