const SoftlyMenus = () => {
  const menuData = [
    {
      id: 1,
      images:
        "https://thememxpro.com/theme/foodily/wp-content/uploads/2022/09/menu-1.jpg",
      title: "Grilled Toast Burger",
      description: "Crispy black garlic",
    },
    {
      id: 2,
      images:
        "https://thememxpro.com/theme/foodily/wp-content/uploads/2022/09/menu-3.jpg",
      title: "Fried snacks",
      description: "Crispy black garlic",
    },
    {
      id: 3,
      images:
        "https://thememxpro.com/theme/foodily/wp-content/uploads/2022/09/menu-5.jpg",
      title: "Pizza",
      description: "Crispy black garlic",
    },
    {
      id: 4,
      images:
        "https://thememxpro.com/theme/foodily/wp-content/uploads/2022/09/menu-7.jpg",
      title: "Sandwiches",
      description: "Crispy black garlic",
    },
  ];
  const menuData2 = [
    {
      id: 5,
      images:
        "https://thememxpro.com/theme/foodily/wp-content/uploads/2022/09/menu-2.jpg",
      title: "Coca Cola",
      description: "Crispy black garlic",
    },
    {
      id: 6,
      images:
        "https://thememxpro.com/theme/foodily/wp-content/uploads/2022/09/menu-4.jpg",
      title: "Papsi",
      description: "Crispy black garlic",
    },
    {
      id: 7,
      images:
        "https://thememxpro.com/theme/foodily/wp-content/uploads/2022/09/menu-6.jpg",
      title: "Mirinda",
      description: "Crispy black garlic",
    },
    {
      id: 8,
      images:
        "https://thememxpro.com/theme/foodily/wp-content/uploads/2022/09/menu-8.jpg",
      title: "Fanta",
      description: "Crispy black garlic",
    },
  ];

  return (
    <>
      <div className="card lg:card-side shadow-xl pt-10 md:pt-20 px-2 gap-4">
        <div className="border-dotted border-2 border-slate-300 flex-1 gap-7 py-10 px-7">
          {menuData.map((item) => {
            console.log(item.images);

            return (
              <div key={item.id} className="">
                <div
                  className="flex flex-col md:flex-row items-center gap-6 mb-4"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                >
                  <div className="avatar">
                    <div className="w-20 rounded-full">
                      <img src={item.images} />
                    </div>
                  </div>

                  <div className="flex flex-col items-center md:items-start gap-1">
                    <h2 className="card-title">{item.title}</h2>
                    <p className="text-base">{item.description}</p>
                    <span className="">
                      ....................................................................
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="border-dotted border-2 border-slate-300 flex-1 gap-7 py-10 px-7">
          {menuData2.map((item2) => {
            return (
              <div key={item2.id} className="">
                <div
                  className="flex flex-col md:flex-row items-center gap-6 mb-4"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                >
                  <div className="avatar">
                    <div className="w-20 rounded-full">
                      <img src={item2.images} />
                    </div>
                  </div>

                  <div className="flex flex-col items-center md:items-start gap-1">
                    <h2 className="card-title">{item2.title}</h2>
                    <p className="text-base">{item2.description}</p>
                    <span className="">
                      ....................................................................
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SoftlyMenus;
