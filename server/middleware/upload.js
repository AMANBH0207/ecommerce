const multer = require("multer");

// Use memory storage (no local files)
const storage = multer.memoryStorage();

const upload = multer({ storage });

module.exports = upload;