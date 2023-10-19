// import AllCards from "../../AddToCards/AllCards";
import Banner from "./Banner";
import Beverage from "./Beverage/Beverage";
// import Category from "./Category";

import Juices from "./Juices/Juices";

const Home = () => {
  return (
    <div>
      <Banner />
      <Juices />
      <Beverage />
      {/*
      <Category />
      <AllCards /> */}
    </div>
  );
};

export default Home;
