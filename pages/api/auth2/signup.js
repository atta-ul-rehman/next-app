import User from "../../../models/User";
import connectDb from "../../../middleware/connectDb";
const asyncHandler = require("../../../middleware/async").default;
import { errorHandler } from "../../../middleware/error";
import { sendTokenResponse } from "./SendTokenRes";

const handler = asyncHandler(async (req, res, next) => {
  if (req.method == "POST") {
    try {
      let user = await User.create(req.body);
      sendTokenResponse(user, 200, res);
    } catch (er) {
      errorHandler(er, res);
    }
  }
});

export default connectDb(handler);
