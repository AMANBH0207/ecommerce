import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import type { BannersData } from "../services/types/actionTypes";

interface BannersProps {
  banners: BannersData[];
}

function ImageSlider({ banners }: BannersProps) {
  return (
    <div className="w-full max-w-screen-lg mx-auto rounded-lg overflow-hidden">
      {banners && (
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="w-full"
        >
          {banners?.map((banner: BannersData) => (
            <SwiperSlide key={banner._id}>
              <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px]">
                <img
                  src={banner.image}
                  alt={`Slider ${banner._id}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                <a
                  href={banner.link}
                  className="absolute bottom-15 left-30 transform -translate-x-1/2 bg-white font-bold text-black px-6 py-2 rounded-sm border-black-200 border-1 hover:bg-green-600 hover:text-white transition"
                >
                  Buy Now
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default ImageSlider;
