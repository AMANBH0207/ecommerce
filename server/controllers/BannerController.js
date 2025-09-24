const Banner = require('../models/banner');
const cloudinary = require('../config/cloudinary');
const streamifier = require('streamifier');

exports.addBanner = async (req, res) => {
  try {
    const { title, link, status, startDate, endDate } = req.body;

    if (!req.file) {
      return res.status(400).json({ success: false, message: 'Banner image required' });
    }

    // Upload to Cloudinary using buffer
    const uploadResult = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "banners" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      streamifier.createReadStream(req.file.buffer).pipe(stream);
    });

    // Automatically set priority
    const lastBanner = await Banner.findOne().sort({ priority: -1 });
    const priority = lastBanner ? lastBanner.priority + 1 : 1;

    const banner = new Banner({
      title,
      image: uploadResult.secure_url, // Cloudinary URL
      link,
      status,
      startDate,
      endDate,
      priority,
    });

    await banner.save();

    res.status(201).json({ success: true, message: 'Banner added', data: banner });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getBanners = async (req, res) => {
  try {
    const banners = await Banner.find().sort({ priority: 1 });
    res.status(200).json({ success: true, data: banners });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};