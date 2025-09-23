const express = require('express')
const router = express.Router();
const {registerAdmin, adminLogin} = require('../controllers/adminController')

router.post("/register-admin",registerAdmin)
router.post("/login-admin",adminLogin)

module.exports = router;