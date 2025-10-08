const mongoose = require('mongoose');

const bannerSchema = mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  publicId: { type: String, required: true }, // Cloudinary public_id
  link: { type: String, required: true },
  bannerType:{type: String},
  status: { type: Number, default: 0 },
  startDate: { type: Date },
  endDate: { type: Date },
  priority: { type: Number, default: 0 },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
}, { timestamps: true });

module.exports = mongoose.model('Banner', bannerSchema);