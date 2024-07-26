const jwt = require("jsonwebtoken");
const UserModel = require("../models/User.models");

exports.adminAuth = async (req, res, next) => {
  try {
    if (req.headers.userid && process.env.MODE === "development") {
      console.log("[adminAuth] Postman request in evelopment mode");
      const user = await UserModel.findById(req.headers.userid);
      if (!user) throw new Error("Unregistered user");
      if (user.role !== "admin") throw new Error("Not an Admin");
      const userData = user._doc;
      delete userData.token;
      delete userData.password;
      delete userData.salt;

      req.user = {
        userId: user._id.toString(),
        ...userData,
      };
      return next();
    } else {
      const { accessToken } = req.cookies;
      if (!accessToken) {
        throw new Error("cookie not found");
      }
      const decodedAccessToken = jwt.verify(
        accessToken,
        process.env.JWT_SECRET
      );
      const now = Math.floor(new Date().getTime() / 1000);
      if (now >= decodedAccessToken.exp)
        throw new Error("Cookie has been expired");

      const user = await UserModel.findOne({
        email: decodedAccessToken.email,
      }).select("+token");
      if (!user) throw new Error("Unregistered user");
      if (user.role !== "admin") throw new Error("Not an Admin");

      if (!user.token) throw new Error("Invalid cookie");

      const decodedUserToken = jwt.verify(user.token, process.env.JWT_SECRET);

      if (decodedUserToken.email !== decodedAccessToken.email)
        throw new Error("Invalid cookie");

      if (now >= decodedUserToken.exp)
        throw new Error("server side cookie has been expired.");

      const newToken = await user.generateAuthToken();
      res.cookie("accessToken", newToken, this.cookieOption);
      const userData = user._doc;
      delete userData.token;
      delete userData.password;
      delete userData.salt;

      req.user = {
        userId: user._id.toString(),
        ...userData,
      };
      next();
    }
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: err.message });
  }
};

exports.userAuth = async (req, res, next) => {
  try {
    if (req.headers.userid && process.env.MODE === "development") {
      console.log("[userAuth] Postman request in evelopment mode");
      const user = await UserModel.findById(req.headers.userid);
      if (!user) throw new Error("Unregistered user");
      const userData = user._doc;
      delete userData.token;
      delete userData.password;
      delete userData.salt;

      req.user = {
        userId: user._id.toString(),
        ...userData,
      };
      return next();
    } else {
      const { accessToken } = req.cookies;
      if (!accessToken) {
        throw new Error("cookie not found");
      }
      const decodedAccessToken = jwt.verify(
        accessToken,
        process.env.JWT_SECRET
      );
      const now = Math.floor(new Date().getTime() / 1000);
      if (now >= decodedAccessToken.exp)
        throw new Error("Cookie has been expired");

      const user = await UserModel.findOne({
        email: decodedAccessToken.email,
      }).select("+token");
      if (!user) throw new Error("Unregistered user");

      if (!user.token) throw new Error("Invalid cookie");

      const decodedUserToken = jwt.verify(user.token, process.env.JWT_SECRET);

      if (decodedUserToken.email !== decodedAccessToken.email)
        throw new Error("Invalid cookie");

      if (now >= decodedUserToken.exp)
        throw new Error("server side cookie has been expired.");

      const newToken = await user.generateAuthToken();
      res.cookie("accessToken", newToken, this.cookieOption);
      const userData = user._doc;
      delete userData.token;
      delete userData.password;
      delete userData.salt;

      req.user = {
        userId: user._id.toString(),
        ...userData,
      };
      next();
    }
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: err.message });
  }
};

exports.cookieOption = {
  maxAge: process.env.COOKIE_EXPIRED_TIME,
  httpOnly: true,
};
