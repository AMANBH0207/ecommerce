import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // only Autoplay
import "swiper/css"; // only base CSS

import slider1 from "../assets/images/slider1.png.png";
import slider2 from "../assets/images/slider2.png.png";
import slider3 from "../assets/images/slider3.png.png";

function ImageSlider() {
  return (
    <div className="w-full max-w-screen-lg mx-auto rounded-lg overflow-hidden">
      <Swiper
        slidesPerView={1} // always 1 slide
        spaceBetween={0}   // optional: no gap
        loop={true}
        centeredSlides={false} // disable centering
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]} // only Autoplay module
        className="w-full"
      >
        {[slider1, slider2, slider3].map((src, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={src}
              alt={`Slider ${idx + 1}`}
              className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageSlider;
