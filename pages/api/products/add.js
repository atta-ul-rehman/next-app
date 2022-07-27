import Product from "../../../models/Product";
import connectDb from "../../../middleware/connectDb";
const asyncHandler = require("../../../middleware/async");
const handler = asyncHandler(async (req, res, next) => {
  if (req.method == "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let p = new Product({
        title: req.body[i].title,
        slug: req.body[i].slug,
        desc: req.body[i].desc,
        img: req.body[i].img,
        category: req.body[i].category,
        size: req.body[i].size,
        color: req.body[i].color,
        price: req.body[i].price,
        availableQty: req.body[i].availableQty,
      });

      await p.save();
    }
    res.status(200).json({ succes: true });
  }
});
export default connectDb(handler);
