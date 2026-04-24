import { registerUser } from "../services/auth.service.js";
export const register = async (req, res) => {
  try {
    const data = req.body;
    console.log("Request body:", data);

    const user = await registerUser(data);

    console.log("User registered successfully");
    res.status(200).json({
      statusCode: 201,
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({
      statusCode: 500,
      success: false,
      message: "Error occurred while registering user",
    });
  }
};
