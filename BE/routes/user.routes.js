const express = require("express");
const router = express.Router();
const {
  login,
  register,
  getUserData,
  getAllUsersData,
  logout,
} = require("../controllers/user.controllers");
const { userAuth } = require("../middleware/auth");

router.post("/login", login);
router.post("/register", register);
router.get("/getUserData", userAuth, getUserData);
router.get("/getAllUsersData", userAuth, getAllUsersData);
router.get("/logout", userAuth, logout);

module.exports = router;
