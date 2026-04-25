import express from "express";
import authRoutes from "./src/routes/auth.route.js";
import userRoutes from "./src/routes/user.route.js";
import productRoutes from "./src/routes/product.route.js";
const app = express();

app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/product", productRoutes);
app.get("/", (req, res) => {
  res.send("Ecommerce API running 🚀");
});

export default app;
