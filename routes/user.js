const express = require("express");
const { RegisterUser, LoginUser, VerifyUser } = require("../controller/user");
const router = express.Router();

router.post("/register", RegisterUser);
router.post("/login", LoginUser);
router.post("/verify-otp", VerifyUser);
