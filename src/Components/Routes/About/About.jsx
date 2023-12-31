import Testimonial from "../../HomePages/Home/Testimonial/Testimonial";
import AboutCard from "./AboutCard";
import AboutImages from "./AboutImages";
import FriendlyStaff from "./FriendlyStaff";

const About = () => {
  const bannerStyle = {
    backgroundImage:
      'url("https://thememxpro.com/theme/foodily/wp-content/uploads/2022/09/6-1.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "cover",
  };
  return (
    <>
      <div>
        <div
          style={bannerStyle}
          className="dark:text-brand-dark-title h-[400px] md:h-[450px] lg:h-[550px] flex items-center justify-center bg-brand-dark-bg rounded-md"
        >
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
          </div>
        </div>
      </div>

      <AboutCard />
      <AboutImages />
      <FriendlyStaff />
      <Testimonial />
    </>
  );
};

export default About;
