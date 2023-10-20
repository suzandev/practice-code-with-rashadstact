import { FaRegHandPeace } from "react-icons/fa";

const MenuIconsCard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-20 px-3 md:px-8">
        <div
          className="flex flex-col justify-center items-center gap-4 rounded-md p-4 border-dotted border-2 border-slate-700"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="">
            <FaRegHandPeace size={40} />
          </div>

          <h2 className="card-title">Awesome taste</h2>
          <p className="text-center">
            Us percipit urbanitas referrentur ea. Mei at numquam molestiae
            intellegam.
          </p>
        </div>
        <div
          className="flex flex-col justify-center items-center gap-4 rounded-md p-4 border-dotted border-2 border-slate-700"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="">
            <FaRegHandPeace size={40} />
          </div>

          <h2 className="card-title">ORGANIC FRUITS</h2>
          <p className="text-center">
            Us percipit urbanitas referrentur ea. Mei at numquam molestiae
            intellegam.
          </p>
        </div>
        <div
          className="flex flex-col justify-center items-center gap-4 rounded-md p-4 border-dotted border-2 border-slate-700"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="">
            <FaRegHandPeace size={40} />
          </div>

          <h2 className="card-title md:text-base lg:text-lg">HEALTHY BLENDS</h2>
          <p className="text-center">
            Us percipit urbanitas referrentur ea. Mei at numquam molestiae
            intellegam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuIconsCard;
