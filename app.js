import express from "express";
import authRoutes from "./src/routes/auth.route.js";
const app = express();

app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("Ecommerce API running 🚀");
});

export default app;
