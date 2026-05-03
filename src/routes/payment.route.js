import { Router } from "express";
import { authenticateMiddleware } from "../middlewares/authorizeRoles.middleware.js";
import { processPayment } from "../controllers/payment.controller.js";

const router = Router();
router.post("/", authenticateMiddleware, processPayment);
export default router;
