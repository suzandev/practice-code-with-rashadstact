import Swal from "sweetalert2";

const AddProducts = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const price = form.price.value;
    const brandName = form.brandName.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const shortDescription = form.shortDescription.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      price,
      brandName,
      taste,
      category,
      shortDescription,
      photo,
    };
    console.log(newCoffee);

    // send data to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "User Added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h3 className="text-3xl font-extrabold">Add a Coffee</h3>

      <form onSubmit={handleAddProduct}>
        {/* name and price  */}
        <div className="md:flex gap-4 mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-purple-600 font-semibold">
                Name
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-purple-600 font-semibold">
                Price
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                placeholder="Available price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* brandName row  */}
        <div className="md:flex gap-4 mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-purple-600 font-semibold">
                Brand Name
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="brandName"
                placeholder="Brand Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-purple-600 font-semibold">
                Taste
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="taste"
                placeholder="Taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* Category and shortDescription  */}
        <div className="md:flex gap-4 mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-purple-600 font-semibold">
                Category
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder="Category Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-purple-600 font-semibold">
                Short Description
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="shortDescription"
                placeholder="short Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* Photo url  */}
        <div className="mb-8">
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-purple-600 font-semibold">
                Photo URL
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <input
          type="submit"
          value="Add Coffee"
          className="btn btn-block bg-slate-300"
        />
      </form>
    </div>
  );
};

export default AddProducts;
