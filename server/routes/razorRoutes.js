const express = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");

const router = express.Router();

// Create Razorpay Instance
const razorInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ----------------------------------
// 1️⃣ CREATE ORDER API
// ----------------------------------
router.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount) {
      return res.status(400).json({ msg: "Amount is required" });
    }

    const options = {
      amount: amount * 100, // amount in paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`
    };

    const order = await razorInstance.orders.create(options);

    res.json({ success: true, order });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Failed to create order", err });
  }
});

// ----------------------------------
// 2️⃣ VERIFY PAYMENT (Frontend Check)
// ----------------------------------
router.post("/verify-payment", async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const bodyData = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(bodyData)
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      return res.json({ success: true, msg: "Payment Verified" });
    }

    res.status(400).json({ success: false, msg: "Invalid Signature" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Payment Verification Failed", err });
  }
});


// ----------------------------------
// 3️⃣ WEBHOOK: Most Secure Final Verification
// ----------------------------------
router.post("/webhook", (req, res) => {
  try {
    const secret = process.env.WEBHOOK_SECRET;
    const signature = req.headers["x-razorpay-signature"];
    const body = req.body;

    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(body)
      .digest("hex");

    if (expectedSignature !== signature) {
      console.log("❌ Invalid Webhook Signature");
      return res.status(400).json({ success: false });
    }

    console.log("✔ Webhook Verified Successfully");

    const eventData = JSON.parse(body.toString());

    // Handle Events
    if (eventData.event === "order.paid") {
      console.log("Order Paid:", eventData.payload.payment.entity);

      // TODO: Update DB status
    }

    if (eventData.event === "payment.failed") {
      console.log("Payment Failed:", eventData.payload.payment.entity);
    }

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Webhook Error", error });
  }
});


module.exports = router;
