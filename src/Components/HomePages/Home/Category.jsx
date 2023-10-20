import { AiOutlineLaptop } from "react-icons/ai";
import { ImHeadphones } from "react-icons/im";
import { BsSmartwatch, BsFillBagHeartFill, BsPhoneFill } from "react-icons/bs";
import { TbDeviceAirtag } from "react-icons/tb";

import { Link } from "react-router-dom";

const Category = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-4xl font-bold md:text-5xl">
          Our Upcoming Products
        </h3>
        <img
          src="https://thememxpro.com/theme/foodily/wp-content/uploads/2022/09/separate.png"
          alt=""
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 my-10">
        <div
          className="flex flex-col justify-center items-center gap-2 rounded-md  hover:bg-[#51AA1B] py-4 border"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="">
            <BsPhoneFill size={60} />
          </div>

          <h2 className="card-title">Phones!</h2>
          <p>All Phones Hear</p>
          <div className="card-actions">
            <Link className="btn btn-primary" to="/categoryItems">
              view details
            </Link>
          </div>
        </div>
        <div
          className="flex flex-col justify-center items-center gap-2 rounded-md  hover:bg-[#51AA1B] py-4 border"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="">
            <AiOutlineLaptop size={75} />
          </div>

          <h2 className="card-title">Laptop!</h2>
          <p>All Phones Hear</p>
          <div className="card-actions">
            <button className="btn btn-primary">view details</button>
          </div>
        </div>
        <div
          className="flex flex-col justify-center items-center gap-2 rounded-md  hover:bg-[#51AA1B] py-4 border"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="">
            <ImHeadphones size={75} />
          </div>

          <h2 className="card-title">Headphones!</h2>
          <p>All Phones Hear</p>
          <div className="card-actions">
            <button className="btn btn-primary">view details</button>
          </div>
        </div>
        <div
          className="flex flex-col justify-center items-center gap-2 rounded-md  hover:bg-[#51AA1B] py-4 border"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="">
            <BsSmartwatch size={75} />
          </div>

          <h2 className="card-title">Smartwatch!</h2>
          <p>All Phones Hear</p>
          <div className="card-actions">
            <button className="btn btn-primary">view details</button>
          </div>
        </div>
        <div
          className="flex flex-col justify-center items-center gap-2 rounded-md  hover:bg-[#51AA1B] py-4 border"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="">
            <TbDeviceAirtag size={75} />
          </div>

          <h2 className="card-title">Air tag!</h2>
          <p>All Phones Hear</p>
          <div className="card-actions">
            <button className="btn btn-primary">view details</button>
          </div>
        </div>
        <div
          className="flex flex-col justify-center items-center gap-2 rounded-md  hover:bg-[#51AA1B] py-4 border"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="">
            <BsFillBagHeartFill size={75} />
          </div>

          <h2 className="card-title">Bag!</h2>
          <p>All Phones Hear</p>
          <div className="card-actions">
            <button className="btn btn-primary">view details</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
