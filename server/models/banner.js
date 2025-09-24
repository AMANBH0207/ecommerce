const mongoose = require('mongoose');

const bannerSchema = mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true },
  status: { type: Number, default: 0 },
  startDate: { type: Date },
  endDate: { type: Date },
  priority: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Banner', bannerSchema);
