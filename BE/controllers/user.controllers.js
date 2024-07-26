const UserModel = require("../models/User.models");
const argon2 = require("argon2");
const { cookieOption } = require("../middleware/auth");

const findUserByEmail = async (email) => {
  try {
    const user = await UserModel.findOne({ email: email.toLowerCase() });
    return user;
  } catch (error) {
    console.error("[findUserByEmail]", error.message);
    return false;
  }
};

const verifyPassword = async (user, password) => {
  try {
    return await argon2.verify(user.password, password + user.salt, {
      secret: Buffer.from(process.env.PASSWORD_PEPPER),
    });
  } catch (error) {
    console.error("[verifyPassword]", error.message);
    return false;
  }
};

const makeid = (length) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // Find user by email
    const user = await findUserByEmail(email);
    if (!user) {
      return res
        .status(400)
        .json({ message: "User with the provided email not found" });
    }

    // Verify password
    const isPasswordValid = await verifyPassword(user, password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Generate JWT token
    const token = await user.generateAuthToken();
    res.cookie("accessToken", token, cookieOption);

    return res.send({ user });
  } catch (error) {
    console.error("[login]", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.register = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  try {
    const user = await findUserByEmail(email);
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be at least 8 characters" });
    }

    // Encrypt password
    const salt = makeid(10);
    const hashedPassword = await argon2.hash(password + salt, {
      type: argon2.argon2id,
      secret: Buffer.from(process.env.PASSWORD_PEPPER),
    });

    const newUser = await UserModel.create({
      email,
      password: hashedPassword,
      salt,
      firstName,
      lastName,
      displayName: `${firstName} ${lastName}`,
    });
    const token = await newUser.generateAuthToken();
    res.cookie("accessToken", token, cookieOption);

    return res.send("SUCCESS");
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: err.message,
    });
  }
};

const ROLES = {
  user: 0,
  mapper: 1,
  admin: 2,
};

exports.getUserData = async (req, res) => {
  try {
    const role = req.query?.role || "user";
    const { user } = req;
    if (ROLES[role] > ROLES[user.role]) {
      await UserModel.findOneAndUpdate(
        { email: user.email },
        { token: null },
        { new: true }
      );
      return res.status(401).json({ message: `No permission` });
    }
    return res.json({ user });
  } catch (error) {
    console.error("[getUserData]", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getAllUsersData = async (req, res) => {
  try {
    const users = await UserModel.find({}, { password: 0, salt: 0, token: 0 });
    res.json(users);
  } catch (error) {
    console.error("[getAllUsersData]", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.logout = async (req, res, next) => {
  const { user } = req;
  try {
    await UserModel.findOneAndUpdate(
      { email: user.email },
      { token: null },
      { new: true }
    );
    return res.send("SUCCESS");
  } catch (error) {
    console.error("[logout]", error);
    res.status(500).json({ message: "Server error" });
  }
};
