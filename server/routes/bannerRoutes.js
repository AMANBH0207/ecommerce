const express = require('express');
const router = express.Router();
const bannerController = require('../controllers/BannerController');
const upload = require('../middleware/upload');
const { protectRoute, isAdmin } = require('../middleware/authMiddleware');

router.post('/add', protectRoute, isAdmin, upload.single('image'), bannerController.addBanner);
router.get('/', protectRoute, bannerController.getBanners);
router.delete("/:id", protectRoute, isAdmin, bannerController.deleteBanner);
router.put("/:id", protectRoute, isAdmin, upload.single("image"), bannerController.updateBanner);
router.patch("/toggle-status/:id", protectRoute, isAdmin, bannerController.toggleStatus);

module.exports = router;