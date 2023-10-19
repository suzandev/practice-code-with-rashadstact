// import AllCards from "../../AddToCards/AllCards";
import Banner from "./Banner";
import Beverage from "./Beverage/Beverage";
import Category from "./Category";

import Juices from "./Juices/Juices";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Juices />
      <Beverage />
      <Testimonial />

      <Category />
      {/* <AllCards /> */}
    </div>
  );
};

export default Home;
