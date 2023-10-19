const Juices = () => {
  return (
    <div
      className="card lg:card-side bg-base-100 shadow-xl md:py-10"
      style={{
        backgroundImage:
          'url("https://thememxpro.com/theme/foodily/wp-content/uploads/2022/09/1.png")',
        backgroundPosition: "center center",
      }}
    >
      <figure
        className="lg:w-1/2"
        data-aos="flip-left"
        data-aos-duration="1500"
      >
        <img
          src="https://thememxpro.com/theme/foodily/wp-content/uploads/2022/09/juice.png"
          alt="Album"
        />
      </figure>
      <div
        className="card-body flex flex-col items-center justify-center lg:w-1/2 "
        data-aos="flip-right"
        data-aos-duration="1500"
      >
        <div className="flex flex-col items-center justify-center gap-4 ">
          <p className="text-base">Drink For Health</p>
          <h2 className="card-title md:text-4xl font-semibold">
            Fresh Fruit Juices
          </h2>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nisi
            asperiores natus iure quisquam alias delectus a pariatur repellat
            quidem blanditiis facere earum, perspiciatis fugit eius aspernatur
            commodi fugiat assumenda.
          </p>
          <div className="card-actions ">
            <button className="outline-none border-solid border-2 border-[#DE9190] flex items-center gap-3 px-4 py-2 rounded-full hover:bg-[#DE9190] hover:text-black">
              <span>
                <img
                  src="https://thememxpro.com/theme/foodily/wp-content/themes/foodily/assets/images/icons/btn-icon-1.png"
                  alt=""
                  className="bg-[#DE9190] hover:bg-black rounded-full w-10 h-10"
                />
              </span>{" "}
              <span className="text-base font-semibold">Buy Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Juices;
