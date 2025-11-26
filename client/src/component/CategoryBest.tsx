import prod20 from "../assets/images/prod20.png.png";
import type { BannersData, topProduct } from "../services/types/actionTypes";
import { useNavigate } from "react-router-dom";

interface CategoryBestProps {
  banners: BannersData[];
  products: topProduct[]
}

function CategoryBest({ banners, products }: CategoryBestProps) {
  const navigate = useNavigate()

  return (
    <>
      <div className="p-4 bg-white rounded-lg">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h5 className="font-bold text-sm sm:text-base">
            TOP CELLPHONES & TABLETS
          </h5>
          <span className="text-xs text-gray-500 cursor-pointer hover:underline">
            View All
          </span>
        </div>

        {/* Top Section with Main Image + Categories */}
        <div className="flex flex-col md:flex-row p-2 md:p-4 border-b border-gray-300 gap-4">
          {/* Left Big Image */}
          {banners?.length > 0 && (
            <img
              className="rounded-lg w-full md:w-1/2 h-[200px] object-cover"
              src={banners[0].image}
              alt="Banner"
            />
          )}

          {/* Right Grid of Items */}
          <div className="w-full md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center justify-center gap-2">
                <div>
                  <p>IOS</p>
                  <span className="text-gray-500 text-sm">19 items</span>
                </div>
                <img className="w-12 h-12 object-contain" src={prod20} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Product List */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
          {/* {[...Array(6)].map((_, i) => ( */}

          {products?.map((item,i)=>(
            <div key={i} className="text-center cursor-pointer" onClick={()=>navigate(`/product/${item._id}`)}>
              <div>
                <img
                  className="mx-auto w-28 h-40 sm:w-32 sm:h-50 object-contain"
                  src={item?.image?.url}
                />
                <p className="mt-2 text-sm">{item?.name}</p>
              </div>
              <div className="flex justify-center items-center gap-2 mt-2">
                <p className="text-red-500 font-bold text-sm sm:text-base">
                 {item.discountedPrice}
                </p>
                <span className="text-gray-500 line-through text-xs sm:text-sm">
                  {item?.price}
                </span>
              </div>
            </div>
          ))}
            
          {/* ))} */}
        </div>
      </div>
    </>
  );
}

export default CategoryBest;
