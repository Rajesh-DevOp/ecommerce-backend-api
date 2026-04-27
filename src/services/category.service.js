export const createCategoryService = async (categoryData) => {
  // Implementation for creating a new category
  try {
    return await Category.create(categoryData);
  } catch (error) {
    throw new Error("Error creating category");
  }
};

export const getAllCategoriesService = (req, res) => {
  try {
    return awaitCategory.findAll();
  } catch (error) {
    throw new Error("Error fetching categories");
  }
};
