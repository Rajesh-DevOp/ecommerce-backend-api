import { Router } from "express";
import { authenticateMiddleware } from "../middlewares/auth.middleware.js";
import { authorizeRolesMiddleware } from "../middlewares/authorizeRoles.middleware.js";
import {
  createProduct,
  getAllProducts,
} from "../controllers/product.controller.js";
const router = Router();

router.post(
  "/",
  authenticateMiddleware,
  authorizeRolesMiddleware("ADMIN"),
  createProduct,
);
router.get("/", getAllProducts);

export default router;
