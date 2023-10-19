import TestimonialSlider from "./TestimonialSlider/TestimonialSlider";

const Testimonial = () => {
  return (
    <div className="py-20">
      <div className="flex flex-col justify-center items-center">
        <p
          className="text-2xl text-[#BEB996] pb-6"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          Testimonial
        </p>
        <h3
          className="text-4xl font-bold md:text-6xl"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          What People Say
        </h3>
        <img
          src="https://thememxpro.com/theme/foodily/wp-content/uploads/2022/09/separate.png"
          alt=""
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        />
      </div>
      <TestimonialSlider />
    </div>
  );
};

export default Testimonial;
