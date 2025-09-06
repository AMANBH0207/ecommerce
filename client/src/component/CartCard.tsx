import { useState } from "react";
import prod26 from "../assets/images/prod26.png.png";

function CartCard() {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const productCard = (
    <div className="p-3 flex flex-col sm:flex-row gap-3 items-center sm:items-start bg-gray-100 rounded-lg shadow mb-4">
      {/* Product Image */}
      <img src={prod26} alt="product" className="w-24 h-24 object-contain" />

      {/* Product Details */}
      <div className="flex flex-col justify-between flex-1 text-center sm:text-left">
        {/* Title + Price */}
        <div>
          <p className="font-medium text-sm sm:text-base">
            Honor 9x 128GB, 6GB
          </p>
          <div className="flex justify-center sm:justify-start items-center gap-2 mt-1">
            <span className="text-red-500 font-bold text-sm sm:text-base">
              ₹ 25,999
            </span>
            <span className="text-gray-500 line-through text-xs sm:text-sm">
              ₹ 28,999
            </span>
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center justify-center sm:justify-start gap-2 mt-2">
          <button
            onClick={decrease}
            className="px-2 py-1 border rounded text-sm cursor-pointer"
          >
            -
          </button>
          <span className="px-3">{quantity}</span>
          <button
            onClick={increase}
            className="px-2 py-1 border rounded text-sm cursor-pointer"
          >
            +
          </button>
        </div>

        {/* Stock Info */}
        <div className="flex items-center justify-center sm:justify-start gap-1 mt-2 text-green-600 text-sm">
          <span>✔</span>
          <span>In stock</span>
        </div>
      </div>
    </div>
  );

  // Render multiple items
  return (
    <>
      {productCard}
      {productCard}
      {productCard}
    </>
  );
}

export default CartCard;
