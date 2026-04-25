export const authorizeRolesMiddleware = (allowedRoles) => {
  return (req, res, next) => {
    try {
      const user = req.user; // Assuming user information is attached to the request object by the authentication middleware
      if (!user) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized: No user information found",
        });
      }
      if (!allowedRoles.includes(user.role)) {
        return res.status(403).json({
          success: false,
          message:
            "Forbidden: You do not have permission to access this resource",
        });
      }
      next();
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Authorization error",
      });
    }
  };
};
