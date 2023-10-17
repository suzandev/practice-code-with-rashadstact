import { Outlet } from "react-router-dom";
import Navbar from "./Components/HomePages/Header/Navbar";
import TopNav from "./Components/HomePages/Header/TopNav";

const Root = () => {
  return (
    <div>
      <TopNav />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
