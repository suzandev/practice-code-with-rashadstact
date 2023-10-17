const Banner = () => {
  const bannerStyle = {
    backgroundImage:
      'url("https://images.unsplash.com/photo-1616353071588-708dcff912e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGUlMjBpcGhvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60")',
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      style={bannerStyle}
      className="dark:text-brand-dark-title h-[400px] md:h-[500px] lg:h-[650px] flex items-center justify-center bg-brand-dark-bg container"
    >
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg mb-8">Discover amazing products and more.</p>
        <a
          href="/products" // Replace with the actual link to your products page
          className="bg-white text-blue-500 hover:bg-blue-200 hover:text-white py-2 px-6 rounded-full text-lg transition duration-300"
        >
          Explore Products
        </a>
      </div>
    </div>
  );
};

export default Banner;
