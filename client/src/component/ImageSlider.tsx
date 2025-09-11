import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import slider1 from "../assets/images/slider1.png.png";
import slider2 from "../assets/images/slider2.png.png";
import slider3 from "../assets/images/slider3.png.png";

// Example: this will come from API/Admin
const banners = [
  { id: 1, image: slider1, link: "/shop/product/123" },
  { id: 2, image: slider2, link: "/shop/product/456" },
  { id: 3, image: slider3, link: "/shop/product/789" },
];

function ImageSlider() {
  return (
    <div className="w-full max-w-screen-lg mx-auto rounded-lg overflow-hidden">
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
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px]">
              <img
                src={banner.image}
                alt={`Slider ${banner.id}`}
                className="w-full h-full object-cover rounded-lg"
              />
              <a
                href={banner.link}
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-orange-600 transition"
              >
                Buy Now
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageSlider;
