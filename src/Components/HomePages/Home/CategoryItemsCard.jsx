const CategoryItemsCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="card lg:card-side bg-base-100 shadow-xl pt-4 px-3">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Album"
            className="rounded-lg"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Phone Name</h2>
          <p>Phones details ....</p>
          <h3>Price: </h3>
          <div className="card-actions justify-evenly">
            <button className="btn btn-primary">View Details</button>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="card lg:card-side bg-base-100 shadow-xl pt-4 px-3">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Album"
            className="rounded-lg"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Phone Name</h2>
          <p>Phones details ....</p>
          <h3>Price: </h3>
          <div className="card-actions justify-evenly">
            <button className="btn btn-primary">View Details</button>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryItemsCard;
