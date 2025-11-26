import { useAppSelector } from "../store/hooks";

function TotalAmount() {
  const {totalAmount, discountedAmount, deliveryCharge} = useAppSelector((state) => state.cartReducer);

  console.log("total amount in total amount component:", totalAmount ,discountedAmount);


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
          <span className="font-bold text-green-500"> - ₹{totalAmount-discountedAmount}</span>
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
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 cursor-pointer rounded-lg text-xs">CHECKOUT</button>
      </div>
    </div>
  );
}

export default TotalAmount;
