import prod4 from "../assets/images/prod4.png.png"

function TopCategories() {
  return (
    <div className="bg-white p-4 rounded-lg sm:w-full lg:w-1/2">
      <div className="flex justify-between">
        <h5 className="font-bold">TOP CATEGORIES</h5>
        <span className="text-xs text-gray-500">View All</span>
      </div>
      <div className="grid grid-cols-5 gap-2 p-4">
        <div>
            <img src={prod4} className="w-full object-contain" />
            <div className="text-center font-bold text-sm">Laptops</div>
        </div>
        
        <div>
            <img src={prod4} className="w-full object-contain" />
            <div className="text-center font-bold text-sm">Laptops</div>
        </div>
        <div>
            <img src={prod4} className="w-full object-contain" />
            <div className="text-center font-bold text-sm">Laptops</div>
        </div>
        <div>
            <img src={prod4} className="w-full object-contain" />
            <div className="text-center font-bold text-sm">Laptops</div>
        </div>
        <div>
            <img src={prod4} className="w-full object-contain" />
            <div className="text-center font-bold text-sm">Laptops</div>
        </div>

      </div>
    </div>
  );
}

export default TopCategories;
