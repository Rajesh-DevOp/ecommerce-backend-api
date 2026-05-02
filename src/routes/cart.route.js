import { Router } from "express";
import {
  addToCart,
  getCart,
  updateCart,
  removeCart,
} from "../controllers/cart.controller.js";
import { authenticateMiddleware } from "../middlewares/auth.middleware.js";
const router = Router();
router.post("/", authenticateMiddleware, addToCart);
router.get("/", authenticateMiddleware, getCart);
router.put("/", authenticateMiddleware, updateCart);
router.delete("/:productId", authenticateMiddleware, removeCart);
export default router;
