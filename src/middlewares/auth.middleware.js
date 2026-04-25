import jwt from "jsonwebtoken";
export const authenticateMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token provided",
      });
    }
    // verify the token and extract user information
    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedToken; // Attach user info to the request object
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};
