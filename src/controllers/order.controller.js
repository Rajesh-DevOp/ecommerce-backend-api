import { getOrdersService, placeOrderService } from "../services/order.service";

export const placeOrder = async (req, res) => {
  try {
    const userId = req.user.id;
    const order = await placeOrderService(userId);
    return res.status(201).json({
      success: true,
      data: order,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getOrders = async (req, res) => {
  try {
    const userId = req.user.id;
    const orders = await getOrdersService(userId);
    return res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
