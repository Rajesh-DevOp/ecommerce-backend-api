import { Router } from "express";
import { addTOCart } from "../controllers/cart.controller.js";
import { authenticateMiddleware } from "../middlewares/auth.middleware.js";
const router = Router();
router.post("/", authenticateMiddleware, addTOCart);
export default router;
