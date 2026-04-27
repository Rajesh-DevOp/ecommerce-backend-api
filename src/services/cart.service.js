import CartItem from "../models/cartItem.model.js";

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
