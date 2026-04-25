import { Router } from "express";
import { authenticateMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/profile", authenticateMiddleware, (req, res) => {
  res.status(200).json({
    success: true,
    message: "User profile accessed successfully",
    data: {
      user: req.user, // This will contain the user information extracted from the token
    },
  });
});

export default router;
