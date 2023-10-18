import { PropTypes } from "prop-types";
import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CardContext = createContext();

export default function CardContextProvider({ children }) {
  const [CardData, setCardData] = useState([]);

  function addToCard(data) {
    const isExits = CardData.find((d) => d.id === data.id);
    if (isExits) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "you already Added!",
      });
      return;
    }
    setCardData((p) => [...p, data]);
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Your added Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  const removeFormCard = (id) => {
    setCardData((p) => p.filter((d) => d.id !== id));
  };
  return (
    <CardContext.Provider value={{ CardData, addToCard, removeFormCard }}>
      {children}
    </CardContext.Provider>
  );
}

CardContextProvider.propTypes = {
  children: PropTypes.node,
};
