import Product from "../../../models/Product";
import connectDb from "../../../middleware/connectDb";
const asyncHandler = require("../../../middleware/async");
const handler = asyncHandler(async (req, res, next) => {
  if (req.method == "PUT") {
    for (let i = 0; i < req.body.length; i++) {
      await Product.findByIdAndUpdate(req.body[i]._id, req.body[i]);
    }
    res.status(200).json({ succes: true });
  }
});
export default connectDb(handler);
