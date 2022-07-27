const crypto = require("crypto");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Please add an email"],
      unique: true,
      validate: [validateEmail, "Please fill a valid email address"],
    },
    pass: {
      type: String,
      minlength: 6,
      trim: true,
      select: false,
    },
    image: {
      type: String,
      default:
        "https://res.cloudinary.com/dugdmyq5b/image/upload/v1653088410/Person-Icon_ozdaxq.png",
    },
    // address: {
    //   type: String,
    // },
    // verified: {
    //   type: Boolean,
    //   default: false,
    // },
    verificationToken: String,
    verificationTokenExpires: Date,
    resetpasswordToken: String,
    resetpasswordExpire: Date,
    createdAt: {
      type: Date,
      default: Date.now,
    },
    // DeliveryAddress: {
    //   type: String,
    // },
  },
  {
    timestamps: true,
  }
);
mongoose.models = {};
// Encrypt pass using bcrypt
UserSchema.pre("save", async function (next) {
  if (!this.isModified("pass") && !this.pass) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.pass = await bcrypt.hash(this.pass, salt);
});

// Sign JWT and return
UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// Match user entered pass to hashed pass in database
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.pass);
};

// Generate and hash password token
UserSchema.methods.getResetPasswordToken = function () {
  // Generate token
  const resetToken = crypto.randomBytes(20).toString("hex");
  // Hash token and set to resetPasswordToken field
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  // Set expire
  let date2 = new Date();
  date2 = new Date(date2.getTime() + 10 * 60000);
  this.resetPasswordExpire = date2;
  return resetToken;
};
module.exports = mongoose.model("User", UserSchema);
