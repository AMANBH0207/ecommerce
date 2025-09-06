import prod43 from "../assets/images/prod43.png.png";
import prod46 from "../assets/images/prod46.png.png";

function CategoryCard() {
  return (
    <div className="rounded-lg bg-white p-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h5 className="font-bold text-sm sm:text-base">AUDIOS & CAMERA</h5>
        <span className="text-xs text-gray-500 cursor-pointer hover:underline">
          View All
        </span>
      </div>

      {/* Main Banner */}
      <img
        className="rounded-lg w-full my-4 object-cover"
        src={prod43}
        alt="Category Banner"
      />

      {/* Product Thumbnails */}
      <div className="p-2 grid grid-cols-2 gap-2 place-items-center">
        <div  className="p-2">
            <img src={prod46}  className="max-h-16" />
            <p>Speaker</p>
            <span className="text-gray-500 text-sm">19 items</span>
          </div>
          <div  className="p-2">
            <img src={prod46}  className="max-h-16" />
            <p>Speaker</p>
            <span className="text-gray-500 text-sm">19 items</span>
          </div>
          <div  className="p-2">
            <img src={prod46}  className="max-h-16" />
            <p>Speaker</p>
            <span className="text-gray-500 text-sm">19 items</span>
          </div>
          <div  className="p-2">
            <img src={prod46}  className="max-h-16" />
            <p>Speaker</p>
            <span className="text-gray-500 text-sm">19 items</span>            
          </div>
        {/* {[1, 2, 3, 4].map((_, idx) => (
          <div key={idx} className="p-2">
            <img src={prod46} alt={`product-${idx}`} className="max-h-16" />
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default CategoryCard;
