import {
  addToCartService,
  getCartService,
  updateCartService,
  removeCartService,
} from "../services/cart.service.js";

export const addToCart = async (req, res) => {
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

export const getCart = async (req, res) => {
  const userId = req.user.id;
  try {
    const allCartItems = await getCartService(userId);
    res.status(200).json({
      success: true,
      message: "Cart fetched successfully",
      data: allCartItems,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.user.id;
  try {
    const cartItem = await updateCartService(userId, productId, quantity);
    res.status(200).json({
      success: true,
      message: "Cart updated successfully",
      data: cartItem,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const removeCart = async (req, rea) => {
  const { productId } = req.params;
  const userId = req.user.id;
  try {
    const cartItem = await removeCartService(userId, productId);
    res.status(200).json({
      success: true,
      message: "Item removed from cart",
      data: cartItem,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
