const MenuMarque = () => {
  const imageMenu = [
    {
      id: 1,
      markImage:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/Coca_Cola_Marketing_Strategy_2022.jpg",
    },
    {
      id: 2,
      markImage:
        "https://www.shutterstock.com/shutterstock/photos/2271021211/display_1500/stock-vector-coca-cola-energy-summer-element-template-sign-icon-symbol-red-white-isolated-illustration-2271021211.jpg",
    },
    {
      id: 3,
      markImage:
        "https://t4.ftcdn.net/jpg/02/84/65/61/360_F_284656175_G6SlGTBVl4pg8oXh6jr86cOmKUZjfrym.jpg",
    },
    {
      id: 4,
      markImage:
        "https://chaldn.com/_mpimage/pepsi-free-pepsi-250-ml-2-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D137172&q=best&v=1",
    },
    {
      id: 5,
      markImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png",
    },
    {
      id: 6,
      markImage:
        "https://media.gettyimages.com/id/458546943/photo/close-up-mcdonalds-outdoor-sign-against-blue-sky.jpg?s=612x612&w=gi&k=20&c=3aCe9pS0aaFC4L-EmLbPnI0aunDl_yq8vP_UI4oXJLg=",
    },
    {
      id: 7,
      markImage:
        "https://wallpapers.com/images/hd/starbucks-pictures-q3r2gukezl5tqwdu.jpg",
    },
    {
      id: 8,
      markImage:
        "https://i.guim.co.uk/img/media/d4e1ff1c19acb83b8cddd9752c91071cca4eeb57/0_74_6000_3600/master/6000.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=ad9732bc988a2227c5ec6334f67358ae",
    },
    {
      id: 9,
      markImage:
        "https://media.gettyimages.com/id/456898038/photo/a-logo-of-the-worlds-leading-food-industry-group-nestle-is-seen-on-october-9-2014-at-the.jpg?s=612x612&w=gi&k=20&c=TdpZTdSBlraqpaYKphMkMqkO2OFC6HiNu8q8MxH6Dfg=",
    },
    {
      id: 10,
      markImage:
        "https://logowik.com/content/uploads/images/nestle7563.logowik.com.webp",
    },
  ];

  return (
    <>
      <div className="flex gap-4 pt-20">
        {imageMenu.map((item) => {
          return (
            <div key={item.id} className="">
              <figure>
                <img src={item.markImage} className="w-56 h-52 object-cover" />
              </figure>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MenuMarque;
