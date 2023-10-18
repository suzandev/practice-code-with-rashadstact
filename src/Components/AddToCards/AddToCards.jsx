import { PropTypes } from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CardContext } from "../Routes/CardContext/CardContext";

export default function AddToCards({ card }) {
  const { addToCard } = useContext(CardContext);
  const { category, picture, title, card_bg, text_button_bg } = card;

  return (
    <Link
      onClick={() => addToCard(card)}
      to={"/myCart"}
      data-aos="zoom-in"
      data-aos-duration="1500"
    >
      <div
        style={{ backgroundColor: card_bg }}
        className="flex flex-col rounded-xl"
      >
        <div className="overflow-hidden ">
          <img
            className="object-cover h-64 w-full"
            src={picture}
            alt="img-blur-shadow"
          />
        </div>
        <div className="px-4 py-10">
          <h5
            style={{ backgroundColor: card_bg, color: text_button_bg }}
            className="mb-2 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased w-fit px-4 py-1 rounded-md"
          >
            {category}
          </h5>
          <h2
            style={{ color: text_button_bg }}
            className="block text-xl font-semibold leading-relaxed text-inherit antialiased"
          >
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
}

AddToCards.propTypes = {
  card: PropTypes.object,
};
