import MenuIconsCard from "./MenuIconsCard";
import MenuMarque from "./MenuMarque";
import SoftlyMenus from "./SoftlyMenus";
import Marquee from "react-fast-marquee";

const Menu = () => {
  const bannerStyle = {
    backgroundImage:
      'url("https://thememxpro.com/theme/foodily/wp-content/uploads/2022/09/6-1.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "cover",
  };

  return (
    <div>
      <div>
        <div
          style={bannerStyle}
          className="dark:text-brand-dark-title h-[400px] md:h-[450px] lg:h-[550px] flex items-center justify-center bg-brand-dark-bg rounded-md"
        >
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Our Menu</h1>
          </div>
        </div>
      </div>

      <MenuIconsCard />

      <img
        src="https://thememxpro.com/theme/foodily/wp-content/uploads/2022/09/8.jpg"
        alt=""
      />

      <SoftlyMenus />

      <Marquee>
        <MenuMarque />
      </Marquee>
    </div>
  );
};

export default Menu;
