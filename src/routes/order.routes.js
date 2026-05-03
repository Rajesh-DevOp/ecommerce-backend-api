import { Router } from "express";
import { authenticateMiddleware } from "../middlewares/auth.middleware";
import { getOrders, placeOrder } from "../controllers/order.controller";

const router = Router();
router.post("/", authenticateMiddleware, placeOrder);
router.get("/", authenticateMiddleware, getOrders);
export default router;
