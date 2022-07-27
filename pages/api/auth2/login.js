import User from "../../../models/User";
import connectDb from "../../../middleware/connectDb";
import { sendTokenResponse } from "./SendTokenRes";
import asyncHandler from "../../../middleware/async";
import { errorHandler } from "../../../middleware/error";
const handler = asyncHandler(async (req, res, next) => {
  if (req.method == "POST") {
    const { email, pass } = req.body;
    try {
      if (!email || !pass) {
        return res.status(404).send({
          success: false,
          msg: "Please provide an email and password",
        });
      }
      const user = await User.findOne({ email }).select("+pass");
      if (!user) {
        return res.status(404).send({ success: false, msg: "No user Found" });
      }
      const isMatch = await user.matchPassword(pass);
      if (!isMatch) {
        return res
          .status(401)
          .send({ success: false, msg: "Invalid credentials" });
      }
      sendTokenResponse(user, 200, res);
    } catch (err) {
      errorHandler(err, res);
    }
  } else {
    res.status(401).json({ success: false, msg: "route is not allowed" });
  }
});
export default connectDb(handler);
