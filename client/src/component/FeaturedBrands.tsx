import logo4 from "../assets/images/logo4.png.png";

function FeaturedBrands() {
  return (
    <div className="bg-white p-4 rounded-lg sm:w-full lg:w-1/2">
      <div className="flex justify-between">
        <h5 className="font-bold">FEATURED BRANDS</h5>
        <span className="text-xs text-gray-500">View All</span>
      </div>
      <div className="grid grid-cols-5 gap-2 p-4">
        <img src={logo4} className="w-full object-contain" />
        <img src={logo4} className="w-full object-contain" />
        <img src={logo4} className="w-full object-contain" />
        <img src={logo4} className="w-full object-contain" />
        <img src={logo4} className="w-full object-contain" />
        <img src={logo4} className="w-full object-contain" />
        <img src={logo4} className="w-full object-contain" />
        <img src={logo4} className="w-full object-contain" />
        <img src={logo4} className="w-full object-contain" />
        <img src={logo4} className="w-full object-contain" />
      </div>
    </div>
  );
}

export default FeaturedBrands;
