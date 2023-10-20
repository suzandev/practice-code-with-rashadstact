const FriendlyStaffCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-24">
      <div
        className="1st relative group"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1500"
      >
        <img
          src="https://thememxpro.com/theme/foodily/wp-content/uploads/2022/09/staff-4.jpg"
          alt=""
        />
        <div className="absolute bg-white w-full -mt-24 py-7 opacity-0 group-hover:opacity-100 transition-opacity duration-700 px-2">
          <h3 className="text-lg font-semibold">JUSICA MALINA</h3>
          <p className="text-base">Pastry Chef</p>
        </div>
      </div>
      <div
        className="1st relative group"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1500"
      >
        <img
          src="https://thememxpro.com/theme/foodily/wp-content/uploads/2022/09/staff-5.jpg"
          alt=""
        />
        <div className="absolute bg-white w-full -mt-24 py-7 opacity-0 group-hover:opacity-100 transition-opacity duration-700 px-2">
          <h3 className="text-lg font-semibold">JUSICA MALINA</h3>
          <p className="text-base">Pastry Chef</p>
        </div>
      </div>
      <div
        className="1st relative group"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1500"
      >
        <img
          src="https://thememxpro.com/theme/foodily/wp-content/uploads/2022/09/staff-6.jpg"
          alt=""
        />
        <div className="absolute bg-white w-full -mt-24 py-7 opacity-0 group-hover:opacity-100 transition-opacity duration-700 px-2">
          <h3 className="text-lg font-semibold">JUSICA MALINA</h3>
          <p className="text-base">Pastry Chef</p>
        </div>
      </div>
    </div>
  );
};

export default FriendlyStaffCard;
