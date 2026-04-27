import {
  createCategoryService,
  getAllCategoriesService,
} from "../services/category.service.js";

export const createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const category = await Category.createCategoryService(name);
    res.status(201).json({
      success: true,
      message: "Category created successfully",
      data: category,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error creating category",
    });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.getAllCategoriesService();
    res.status(200).json({
      success: true,
      message: "Categories fetched successfully",
      data: categories,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error fetching categories",
    });
  }
};
