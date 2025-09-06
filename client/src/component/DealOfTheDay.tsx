import { useEffect, useState } from "react";
import prod5 from "../assets/images/prod5.png.png";
import prod6 from "../assets/images/prod6.png.png";
import prod7 from "../assets/images/prod7.png.png";
import prod8 from "../assets/images/prod8.png.png";

function DealOfTheDay() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 15,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(timer);
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (val: number) => String(val).padStart(2, "0");

  const productImages = [prod5, prod6, prod7, prod8];

  return (
    <div className="w-full h-full flex flex-col">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-lg bg-green-600 p-4 text-white mb-2 text-center md:text-left">
        DEAL OF THE DAY
      </div>

      {/* Main Box */}
      <div className="rounded-lg p-4 bg-white flex flex-col lg:flex-row gap-6 flex-1">
        {/* Left + Middle Wrapper */}
        <div className="flex flex-col sm:flex-row lg:flex-row gap-6 flex-1 p-4">
          {/* Left side - Image thumbnails */}
          <div className="flex flex-row lg:flex-col gap-2 justify-center lg:justify-start">
            {productImages.map((img, idx) => (
              <div
                key={idx}
                className="w-16 h-16 sm:w-20 sm:h-20 border rounded-lg overflow-hidden"
              >
                <img
                  src={img}
                  alt={`product-${idx}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Middle - Main Product Image */}
          <div className="flex-1 flex items-center justify-center">
            <img
              src={prod5}
              alt="main-product"
              className="w-40 h-40 sm:w-64 sm:h-64 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right side - Product Info */}
        <div className="flex-1 p-4">
          {/* Product Title */}
          <h6 className="font-bold text-lg sm:text-xl">
            Xioma Redmi Note 11 Pro 256GB 2023, Black Smartphone
          </h6>

          {/* Price Section */}
          <div className="flex items-center gap-2 mt-2">
            <h3 className="text-red-500 text-xl sm:text-2xl font-bold">
              ₹ 25,999
            </h3>
            <span className="text-gray-500 line-through">₹ 28,999</span>
          </div>

          {/* Specifications */}
          <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 mt-3 space-y-1">
            <li>8GB RAM</li>
            <li>256GB Storage</li>
            <li>108MP Camera</li>
            <li>5000mAh Battery</li>
          </ul>

          {/* Timer */}
          <div className="my-4">
            <p className="text-sm font-semibold text-red-600 mb-1">
              ⏳ Offer ends in:
            </p>
            <div className="flex gap-3 justify-center sm:justify-start">
              {["hours", "minutes", "seconds"].map((unit, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-black text-white px-3 sm:px-4 py-2 rounded-md text-lg font-bold">
                    {formatTime(timeLeft[unit as keyof typeof timeLeft])}
                  </div>
                  <span className="text-xs text-gray-600 mt-1 capitalize">
                    {unit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full sm:w-auto bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 cursor-pointer">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default DealOfTheDay;
