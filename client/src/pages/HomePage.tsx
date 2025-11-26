import { useEffect } from "react";
import slider4 from "../assets/images/slider4.png.png";
import slider5 from "../assets/images/slider5.png.png";
import CategoryBest from "../component/CategoryBest";
import CategoryCard from "../component/CategoryCard";
import DealOfTheDay from "../component/DealOfTheDay";
import FeaturedBrands from "../component/FeaturedBrands";
import ImageSlider from "../component/ImageSlider";
import SaleBanners from "../component/SaleBanners";
import TopCategories from "../component/TopCategories";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getBanners } from "../features/banners/bannerThunks";
import { getTopProducts } from "../features/products/productThunks";

function HomePage() {
  const dispatch = useAppDispatch();
  const { banners, loading, error } = useAppSelector((state) => state.banner);
  const { topProduct, loading:productLoading, error:productError } = useAppSelector((state) => state.product);
  useEffect(() => {
    dispatch(getBanners());
    dispatch(getTopProducts());
  }, []);

  return (
    <div className="p-2 bg-gray-100">
      <div className="flex flex-col xl:flex-row gap-2 xl:items-stretch">
        {/* Left Sidebar */}
        <div className="hidden xl:block rounded-lg shadow-lg bg-white px-10 py-2 w-full xl:w-1/5 min-w-[260px]">
          <h6 className="mb-2 text-red-500 font-bold">SALE 40% OFF</h6>
          <ul className="space-y-1 text-sm">
            <li className="font-bold py-2 cursor-pointer">Laptops</li>
            <li className="font-bold py-2 cursor-pointer">Mobiles</li>
            <li className="font-bold py-2 cursor-pointer">Electronics</li>
            <li className="font-bold py-2 cursor-pointer">PC & Computers</li>
            <li className="font-bold py-2 cursor-pointer">Cell Phones</li>
            <li className="font-bold py-2 cursor-pointer">Tablets</li>
            <li className="font-bold py-2 cursor-pointer">Gaming & VR</li>
            <li className="font-bold py-2 cursor-pointer">Networking</li>
            <li className="font-bold py-2 cursor-pointer">Cameras</li>
            <li className="font-bold py-2 cursor-pointer">Sounds</li>
            <li className="font-bold py-2 cursor-pointer">Office</li>
            <li className="font-bold py-2 cursor-pointer">Storage, USB</li>
            <li className="font-bold py-2 cursor-pointer">Accessories</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex flex-col w-full xl:w-3/5 gap-2 px-0 xl:px-2">
          <ImageSlider banners={banners?.slider} />

          <div className="flex flex-wrap gap-2">
            <img
              src={slider4}
              className="rounded-lg flex-1 min-w-[120px] object-cover"
            />
            <img
              src={slider5}
              className="rounded-lg flex-1 min-w-[120px] object-cover"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col w-full xl:w-2/5 gap-2">
          {banners?.static?.map((banner) => (
            <img
              key={banner._id}
              src={banner.image}
              className="rounded-lg w-full flex-1 object-cover"
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 py-2">
        <FeaturedBrands />
        <TopCategories />
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-stretch">
        {/* Left Section */}
        <div className="md:w-3/4 w-full flex">
          <DealOfTheDay />
        </div>

        {/* Right Section */}
        <div className="md:w-1/4 w-full flex">
          <SaleBanners />
        </div>
      </div>

      <div className="pt-2">
        <CategoryBest banners={banners?.mobiles} products={topProduct.mobiles}/>
      </div>
      <div className="pt-2">
        {/* <CategoryBest /> */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 py-2">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
}

export default HomePage;
