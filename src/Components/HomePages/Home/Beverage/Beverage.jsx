import BeverageCard from "./BeverageCard";

const Beverage = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col justify-center items-center">
        <p className="text-2xl text-[#BEB996]">Best For You</p>
        <h3 className="text-4xl font-bold md:text-6xl">Our Beverage</h3>
        <img
          src="https://thememxpro.com/theme/foodily/wp-content/uploads/2022/09/separate.png"
          alt=""
        />
      </div>
      <BeverageCard />
    </div>
  );
};

export default Beverage;
