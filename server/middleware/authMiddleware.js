const jwt = require("jsonwebtoken");

// ✅ Base JWT verification middleware
exports.protectRoute = (req, res, next) => {
  let token;

    console.log("Headers:", req.headers.authorization); // Debugging line to check headers
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({ message: "Not Authorized", success: false });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id, email, role }
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token", success: false });
  }
};

// ✅ Admin-only access
exports.isAdmin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ success: false, message: "Not authorized" });
  }

  if (req.user.role !== "admin") {
    return res.status(403).json({ success: false, message: "Admin access only" });
  }
  next();
};

// ✅ Seller-only access
exports.isSeller = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ success: false, message: "Not authorized" });
  }

  if (req.user.role !== "seller") {
    return res.status(403).json({ success: false, message: "Seller access only" });
  }
  next();
};

// ✅ Admin or Seller access (optional)
exports.isAdminOrSeller = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ success: false, message: "Not authorized" });
  }

  if (req.user.role !== "admin" && req.user.role !== "seller") {
    return res.status(403).json({ success: false, message: "Access denied" });
  }
  next();
};