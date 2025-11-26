import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import Modal from "../component/Modal"; // ✅ Import reusable modal
import prod26 from "../assets/images/prod26.png.png";
import { useAppSelector } from "../store/hooks";

function CartCard() {
  // Example product list
  const cart = useAppSelector((state) => state.cartReducer.items);
  console.log("cart items:", cart);

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Honor 9x 128GB, 6GB",
      price: 25999,
      oldPrice: 28999,
      img: prod26,
    },
    {
      id: 2,
      name: "Honor 9x 128GB, 6GB",
      price: 25999,
      oldPrice: 28999,
      img: prod26,
    },
    {
      id: 3,
      name: "Honor 9x 128GB, 6GB",
      price: 25999,
      oldPrice: 28999,
      img: prod26,
    },
  ]);
  const [savedAddresses, setSavedAddresses] = useState([
    {
      id: 1,
      label: "Home",
      name: "Aman",
      pincode: "249202",
      details: "109a, Meeranagar gali no7 near reliance, Rishikesh",
    },
    {
      id: 2,
      label: "Office",
      name: "Aman",
      pincode: "110001",
      details: "4th Floor, Tower B, Cyber City, Gurugram",
    },
  ]);

  const [selectedAddress, setSelectedAddress] = useState(1);

  // Quantity state for each product
  const [quantities, setQuantities] = useState(products.map(() => 1));

  // Modal states
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [productToRemove, setProductToRemove] = useState<number | null>(null);

  const increase = (index: number) => {
    setQuantities((prev) => prev.map((q, i) => (i === index ? q + 1 : q)));
  };

  const decrease = (index: number) => {
    setQuantities((prev) =>
      prev.map((q, i) => (i === index && q > 1 ? q - 1 : q))
    );
  };

  const handleRemoveClick = (id: number) => {
    setProductToRemove(id);
    setIsRemoveModalOpen(true);
  };

  const confirmRemove = () => {
    if (productToRemove !== null) {
      setProducts((prev) => prev.filter((p) => p.id !== productToRemove));
      setQuantities(
        (prev, i = products.findIndex((p) => p.id === productToRemove)) =>
          prev.filter((_, idx) => idx !== i)
      );
    }
    setIsRemoveModalOpen(false);
    setProductToRemove(null);
  };

  const address = (
    <div className="p-3 flex flex-col sm:flex-row sm:items-start gap-3 bg-gray-100 rounded-lg shadow mb-4">
      {/* Address */}
      <div className="flex-1">
        Deliver to: <span className="font-bold">AMAN, 249202</span>{" "}
        <span className="w-max bg-white px-2 py-1 text-xs text-gray-500 font-bold rounded">
          Home
        </span>
        <div>
          <span className="text-xs text-gray-500">
            109a, Meeranagar gali no7 near reliance, Rishikesh
          </span>
        </div>
      </div>

      {/* Change button */}
      <div className="flex justify-end w-full sm:w-auto">
        <div
          className="bg-white rounded-lg text-xs py-1 px-2 cursor-pointer text-green-500"
          onClick={() => setIsAddressModalOpen(true)}
        >
          Change
        </div>
      </div>
    </div>
  );

  return (
    <>
      {address}

      {cart.map((product, index) => (
        <div
          key={product._id}
          className="p-3 flex flex-col sm:flex-row gap-3 items-center sm:items-start bg-gray-100 rounded-lg shadow mb-4"
        >
          {/* Product Image */}
          <img
            src={product?.images[0]?.url}
            alt={product?.name}
            className="w-24 h-24 object-contain"
          />

          {/* Product Details */}
          <div className="flex flex-col justify-between flex-1 text-center sm:text-left">
            {/* Title + Price */}
            <div>
              <p className="font-medium text-sm sm:text-base">{product.name}</p>
              <div className="flex justify-center sm:justify-start items-center gap-2 mt-1">
                <span className="text-red-500 font-bold text-sm sm:text-base">
                  ₹ {product.discountedPrice.toLocaleString()}
                </span>
                <span className="text-gray-500 line-through text-xs sm:text-sm">
                  ₹ {product.price.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center justify-center sm:justify-start gap-2 mt-2">
              <button
                onClick={() => decrease(index)}
                disabled={quantities[index] === 1}
                className={`px-2 py-1 border rounded text-sm ${"opacity-50 cursor-not-allowed"}`}
              >
                -
              </button>
              <span className="px-3">0</span>
              <button
                // onClick={() => increase(index)}
                className="px-2 py-1 border rounded text-sm cursor-pointer"
              >
                +
              </button>
            </div>

            {/* Stock Info */}
            {product?.stock > 0 ? (
              <div className="flex items-center justify-center sm:justify-start gap-1 mt-2 text-green-600 text-sm">
                <span>✔</span>
                <span>In stock</span>
              </div>
            ) : (
              <div className="flex items-center justify-center sm:justify-start gap-1 mt-2 text-red-600 text-sm">
                <span>✖</span>
                <span>Out of stock</span>
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-center sm:justify-start gap-3 mt-3">
              {/* <button className="flex cursor-pointer items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 font-medium text-xs sm:text-sm border border-blue-200 hover:bg-blue-100 hover:shadow">
                <FontAwesomeIcon icon={faHeart} />
                Move to Wishlist
              </button> */}
              <button
                onClick={() => handleRemoveClick(product.id)}
                className="flex cursor-pointer items-center gap-2 px-3 py-1.5 rounded-lg bg-red-50 text-red-600 font-medium text-xs sm:text-sm border border-red-200 hover:bg-red-100 hover:shadow"
              >
                <FontAwesomeIcon icon={faTrash} />
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* ✅ Remove Confirmation Modal */}
      <Modal
        isOpen={isRemoveModalOpen}
        onClose={() => setIsRemoveModalOpen(false)}
        onConfirm={confirmRemove}
        title="Remove Item"
        confirmText="Yes, Remove"
        cancelText="Cancel"
      >
        <p className="text-sm text-gray-600">
          Are you sure you want to remove this item from your cart?
        </p>
      </Modal>

      {/* ✅ Address Change Modal */}
      <Modal
        isOpen={isAddressModalOpen}
        onClose={() => setIsAddressModalOpen(false)}
        title="Change Delivery Address"
        confirmText="Confirm"
        cancelText={undefined}
        onConfirm={() => {
          console.log("Selected Address:", selectedAddress);
          setIsAddressModalOpen(false);
        }}
      >
        <div className="space-y-3">
          {savedAddresses.map((addr) => (
            <label
              key={addr.id}
              className="flex items-start gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
            >
              <input
                type="radio"
                name="address"
                value={addr.id}
                checked={selectedAddress === addr.id}
                onChange={() => setSelectedAddress(addr.id)}
                className="mt-1"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold">{addr.name}</span>
                  <span className="bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded">
                    {addr.label}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  {addr.details}, {addr.pincode}
                </p>
              </div>
            </label>
          ))}
        </div>
      </Modal>
    </>
  );
}

export default CartCard;
