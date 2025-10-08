const Product = require("../models/product");
const cloudinary = require("../config/cloudinary");
const streamifier = require("streamifier");
const Categories = require("../models/productcategories");

// Add Product
exports.addProduct = async (req, res) => {
  try {
    const { name, description, price, stock, category, discountedPrice } =
      req.body;
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
      discountedPrice,
    });

    const savedProduct = await newProduct.save();

    // populate category (only name or full object as per your need)
    const populatedProduct = await savedProduct.populate("category", "name");

    res.status(201).json({
      success: true,
      message: "Product added successfully",
      data: populatedProduct,
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
      .populate("category", "name slug")
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, data: products });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    let product = await Product.findById(id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    // If new images are uploaded
    let images = product.images;
    if (req.files && req.files.length > 0) {
      if (images && images.length > 0) {
        for (const img of images) {
          await cloudinary.uploader.destroy(img.public_id);
        }
      }

      // Upload new images
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
      images = await Promise.all(uploadPromises);
    }

    // Update only the fields sent in req.body
    const updatedData = {
      ...req.body,
      ...(req.files && req.files.length > 0 ? { images } : {}), // update images only if new ones uploaded
    };

    product = await Product.findByIdAndUpdate(id, updatedData, {
      new: true, // return updated product
      runValidators: true, // validate against schema
    }).populate("category", "name");

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: product,
    });
  } catch (err) {
    console.error(err);
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

// Get Products
exports.getTopProducts = async (req, res) => {
  try {
    const products = await Product.aggregate([
  {
    $lookup: {
      from: "categories",
      localField: "category",
      foreignField: "_id",
      as: "category",
    },
  },
  { $unwind: "$category" },
  {
    $project: {
      name: 1,
      image: { $arrayElemAt: ["$images", 0] },
      "category.name": 1,
      "category.slug": 1,
      createdAt: 1,
    },
  },
  { $sort: { createdAt: -1 } },
  { $limit: 6 },
]);


    const topGrouped = {
      mobiles: products.filter(p => p.category.slug === "mobiles"),

    };


    res.status(200).json({ success: true, data: topGrouped });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
