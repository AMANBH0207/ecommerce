const Banner = require("../models/banner");
const cloudinary = require("../config/cloudinary");
const streamifier = require("streamifier");

exports.addBanner = async (req, res) => {
  try {
    const { title, link, bannerType, status, startDate, endDate } = req.body;
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "Banner image required" });
    }

    if (req.user.role !== "admin") {
      return res.status(403).json({ success: false, message: "Access denied" });
    }

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

    const lastBanner = await Banner.findOne().sort({ priority: -1 });
    const priority = lastBanner ? lastBanner.priority + 1 : 1;

    const banner = new Banner({
      title,
      image: uploadResult.secure_url,
      publicId: uploadResult.public_id,
      link,
      bannerType,
      status,
      startDate,
      endDate,
      priority,
      createdBy: req.user.id,
    });

    await banner.save();

    res
      .status(201)
      .json({ success: true, message: "Banner added", data: banner });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getHomepageBanners = async (req, res) => {
  try {
    // Fetch only active banners and select specific fields
    const banners = await Banner.find({status:1})
      .select("title image link bannerType priority startDate endDate"); 

        console.log("herer is the banners",banners)
    // Group by type
    const grouped = {
      slider: banners.filter(b => b.bannerType === "slider"),
      static: banners.filter(b => b.bannerType === "static"),
      showcase: banners.filter(b => b.bannerType === "showcase"),
      mobiles: banners.filter(b => b.bannerType === "mobiles"),
    };

    res.status(200).json({ success: true, data: grouped });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};




exports.getBanners = async (req, res) => {
  try {
    const banners = await Banner.find()
      .populate("createdBy", "name email role")
      .sort({ priority: 1 });

    res.status(200).json({ success: true, data: banners });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.deleteBanner = async (req, res) => {
  try {
    const { id } = req.params;

    if (req.user.role !== "admin") {
      return res.status(403).json({ success: false, message: "Access denied" });
    }

    const banner = await Banner.findById(id);
    if (!banner)
      return res.status(404).json({ success: false, message: "Banner not found" });

    // Remove image from Cloudinary
    if (banner.publicId) {
      await cloudinary.uploader.destroy(banner.publicId);
    }

    // Remove document from MongoDB
    await Banner.deleteOne({ _id: id });  // ✅ Mongoose 6+ compatible

    res.status(200).json({ success: true, message: "Banner deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Update banner
exports.updateBanner = async (req, res) => {
  try {
    const { id } = req.params;

    if (req.user.role !== "admin") {
      return res.status(403).json({ success: false, message: "Access denied" });
    }

    const banner = await Banner.findById(id);
    if (!banner)
      return res.status(404).json({ success: false, message: "Banner not found" });

    const updateData = { ...req.body };

    // If new image is uploaded, remove old image first
    if (req.file) {
      if (banner.publicId) {
        await cloudinary.uploader.destroy(banner.publicId);
      }

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

      updateData.image = uploadResult.secure_url;
      updateData.publicId = uploadResult.public_id;
    }

    const updatedBanner = await Banner.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    res
      .status(200)
      .json({ success: true, message: "Banner updated successfully", data: updatedBanner });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Toggle status (active/inactive)
exports.toggleStatus = async (req, res) => {
  try {
    const { id } = req.params;
    if (req.user.role !== "admin") {
      return res.status(403).json({ success: false, message: "Access denied" });
    }

    const banner = await Banner.findById(id);
    if (!banner)
      return res
        .status(404)
        .json({ success: false, message: "Banner not found" });

    banner.status = banner.status === 1 ? 0 : 1;
    await banner.save();

    res
      .status(200)
      .json({ success: true, message: "Banner status updated", data: banner });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
