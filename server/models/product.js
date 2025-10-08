const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: Number,
  discountedPrice:Number,
  stock: { type: Number, required: true, default: 0 }, // track stock
  images: [
  {
    url: { type: String, required: true },
    public_id: { type: String, required: true }
  }
],
  category: { type: mongoose.Schema.Types.ObjectId, ref: "categories" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", ProductSchema);