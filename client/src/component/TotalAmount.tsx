function TotalAmount() {
  return (
    <div className="border-2 border-green-500 p-4 rounded-lg">
      <h6 className="font-bold mb-3">Order Summary</h6>
      <div className="py-4">
        <div className="p-2 border-b border-gray-300 flex justify-between">
          <span className="text-gray-500">Sub Total:</span>
          <span className="font-bold">₹10000</span>
        </div>
        <div className="p-2 border-b border-gray-300 flex justify-between">
          <span className="text-gray-500">Shipping estimate:</span>
          <span className="font-bold">₹6000</span>
        </div>
        <div className="p-2 border-b border-gray-300 flex justify-between">
          <span className="text-gray-500">GST:</span>
          <span className="font-bold">₹200</span>
        </div>
        <div className="p-2 flex justify-between">
          <span className="font-bold">ORDER TOTAL:</span>
          <span className="font-bold">₹16200</span>
        </div>
      </div>
      <div className="text-center p-6">
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 cursor-pointer rounded-lg text-xs">CHECKOUT</button>
      </div>
    </div>
  );
}

export default TotalAmount;
