import Order from "../models/order.model";

export const processPaymentService = async (orderId) => {
  try {
    const order = await Order.findByPk(orderId);

    if (!order) {
      throw new Error("Order not found");
    }
    if (order.status !== "PENDING") {
      throw new Error("Order already processed");
    }
    // Simulate payment processing successfully for now
    const isPaymentSuccessful = true;
    if (isPaymentSuccessful) {
      order.status = "PAID";
    } else {
      order.status = "FAILED";
    }
    await order.save();
    return order;
  } catch (error) {
    throw error;
  }
};
