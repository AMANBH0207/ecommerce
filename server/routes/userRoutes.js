const express = require("express");
const { registerUser, Login, AddAddress, RemoveAddress } = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", Login);
router.post("/add-address", AddAddress);
router.post("/remove-address", RemoveAddress);

module.exports = router;