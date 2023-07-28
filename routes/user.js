const express = require("express");
const { RegisterUser, LoginUser, verifyUser } = require("../controller/user");
const router = express.Router();

router.post("/register", RegisterUser);
router.post("/login", LoginUser);
router.get("/verify/:user_id", verifyUser);

module.exports = router;
