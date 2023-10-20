import { AiOutlineLaptop } from "react-icons/ai";
import { BsPhoneFill } from "react-icons/bs";
import { ImHeadphones } from "react-icons/im";

const MenuIconsCard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
        <div
          className="flex flex-col justify-center items-center gap-2 rounded-md p-4 border-dotted border-2 border-slate-700"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="">
            <BsPhoneFill size={60} />
          </div>

          <h2 className="card-title">Awesome taste</h2>
          <p>
            Us percipit urbanitas referrentur ea. Mei at numquam molestiae
            intellegam.
          </p>
        </div>
        <div
          className="flex flex-col justify-center items-center gap-2 rounded-md p-4 border-dotted border-2 border-slate-700"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="">
            <AiOutlineLaptop size={75} />
          </div>

          <h2 className="card-title">ORGANIC FRUITS</h2>
          <p>
            Us percipit urbanitas referrentur ea. Mei at numquam molestiae
            intellegam.
          </p>
        </div>
        <div
          className="flex flex-col justify-center items-center gap-2 rounded-md p-4 border-dotted border-2 border-slate-700"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="">
            <ImHeadphones size={75} />
          </div>

          <h2 className="card-title">HEALTHY BLENDS</h2>
          <p>
            Us percipit urbanitas referrentur ea. Mei at numquam molestiae
            intellegam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuIconsCard;
