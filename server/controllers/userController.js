const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res
        .status(400)
        .json({ message: "Email Already Exist! Please Login." });
    }

    const user = new User({
      name,
      email,
      passwordHash: password,
      phone,
    });

    await user.save();

    res.status(201).json({
      success: true,
      message: "user registered successfully",
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
      .json({ message: "Error registering user", error: err.message });
  }
};

exports.Login = async (req, res) => {
  const { email, password } = req.body;
  const userExist = await User.findOne({ email }).select("+passwordHash");
  if (!userExist) {
    return res.status(401).json({ message: "user not exist", success: false });
  }
  const isMatch = await bcrypt.compare(password, userExist.passwordHash);
  if (!isMatch) {
    return res
      .status(401)
      .json({ message: "invalid password", success: false });
  }

  const token = jwt.sign(
    { id: userExist._id, email: userExist.email, role: userExist.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.status(200).json({
    message: "Logged In Successfully",
    success: true,
    data: {
      addresses: userExist.addresses,
      createdAt: userExist.createdAt,
      email: userExist.email,
      name: userExist.name,
      role: userExist.role,
      updatedAt: userExist.updatedAt,
      token: token,
    },
  });
};

exports.AddAddress = async (req, res) => {
  try {
    const userEmail = req.body?.email;

    if (!userEmail) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized — user ID missing",
      });
    }

    const { name, line1, city, state, pincode, phone } = req.body;

    // Basic field validation
    if (!name || !line1 || !city || !state || !pincode || !phone) {
      return res.status(400).json({
        success: false,
        message: "All address fields are required",
      });
    }

    const user = await User.findOne({ email: userEmail });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Add new address
    user.addresses.push({ name, line1, city, state, pincode, phone });

    await user.save();

    res.status(200).json({
      success: true,
      message: "Address added successfully",
      data: user.addresses,
    });
  } catch (error) {
    console.log("AddAddress Error:", error);
    res.status(500).json({
      success: false,
      message: "Error adding address",
      error: error.message,
    });
  }
};

exports.RemoveAddress = async (req, res) => {
  try {
    const { email, addressId } = req.body;

    if (!email || !addressId) {
      return res.status(400).json({
        success: false,
        message: "Email and addressId are required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Check if address exists
    const addressExists = user.addresses.id(addressId);
    if (!addressExists) {
      return res.status(404).json({
        success: false,
        message: "Address not found",
      });
    }

    // Remove address by _id
    await User.updateOne(
      { email },
      { $pull: { addresses: { _id: addressId } } }
    );

    const updatedUser = await User.findOne({ email });

    return res.status(200).json({
      success: true,
      message: "Address removed successfully",
      data: updatedUser.addresses,
    });
  } catch (error) {
    console.log("RemoveAddress Error:", error);
    return res.status(500).json({
      success: false,
      message: "Error removing address",
      error: error.message,
    });
  }
};
