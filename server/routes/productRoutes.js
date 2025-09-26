const express = require("express");
const router = express.Router();
const productController = require("../controllers/ProductController");
const { protectRoute, isAdmin } = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");

router.post("/add", protectRoute, isAdmin, upload.array("images", 5), productController.addProduct);
router.get("/", productController.getProducts);
router.delete("/:id", productController.deleteProduct);
router.patch("/update-stock/:id", protectRoute, isAdmin, productController.updateStock);
router.get("/categories",  productController.getCategories)

module.exports = router;