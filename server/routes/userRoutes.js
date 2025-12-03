const express = require("express");
const { registerUser, Login, AddAddress } = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", Login);
router.post("/add-address", AddAddress);

module.exports = router;