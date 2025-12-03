import { useNavigate } from "react-router-dom";
import { removeAll } from "../features/cart/cartSlice";
import { submitCartOrder } from "../features/cart/cartThunks";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import axios from "axios";

function TotalAmount() {
  const { totalAmount, discountedAmount, deliveryCharge } = useAppSelector(
    (state) => state.cartReducer
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleCheckout = async () => {
    try {
      // 1️⃣ Create Order
      const result = await dispatch(
        submitCartOrder({ amount: discountedAmount })
      ).unwrap(); // <-- gives you real response

      const { order } = result;
      const BaseUrl = import.meta.env.VITE_BASE_API_URL
      // 2️⃣ Razorpay Options
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        order_id: order.id,
        amount: order.amount,
        currency: order.currency,

        name: "Your Store",
        description: "Order Payment",

        handler: async function (response: any) {
          try {
            // 3️⃣ Verify Payment Signature
            const verify = await axios.post(
              BaseUrl+"/razorpay/verify-payment",
              response
            );

            if (verify.data.success) {
              alert("Payment Successful 🎉");
              dispatch(removeAll());
              navigate("/home")
            } else {
              alert("Payment Verification Failed ❌");
            }
          } catch (err) {
            console.log(err);
          }
        },

        theme: { color: "#3399cc" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err: any) {
      alert(err || "Payment Failed");
    }
  };

  return (
    <div className="border-2 border-green-500 p-4 rounded-lg">
      <h6 className="font-bold mb-3">Order Summary</h6>

      <div className="py-4">
        <div className="p-2 border-b border-gray-300 flex justify-between">
          <span className="text-gray-500">Sub Total:</span>
          <span className="font-bold">₹{totalAmount}</span>
        </div>
        <div className="p-2 border-b border-gray-300 flex justify-between">
          <span className="text-gray-500">Discount:</span>
          <span className="font-bold text-green-500">
            {" "}
            - ₹{totalAmount - discountedAmount}
          </span>
        </div>
        <div className="p-2 border-b border-gray-300 flex justify-between">
          <span className="text-gray-500">Delivery Charges</span>
          <span className="font-bold">₹{deliveryCharge}</span>
        </div>
        <div className="p-2 flex justify-between">
          <span className="font-bold">ORDER TOTAL:</span>
          <span className="font-bold">₹{discountedAmount}</span>
        </div>
      </div>

      <div className="text-center p-6">
        <button
          onClick={handleCheckout}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 cursor-pointer rounded-lg text-xs"
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
}

export default TotalAmount;
