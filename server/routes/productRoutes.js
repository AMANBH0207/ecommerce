const express = require("express");
const router = express.Router();
const productController = require("../controllers/ProductController");
const { protectRoute, isAdmin } = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");

router.post("/add", protectRoute, isAdmin, upload.array("images", 5), productController.addProduct);
router.get("/", productController.getProducts);
router.delete("/:id",protectRoute, isAdmin, productController.deleteProduct);
router.patch("/update-product/:id", protectRoute, isAdmin, productController.updateProduct);
router.get("/categories",  productController.getCategories)
router.get("/gettopproducts", productController.getTopProducts)
router.get("/getsingleproduct/:id", productController.getSingleProduct);

module.exports = router;