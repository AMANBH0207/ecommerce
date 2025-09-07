import nordbuds from "../assets/images/nordbuds2.webp";

function MyOrders() {
  return (
    <>
      {/* Search bar */}
      <div className="mb-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
        <input
          type="text"
          placeholder="Search your orders here"
          className="flex-1 bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
          Search
        </button>
      </div>

      {/* Order Card */}
      <div className="p-4 rounded-lg bg-white shadow-sm mb-2 cursor-pointer">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Product Image */}
          <div className="flex-shrink-0">
            <img
              className="w-32 h-32 object-contain"
              src={nordbuds}
              alt="Nord Buds 2"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col flex-1 justify-between">
            <div>
              <h6 className="font-medium text-gray-800 text-sm sm:text-base">
                OnePlus Nord Buds 2 True Wireless Earbuds
              </h6>
              <p className="font-semibold text-gray-900 mt-1">₹2,499</p>
            </div>

            {/* Delivery Info */}
            <div className="mt-2 sm:mt-4">
              <p className="text-sm text-gray-600">
                Delivered on <span className="font-medium">Sep 07, 2025</span>
              </p>
              <p className="text-green-600 text-sm font-medium">
                Your item has been delivered
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-3">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-100">
                Rate & Review Product
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-100">
                Need Help?
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="p-4 rounded-lg bg-white shadow-sm mb-2 cursor-pointer">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Product Image */}
          <div className="flex-shrink-0">
            <img
              className="w-32 h-32 object-contain"
              src={nordbuds}
              alt="Nord Buds 2"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col flex-1 justify-between">
            <div>
              <h6 className="font-medium text-gray-800 text-sm sm:text-base">
                OnePlus Nord Buds 2 True Wireless Earbuds
              </h6>
              <p className="font-semibold text-gray-900 mt-1">₹2,499</p>
            </div>

            {/* Delivery Info */}
            <div className="mt-2 sm:mt-4">
              <p className="text-sm text-gray-600">
                Delivered on <span className="font-medium">Sep 07, 2025</span>
              </p>
              <p className="text-green-600 text-sm font-medium">
                Your item has been delivered
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-3">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-100">
                Rate & Review Product
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-100">
                Need Help?
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 rounded-lg bg-white shadow-sm mb-2 cursor-pointer">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Product Image */}
          <div className="flex-shrink-0">
            <img
              className="w-32 h-32 object-contain"
              src={nordbuds}
              alt="Nord Buds 2"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col flex-1 justify-between">
            <div>
              <h6 className="font-medium text-gray-800 text-sm sm:text-base">
                OnePlus Nord Buds 2 True Wireless Earbuds
              </h6>
              <p className="font-semibold text-gray-900 mt-1">₹2,499</p>
            </div>

            {/* Delivery Info */}
            <div className="mt-2 sm:mt-4">
              <p className="text-sm text-gray-600">
                Delivered on <span className="font-medium">Sep 07, 2025</span>
              </p>
              <p className="text-green-600 text-sm font-medium">
                Your item has been delivered
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-3">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-100">
                Rate & Review Product
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-100">
                Need Help?
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 rounded-lg bg-white shadow-sm mb-2 cursor-pointer">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Product Image */}
          <div className="flex-shrink-0">
            <img
              className="w-32 h-32 object-contain"
              src={nordbuds}
              alt="Nord Buds 2"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col flex-1 justify-between">
            <div>
              <h6 className="font-medium text-gray-800 text-sm sm:text-base">
                OnePlus Nord Buds 2 True Wireless Earbuds
              </h6>
              <p className="font-semibold text-gray-900 mt-1">₹2,499</p>
            </div>

            {/* Delivery Info */}
            <div className="mt-2 sm:mt-4">
              <p className="text-sm text-gray-600">
                Delivered on <span className="font-medium">Sep 07, 2025</span>
              </p>
              <p className="text-green-600 text-sm font-medium">
                Your item has been delivered
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-3">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-100">
                Rate & Review Product
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-100">
                Need Help?
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="p-4 rounded-lg bg-white shadow-sm mb-2 cursor-pointer">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Product Image */}
          <div className="flex-shrink-0">
            <img
              className="w-32 h-32 object-contain"
              src={nordbuds}
              alt="Nord Buds 2"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col flex-1 justify-between">
            <div>
              <h6 className="font-medium text-gray-800 text-sm sm:text-base">
                OnePlus Nord Buds 2 True Wireless Earbuds
              </h6>
              <p className="font-semibold text-gray-900 mt-1">₹2,499</p>
            </div>

            {/* Delivery Info */}
            <div className="mt-2 sm:mt-4">
              <p className="text-sm text-gray-600">
                Delivered on <span className="font-medium">Sep 07, 2025</span>
              </p>
              <p className="text-green-600 text-sm font-medium">
                Your item has been delivered
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-3">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-100">
                Rate & Review Product
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-100">
                Need Help?
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default MyOrders;
