import jwt from "jsonwebtoken";
import User from "../models/User";

const withProtect = (handler) => {
  return async (req, res) => {
    // Get token and check if it exists
    let token;

    if (req.headers.cookies) {
      token = req.headers.cookies;
      console.log("token", token);
    }
    if (Object.keys(req.cookies).length > 0) {
      token = req.cookies.authToken2;
      console.log("token is", req.cookies);
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Please log in to get access.",
      });
    }

    try {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Check if user exists with refresh token
      const currentUser = await User.findById(decoded.id);
      if (!currentUser) {
        return res.status(401).json({
          success: false,
          message: "The user belonging to this token no longer exist.",
        });
      }

      // Grant access to protected route
      req.user = currentUser;

      return handler(req, res);
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "Please make sure to be loged in for access.",
      });
    }
  };
};

export default withProtect;
