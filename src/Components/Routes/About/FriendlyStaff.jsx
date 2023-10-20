import FriendlyStaffCard from "./FriendlyStaffCard";

const FriendlyStaff = () => {
  return (
    <div className="py-40">
      <div className="flex flex-col justify-center items-center">
        <p className="text-2xl text-[#BEB996]">Best For You</p>
        <h3 className="text-4xl font-bold md:text-6xl">Friendly Staff</h3>
        <img
          src="https://thememxpro.com/theme/foodily/wp-content/uploads/2022/09/separate.png"
          alt=""
        />
      </div>
      <FriendlyStaffCard />
    </div>
  );
};

export default FriendlyStaff;
