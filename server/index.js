const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const connectDb = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const adminRoutes = require("./routes/adminRoutes");
const bannerRoutes = require("./routes/bannerRoutes");
const productRoutes = require("./routes/productRoutes");
const bodyParser = require("body-parser");
const razorRoutes = require('./routes/razorRoutes');
app.use(express.json());
connectDb();
app.use(cors());
app.use("/api/users/razorpay/webhook", bodyParser.raw({ type: "application/json" }));
app.use("/api/users/razorpay", razorRoutes);
//user Routes
app.use("/api/users", userRoutes);
app.use("/api/users/banner", bannerRoutes);
app.use("/api/users/products", productRoutes);
//admin Routes
app.use("/api/admin", adminRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/api/admin/banner", bannerRoutes);
app.use("/api/admin/products", productRoutes);

app.listen(process.env.PORT, () => {
  console.log("server created");
});
