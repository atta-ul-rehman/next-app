import User from "../../../models/User";
import withProtect from "../../../middleware/protected";
import connectDb from "../../../middleware/connectDb";
const handler = async (req, res, next) => {
  if (req.method == "GET") {
    const user = await User.findById(req.user.id);
    res.status(200).json({
      success: true,
      data: user,
    });
  }
};

export default connectDb(withProtect(handler));
