import dotenv from "dotenv";
import app from "./app.js";
import sequelize from "./src/config/db.config.js";
dotenv.config();
const PORT = process.env.PORT || 8080;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected ✅");
    app.listen(PORT, () => {
      console.log(`app is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to DB ❌", error);
    process.exit(1); // crash intentionally (important)
  }
};

startServer();
