import { processPaymentService } from "../services/payment.service";

export const processPayment = async (req, res) => {
  try {
    const { orderId } = req.body;
    const order = await processPaymentService(orderId);
    return res.status(200).json({
      success: true,
      data: order,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
