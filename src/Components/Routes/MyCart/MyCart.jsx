import CartTable from "./CartTable";
import Checkout from "./Checkout";

const MyCart = () => {
  return (
    <div className="bg-gradient-to-tl from-white via-white to-[#fae9e6] py-10">
      <div className="bg-transparent shadow-md px-10 py-6 max-w-5xl mx-auto rounded-md">
        <div className="py-4 mx-5 border-b-4 border-black w-32 mb-10">
          <h2 className="text-2xl font-bold">My Cart</h2>
        </div>
        <div>
          <CartTable />
          <Checkout />
        </div>
      </div>
    </div>
  );
};

export default MyCart;
