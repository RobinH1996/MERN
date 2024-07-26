const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

var Schema = mongoose.Schema;
const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      index: { unique: true },
    },
    firstName: { type: String },
    lastName: { type: String },
    displayName: { type: String },
    password: { type: String, required: true },
    salt: { type: String, required: true },
    token: { type: String, select: false },
  },
  { timestamps: true }
);

UserSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    { email: user.email.toString() },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.COOKIE_EXPIRED_TIME,
    }
  );
  user.token = token;
  await user.save();
  return token;
};

module.exports = mongoose.model("Users", UserSchema);
