import AboutCard from "./AboutCard";

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

      <div className="">
        <AboutCard />
      </div>
    </>
  );
};

export default About;
