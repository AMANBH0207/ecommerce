import CartCard from "../component/CartCard";
import TotalAmount from "../component/TotalAmount";

function Cart() {
  return (
    <div className="p-2 bg-gray-100">
      <div className="p-4 sm:p-8 rounded-lg bg-white shadow-lg grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Cart Items */}
        <div className="md:col-span-2">
          <CartCard />
        </div>

        {/* Order Summary */}
        <div>
          <TotalAmount />
        </div>
      </div>
    </div>
  );
}

export default Cart;
