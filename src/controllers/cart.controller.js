import { addToCartService } from "../services/cart.service.js";

export const addTOCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.user.id;
  try {
    const cartItem = await addToCartService(userId, productId, quantity);
    res.status(200).json({
      success: true,
      message: "Item added to cart",
      data: cartItem,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
