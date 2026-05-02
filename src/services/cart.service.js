import CartItem from "../models/cartItem.model.js";
import Product from "../models/product.model.js";
export const addToCartService = async (userId, productId, quantity) => {
  try {
    //find  if item is already in cart
    const cartItem = await CartItem.findOne({
      where: { userId, productId },
    });
    if (cartItem) {
      //update quantity
      cartItem.quantity += quantity;
      await cartItem.save();
      return cartItem;
    }
    //create new cart item
    const newCartItem = await CartItem.create({
      userId,
      productId,
      quantity,
    });
    return newCartItem;
  } catch (error) {
    throw new Error("Error adding to cart");
  }
};

export const getCartService = async (userId) => {
  try {
    const cartItems = await CartItem.findAll({
      where: { userId },
      include: {
        model: "Product",
        attributes: ["id", "name", "price"],
      },
    });
    return cartItems;
  } catch (error) {
    throw new Error("Error fetching cart");
  }
};

export const updateCartService = async (userId, productId, quantity) => {
  try {
    const cartItem = await CartItem.findOne({ where: { userId, productId } });
    if (!cartItem) {
      throw new Error("Cart item not found");
    }
    cartItem.quantity = quantity;
    cartItem.save();
    return cartItem;
  } catch (error) {
    throw new Error("Error updating cart");
  }
};

export const removeCartService = async (userId, productId) => {
  try {
    const cartItem = await CartItem.findOne({ where: { userId, productId } });
    if (!cartItem) {
      throw new Error("Cart item not found");
    }
    cartItem.destroy();
    return cartItem;
  } catch (error) {
    throw new Error("Error removing from cart");
  }
};
