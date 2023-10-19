// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

import "./TestimonialSlider.css";

// import required modules
import { EffectCreative } from "swiper/modules";

const TestimonialSlider = () => {
  return (
    <>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <SwiperSlide>
          <div className="p-4 rounded-lg shadow-lg flex flex-col justify-center items-center gap-4 mt-8">
            <div className="flex items-center mb-4">
              <img
                src="https://thememxpro.com/theme/foodily/wp-content/uploads/2022/09/author-1.jpg"
                alt="Johndoe"
                className="w-18 h-18 rounded-full object-cover"
              />
              <div className="ml-4">
                <h2 className="text-lg font-semibold">{name}</h2>
              </div>
            </div>
            <p className="text-gray-900 pb-11">
              I love the products from this company. They are of the highest
              quality and always exceed my expectations.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-4 rounded-lg shadow-lg flex flex-col justify-center items-center gap-4 mt-8">
            <div className="flex items-center mb-4">
              <img
                src="https://thememxpro.com/theme/foodily/wp-content/uploads/2022/09/author-1.jpg"
                alt="Johndoe"
                className="w-18 h-18 rounded-full object-cover"
              />
              <div className="ml-4">
                <h2 className="text-lg font-semibold">{name}</h2>
              </div>
            </div>
            <p className="text-gray-900 pb-11">
              The team at this company goes above and beyond to meet their
              customers needs. I am always impressed by their commitment to
              quality and innovation.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-4 rounded-lg shadow-lg flex flex-col justify-center items-center gap-4 mt-8">
            <div className="flex items-center mb-4">
              <img
                src="https://thememxpro.com/theme/foodily/wp-content/uploads/2022/09/author-1.jpg"
                alt="Johndoe"
                className="w-18 h-18 rounded-full object-cover"
              />
              <div className="ml-4">
                <h2 className="text-lg font-semibold">{name}</h2>
              </div>
            </div>
            <p className="text-gray-900 pb-11">
              I was skeptical at first, but after trying their products, I am a
              believer. The taste and quality are unmatched. I am a loyal
              customer now.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-4 rounded-lg shadow-lg flex flex-col justify-center items-center gap-4 mt-8">
            <div className="flex items-center mb-4">
              <img
                src="https://thememxpro.com/theme/foodily/wp-content/uploads/2022/09/author-1.jpg"
                alt="Johndoe"
                className="w-18 h-18 rounded-full object-cover"
              />
              <div className="ml-4">
                <h2 className="text-lg font-semibold">{name}</h2>
              </div>
            </div>
            <p className="text-gray-900 pb-11">
              This company has transformed my daily routine. Their products have
              become an essential part of my life. I can not imagine a day
              without them.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-4 rounded-lg shadow-lg flex flex-col justify-center items-center gap-4 mt-8">
            <div className="flex items-center mb-4">
              <img
                src="https://thememxpro.com/theme/foodily/wp-content/uploads/2022/09/author-1.jpg"
                alt="Johndoe"
                className="w-18 h-18 rounded-full object-cover"
              />
              <div className="ml-4">
                <h2 className="text-lg font-semibold">{name}</h2>
              </div>
            </div>
            <p className="text-gray-900 pb-11">
              I stumbled upon this company and it was a game-changer. Their
              products are not only delicious but also healthy. {`I've`} never
              felt better.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TestimonialSlider;
