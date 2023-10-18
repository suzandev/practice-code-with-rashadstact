import { useContext, useState } from "react";
import MyAllCart from "./MyAllCart";
import { CardContext } from "../CardContext/CardContext";

const MyCart = () => {
  const { CardData } = useContext(CardContext);

  const [seeAll, setSeeAll] = useState(false);

  const data = seeAll ? CardData : CardData.slice(0, 4);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((cartData) => (
          <MyAllCart key={cartData.id} cartData={cartData} />
        ))}
      </div>

      {CardData.length > 4 && (
        <div className="flex justify-center w-full py-10">
          <button
            onClick={() => setSeeAll(!seeAll)}
            className="flex select-none items-center rounded-lg py-3 px-6 text-center align-middle text-xs font-bold uppercase bg-green-600 text-white"
            type="button"
          >
            {seeAll ? "See Less" : "See All"}
          </button>
        </div>
      )}
    </>
  );
};

export default MyCart;
