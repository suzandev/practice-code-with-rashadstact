// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

export default function SwiperSlider() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "background-image":
              "url(https://images.unsplash.com/photo-1504610926078-a1611febcad3?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D)",
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide className="flex items-center flex-col justify-center text-center">
          <div className="title" data-swiper-parallax="-300">
            Phones
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            You can find your phones
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Introducing the next level of smartphone technology. This
              innovative device is here to redefine the way you use your phone.
              With its sleek sliding mechanism, Enjoy a full-screen experience
              when you need it, and the compact convenience of a phone when you
              do not. Stay ahead of the curve with the Phone Slider where style
              meets substance in the world of mobile communication.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center flex-col justify-center text-center">
          <div className="title" data-swiper-parallax="-300">
            Laptop
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            You can find your phones
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Unleash your productivity with our sleek and powerful laptop.
              Packed with cutting-edge technology, it is your perfect companion
              for work or play. Take your work on the go with our lightweight
              laptop. It is designed for those who need performance without
              compromise, all in a compact package.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center flex-col justify-center text-center">
          <div className="title" data-swiper-parallax="-300">
            Slide 3
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
