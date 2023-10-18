import { PropTypes } from "prop-types";
import { CardContext } from "../CardContext/CardContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function MyAllCart({ cartData }) {
  const { removeFormCard } = useContext(CardContext);
  const {
    category,
    picture,
    title,
    category_bg,
    card_bg,
    text_button_bg,
    price,
    id,
  } = cartData;

  return (
    <div
      style={{ backgroundColor: card_bg }}
      className="flex flex-col w-full md:flex-row rounded-xl bg-clip-border text-gray-700 shadow-md"
    >
      <div className=" md:w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
        <img src={picture} alt="image" className="h-full w-full object-cover" />
      </div>
      <div className="p-6">
        <h6
          style={{ color: text_button_bg, backgroundColor: card_bg }}
          className="mb-4 block text-base font-semibold uppercase leading-relaxed tracking-normal antialiased w-fit px-4 py-1 rounded-md"
        >
          {category}
        </h6>
        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {title}
        </h4>
        <p
          style={{ color: text_button_bg }}
          className="mb-8 block text-base font-bold leading-relaxed antialiased"
        >
          {price}
        </p>
        <div className="flex justify-between flex-wrap gap-4">
          <Link
            to={`/detailsPages/${id}`}
            style={{ color: "white", backgroundColor: category_bg }}
            className="w-full flex select-none items-center rounded-lg py-3 px-6 text-center align-middle text-xs font-bold uppercase "
            type="button"
          >
            View Details
          </Link>

          <button
            onClick={() => removeFormCard(id)}
            className="w-full flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase bg-red-600 text-white "
            type="button"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

MyAllCart.propTypes = {
  cartData: PropTypes.object,
};
