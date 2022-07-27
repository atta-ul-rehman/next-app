var cookie = require("cookie");
import connectDb from "../../../middleware/connectDb";
import { errorHandler } from "../../../middleware/error";
import withProtect from "../../../middleware/protected";

const handler = async (req, res) => {
  if (req.method == "GET") {
    try {
      await res.setHeader("Set-Cookie", [
        cookie.serialize("authToken2", "", {
          expires: new Date(0),
          path: "/",
        }),
        cookie.serialize("authToken", "", {
          expires: new Date(0),
          path: "/",
        }),
        cookie.serialize("auth", "", {
          expires: new Date(0),
          path: "/",
        }),
      ]);
      res.status(200).json({
        success: true,
        data: {},
      });
    } catch (er) {
      errorHandler(er, res);
    }
  }
};

export default connectDb(withProtect(handler));
