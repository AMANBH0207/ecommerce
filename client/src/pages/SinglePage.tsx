import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBolt } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getSingleProduct } from "../features/products/productThunks";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../features/cart/cartSlice";

function SinglePage() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { singleProduct } = useAppSelector((state) => state.product);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, []);

  useEffect(() => {
    console.log(singleProduct);
  }, [singleProduct]);

  useEffect(() => {
    if (singleProduct?.images?.length) {
      setSelectedImage(singleProduct.images[0].url);
    }
  }, [singleProduct]);

  const gotoCart = () => {
    navigate("/cart");
  }

  return (
    <div className="bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md p-4">
        {/* Product Top Section */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Thumbnails */}
          <div className="flex flex-row lg:flex-col gap-2 justify-center lg:justify-start">
            {singleProduct?.images?.map((item) => (
              <div
                key={item._id}
                className={`border rounded cursor-pointer p-1 transition-all duration-200 ${
                  selectedImage === item.url
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
                onClick={() => setSelectedImage(item.url)}
              >
                <img
                  className="w-20 h-20 object-contain"
                  src={item.url}
                  alt="thumbnail"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 flex flex-col items-center">
            <div className="w-full max-w-[400px] h-[280px] sm:h-[320px] md:h-[380px] lg:h-[400px] flex items-center justify-center bg-white">
              <img
                src={selectedImage || singleProduct?.images?.[0]?.url}
                alt="main"
                className="max-h-full max-w-full object-contain transition-all duration-300"
              />
            </div>

            {/* Product Actions below the image */}
            <div className="flex flex-row gap-2 mt-4 w-full max-w-lg">
              <button onClick={()=>{dispatch(addToCart(singleProduct));gotoCart()}} className="flex items-center cursor-pointer justify-center gap-2 w-full py-3 rounded bg-orange-500 text-white font-semibold hover:bg-orange-600">
                <FontAwesomeIcon icon={faShoppingCart} /> ADD TO CART
              </button>
              <button className="flex items-center cursor-pointer justify-center gap-2 w-full py-3 rounded bg-green-600 text-white font-semibold hover:bg-green-700">
                <FontAwesomeIcon icon={faBolt} /> BUY NOW
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex-1 space-y-4">
            <h5 className="font-bold text-lg md:text-xl lg:text-2xl">
              {singleProduct?.name}
            </h5>
            <div className="flex items-center gap-2">
              <span className="text-red-500 font-bold text-lg md:text-xl lg:text-2xl">
                ₹ {singleProduct?.discountedPrice}
              </span>
              <span className="text-gray-500 line-through text-sm md:text-base">
                ₹ {singleProduct?.price}
              </span>
            </div>

            {/* Available Offers */}
            <div>
              <h6 className="font-semibold mb-2">Available offers</h6>
              <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
                <li>Bank Offer: Get 10% off on Axis Bank Cards</li>
                <li>Special Price: Extra ₹2000 off (price inclusive)</li>
                <li>No Cost EMI starting from ₹2,166/month</li>
              </ul>
            </div>

            {/* Delivery */}
            <div className="border rounded-lg p-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">
                  Delivery to <strong>226012</strong>
                </span>
                <button className="text-green-600 text-sm font-medium">
                  Change
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Delivery by{" "}
                <span className="font-medium">10 Sep, Wednesday</span>
              </p>
              <button className="text-blue-600 text-xs mt-1">
                View Details
              </button>
            </div>

            {/* Highlights */}
            <div>
              <h6 className="font-semibold mb-2">Highlights</h6>
              <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
                <li>With Mic: Yes</li>
                <li>Bluetooth version: 5.3</li>
                <li>40 hrs battery life + fast charging</li>
                <li>45ms Ultra-Low Latency Gaming</li>
                <li>IPX5 Water Resistant</li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h6 className="font-semibold mb-2">Services</h6>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>1 Year Warranty</li>
                <li>Cash on Delivery available</li>
                <li>7 Days Replacement Policy</li>
                <li>GST Invoice available</li>
              </ul>
            </div>

            {/* Seller */}
            <div>
              <h6 className="font-semibold mb-2">Seller</h6>
              <p className="text-sm text-gray-700">
                CORSECA <span className="text-yellow-600">★ 4.4</span>
              </p>
            </div>

            {/* Description & Specs in Tabs for Mobile */}
            <div className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Description */}
                <div>
                  <h6 className="font-semibold text-lg mb-2">Description</h6>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {singleProduct?.description}
                  </p>
                </div>

                {/* Specifications */}
                <div>
                  <h6 className="font-semibold text-lg mb-2">Specifications</h6>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    <div>
                      <p>
                        <strong>Brand:</strong> GOBOULT
                      </p>
                      <p>
                        <strong>Model:</strong> W20
                      </p>
                      <p>
                        <strong>Color:</strong> Glacier Blue
                      </p>
                      <p>
                        <strong>Type:</strong> True Wireless
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong>Bluetooth:</strong> 5.3
                      </p>
                      <p>
                        <strong>Range:</strong> 10m
                      </p>
                      <p>
                        <strong>Warranty:</strong> 1 Year
                      </p>
                      <p>
                        <strong>Water Resistant:</strong> Yes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
