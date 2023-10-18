import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function SwiperSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://html.fairytheme.net/belle/images/header-bg.jpg"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://html.fairytheme.net/belle/images/header-bg.jpg"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://html.fairytheme.net/belle/images/header-bg.jpg"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://html.fairytheme.net/belle/images/header-bg.jpg"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://html.fairytheme.net/belle/images/header-bg.jpg"
            className="w-full"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
