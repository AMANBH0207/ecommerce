const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.registerAdmin = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        message: `Email already registered as a ${userExists.role}. Please login or use a different email.`,
      });
    }
    const user = new User({
      name,
      email,
      passwordHash: password,
      phone,
      role: "admin",
    });

    await user.save();
    res.status(201).json({
      success: true,
      message: "admin registered successfully",
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (e) {
    res
      .status(500)
      .json({ message: "Error registering admin", error: err.message });
  }
};


exports.adminLogin = async (req, res) => {
  const { email, password } = req.body;

  const userExist = await User.findOne({ email }).select("+passwordHash");
  if (!userExist) {
    return res.status(401).json({ message: "Admin not exist", success: false });
  }

  // ✅ Ensure this account is actually an admin
  if (userExist.role !== "admin") {
    return res.status(403).json({ message: "Access denied. Not an admin", success: false });
  }

  const isMatch = await bcrypt.compare(password, userExist.passwordHash);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid password", success: false });
  }

  const token = jwt.sign(
    { id: userExist._id, email: userExist.email, role: userExist.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.status(200).json({
    message: "Admin Logged In Successfully",
    success: true,
    data: {
      addresses: userExist.addresses,
      createdAt: userExist.createdAt,
      email: userExist.email,
      name: userExist.name,
      role: userExist.role,
      updatedAt: userExist.updatedAt,
      token,
    },
  });
};
