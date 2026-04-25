import { registerUser, loginUser } from "../services/auth.service.js";
export const register = async (req, res) => {
  try {
    const data = req.body;

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

export const login = async (req, res) => {
  try {
    const data = req.body;
    const { token, user } = await loginUser(data);
    const { password, ...safeUser } = user.toJSON();

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        user: safeUser,
        token,
      },
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
