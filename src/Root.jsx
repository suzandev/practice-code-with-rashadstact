import { Outlet } from "react-router-dom";
import Navbar from "./Components/HomePages/Header/Navbar";
import TopNav from "./Components/HomePages/Header/TopNav";
import Footer from "./Components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <TopNav />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
