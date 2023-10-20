import { AiOutlineCheck } from "react-icons/ai";

const AboutCard = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl px-4 mt-20">
      <figure
        className="flex flex-col relative flex-1"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <img
          src="https://thememxpro.com/theme/foodily/wp-content/uploads/2022/09/history-3.jpg"
          alt="Album"
        />
        <img
          src="https://thememxpro.com/theme/foodily/wp-content/uploads/2022/09/history-4.png"
          alt=""
          className="absolute mt-44 ml-16 md:mt-80 md:ml-44"
        />
      </figure>

      <div
        className="text-center lg:text-left lg:pl-10 mt-20 flex-1"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="flex flex-col gap-8">
          <p className="text-[#BEB996] text-base font-semibold">
            Our Vision And History
          </p>
          <h2 className="text-2xl md:text-5xl font-bold">
            Founded in 1970 by{" "}
            <span className="text-[#DE9190]">Chairman Jay Martin</span>
          </h2>
          <p className="text-base lg:text-xl">
            The Juice Plus+ Company has grown from a small, direct-sales company
            into a highly successful, privately held health and wellness company
            operatinLorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div>
            <div className="flex md:items-center gap-3">
              <AiOutlineCheck size={22} className="text-[#F8A392]" />
              <p className="text-base font-semibold text-[#54595F]">
                Cras at mi luctus, tincidunt urna eu, posuere enim
              </p>
            </div>
          </div>
          <div>
            <div className="flex md:items-center gap-3">
              <AiOutlineCheck size={22} className="text-[#F8A392]" />
              <p className="text-base font-semibold text-[#54595F]">
                Cras at mi luctus, tincidunt urna eu, posuere enim
              </p>
            </div>
          </div>
          <div>
            <div className="flex md:items-center gap-3">
              <AiOutlineCheck size={22} className="text-[#F8A392]" />
              <p className="text-base font-semibold text-[#54595F]">
                Cras at mi luctus, tincidunt urna eu, posuere enim
              </p>
            </div>
          </div>
          <div>
            <div className="flex md:items-center gap-3">
              <AiOutlineCheck size={22} className="text-[#F8A392]" />
              <p className="text-base font-semibold text-[#54595F]">
                Cras at mi luctus, tincidunt urna eu, posuere enim
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
