const express = require("express");
const { registerUser, Login } = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", Login);

module.exports = router;