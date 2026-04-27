import { Router } from "express";
import {
  createCategory,
  getAllCategories,
} from "../controllers/category.controller.js";
import { authenticateMiddleware } from "../middlewares/auth.middleware.js";
import { authorizeRolesMiddleware } from "../middlewares/authorizeRoles.middleware.js";

const router = Router();

router.post(
  "/",
  authenticateMiddleware,
  authorizeRolesMiddleware("admin"),
  createCategory,
);
router.get("/", getAllCategories);

export default router;
