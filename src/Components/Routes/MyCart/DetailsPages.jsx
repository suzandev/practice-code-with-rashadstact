import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CardContext } from "../CardContext/CardContext";

export default function DetailsPages() {
  const { CardData } = useContext(CardContext);
  const { id } = useParams();
  const data = CardData.find((d) => d.id == id);

  const { picture, category, price, title, description } = data || {};

  return (
    <div>
      <div className="card card-compact mt-10">
        <div className="relative rounded-md overflow-hidden">
          <figure>
            <img
              className="max-h-[700px] w-full object-cover"
              src={picture}
              alt={category}
            />
          </figure>

          <div className="card-actions w-full bg-[#0B0B0B80] px-6 py-8 absolute bottom-0 rounded-md">
            <button className="bg-[#FF444A] text-white px-4 py-3 rounded-md">
              Buy Now {price}
            </button>
          </div>
        </div>
        <div className="card-body mt-5 md:mt-12">
          <h2 className="card-title font-bold text-[#0B0B0B] text-xl md:text-5xl">
            {title}{" "}
          </h2>
          <p className="text-[#0B0B0BB2] text-base mt-3 mb-14 md:mt-5">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
