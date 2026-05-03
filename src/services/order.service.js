import sequelize from "../config/db.config.js";
import CartItem from "../models/cartItem.model.js";
import Product from "../models/product.model.js";
import Order from "../models/order.model.js";
import OrderItem from "../models/orderItem.model.js";

export const placeOrderService = async (userId) => {
  const transaction = await sequelize.transaction();

  try {
    // 1. get cart items
    const cartItems = await CartItem.findAll({
      where: { userId },
      transaction,
    });

    if (!cartItems.length) {
      throw new Error("Cart is empty");
    }

    let totalAmount = 0;

    // 2. calculate total & check stock
    for (const item of cartItems) {
      const product = await Product.findByPk(item.productId, { transaction });

      if (product.stock < item.quantity) {
        throw new Error(`Insufficient stock for ${product.name}`);
      }

      totalAmount += product.price * item.quantity;
    }

    // 3. create order
    const order = await Order.create(
      {
        userId,
        totalAmount,
      },
      { transaction },
    );

    // 4. create order items + reduce stock
    for (const item of cartItems) {
      const product = await Product.findByPk(item.productId, { transaction });

      await OrderItem.create(
        {
          orderId: order.id,
          productId: product.id,
          quantity: item.quantity,
          price: product.price,
        },
        { transaction },
      );

      // reduce stock
      product.stock -= item.quantity;
      await product.save({ transaction });
    }

    // 5. clear cart
    await CartItem.destroy({
      where: { userId },
      transaction,
    });

    // 6. commit
    await transaction.commit();

    return order;
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};
