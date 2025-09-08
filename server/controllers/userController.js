const User = require("../models/User");

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
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (e) {
    res
      .status(500)
      .json({ message: "Error registering user", error: err.message });
  }
};
