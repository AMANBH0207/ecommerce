const express = require('express');
const router = express.Router();
const bannerController = require('../controllers/BannerController');
const upload = require('../middleware/upload');

router.post('/add', upload.single('image'), bannerController.addBanner);
router.get('/', bannerController.getBanners);
module.exports = router;