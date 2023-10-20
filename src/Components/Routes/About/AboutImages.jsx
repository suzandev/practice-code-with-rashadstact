const AboutImages = () => {
  return (
    <div className="px-2 mt-28">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          className="1st relative group"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            src="https://thememxpro.com/theme/foodily/wp-content/uploads/2022/09/19.jpg"
            alt=""
          />
          <div className="absolute bg-white w-full -mt-24 py-7 opacity-0 group-hover:opacity-100 transition-opacity duration-700 px-2">
            <h3 className="text-lg font-semibold">CORNISH COD FILLET</h3>
            <p className="text-base">s percipit urbanitas referrentur ea.</p>
          </div>
        </div>
        <div
          className="2nd flex flex-col gap-3 "
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            src="https://thememxpro.com/theme/foodily/wp-content/uploads/2022/09/20.jpg"
            alt=""
          />

          <img
            src="https://thememxpro.com/theme/foodily/wp-content/uploads/2022/09/23.jpg"
            alt=""
          />
        </div>
        <div
          className="3rd flex flex-col gap-3"
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            src="https://thememxpro.com/theme/foodily/wp-content/uploads/2022/09/21.jpg"
            alt=""
          />
          <img
            src="https://thememxpro.com/theme/foodily/wp-content/uploads/2022/09/part-of-interior-of-modern-luxurious-resturant-loo-2021-09-24-03-35-31-utc.jpg"
            alt=""
          />
        </div>
        <div
          className="4th flex flex-col gap-3 "
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            src="https://thememxpro.com/theme/foodily/wp-content/uploads/2022/09/22.jpg"
            alt=""
          />
          <img
            src="https://thememxpro.com/theme/foodily/wp-content/uploads/2022/09/table-setting-with-beautifully-decoration-tasty-c-2021-10-21-03-36-59-utc-1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutImages;
