const BeverageCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 px-2 py-8">
      <div
        className="card shadow-xl"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <figure className="px-10 pt-10">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmvq4EK9g7V6BptzB-48UR2fLX0lS9OJ5GDMtK4Kae20QYB99fxGA_O36eUglMUoYlI7Q&usqp=CAU"
            alt="Shoes"
            className="rounded-xl "
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Coca-Cola</h2>
          <p>The Real Thing: Coca-Colas Authentic Taste</p>
        </div>
      </div>
      <div
        className="card shadow-xl"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <figure className="px-10 pt-10">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/1280px-McDonald%27s_logo.svg.png"
            alt="McDonald's"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{`McDonald's`}</h2>
          <p>Happy Meal Adventures: McDonald for Everyone</p>
        </div>
      </div>
      <div
        className="card shadow-xl"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <figure className="px-10 pt-10">
          <img
            src="https://imageio.forbes.com/blogs-images/ronaldholden/files/2017/03/Desktop30-1200x720.jpg?height=426&width=711&fit=bounds"
            alt="Starbucks"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Starbucks</h2>
          <p>Starbucks Serenity: Finding Calm in Every Cup</p>
        </div>
      </div>
      <div
        className="card shadow-xl"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <figure className="px-10 pt-10">
          <img
            src="https://media.licdn.com/dms/image/D4D12AQHF1aAxiHmLyA/article-cover_image-shrink_600_2000/0/1687336481003?e=2147483647&v=beta&t=KjVmnazvlxAToqbDOu6qWJaoh-kP7N-48RnzD_7a7WM"
            alt="PepsiCo"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">PepsiCo</h2>
          <p>The Real Thing: Coca-Colas Authentic Taste</p>
        </div>
      </div>
      <div
        className="card shadow-xl"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <figure className="px-10 pt-10">
          <img
            src="https://www.groupcaliber.com/wp-content/uploads/2022/08/nestle_case_study_logo_feaure_image.png"
            alt="Nestlé"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Coca-Cola</h2>
          <p>The Real Thing: Coca-Colas Authentic Taste</p>
        </div>
      </div>
      <div
        className="card shadow-xl"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <figure className="px-10 pt-10">
          <img
            src="https://image.cnbcfm.com/api/v1/image/105766877-1551359606790kel15up_after.jpg?v=1551359701&w=720&h=405"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{`Kellogg's`}</h2>
          <p>
            Morning Delight: Embrace a Nutritious Start with {`Kellogg's`}{" "}
            Cereals
          </p>
        </div>
      </div>
    </div>
  );
};

export default BeverageCard;
