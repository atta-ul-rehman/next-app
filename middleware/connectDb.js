import mongoose from "mongoose";
import colors from "colors";
let url = process.env.MONGO_URI;
let url2 = process.env.BASE_URL;
const connectDb = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    console.log("Already Connected to Mongo Successfully".green.underline.bold);
    return handler(req, res);
  }
  mongoose.connect(url);
  console.log("Connected to Mongo Successfully".green.underline.bold);
  return handler(req, res);
};
export default connectDb;
