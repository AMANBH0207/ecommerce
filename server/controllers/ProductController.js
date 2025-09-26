const Product = require("../models/product");
const cloudinary = require("../config/cloudinary");
const streamifier = require("streamifier");
const Categories = require("../models/productcategories");

// Add Product
exports.addProduct = async (req, res) => {
  try {
    const { name, description, price, stock, category } = req.body;
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "At least one product image is required",
      });
    }
    const uploadPromises = req.files.map(
      (file) =>
        new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { folder: "products" },
            (error, result) => {
              if (error) reject(error);
              else
                resolve({
                  url: result.secure_url,
                  public_id: result.public_id,
                });
            }
          );
          streamifier.createReadStream(file.buffer).pipe(stream);
        })
    );

    const images = await Promise.all(uploadPromises);

    const newProduct = new Product({
      name,
      description,
      price,
      stock,
      images,
      category,
    });

    const savedProduct = await newProduct.save();

    res.status(201).json({
      success: true,
      message: "Product added successfully",
      data: savedProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// Get Products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("category", "name")
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, data: products });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Toggle stock status
exports.updateStock = async (req, res) => {
  try {
    const { id } = req.params;
    const { stock } = req.body;

    const product = await Product.findById(id);
    if (!product)
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });

    product.stock = stock;
    await product.save();

    res
      .status(200)
      .json({ success: true, message: "Stock updated", data: product });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Delete Product
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    if (product.images && product.images.length > 0) {
      for (const img of product.images) {
        await cloudinary.uploader.destroy(img.public_id);
      }
    }
    await Product.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Product and images deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};


exports.getCategories = async (req, res) => {
  try {
    const categories = await Categories.find();
    if (categories) {
      return res.status(200).json({
        success: true,
        message: "Categories fetched successfully",
        data: categories,
      });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
