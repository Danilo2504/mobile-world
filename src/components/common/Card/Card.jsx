import { useContext } from "react";
import CardPresentational from "./CardPresentational";
import { CartContext } from "../../../contexts/CartContext";

const Card = ({ data, cardTitle }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <CardPresentational
      data={data}
      addToCart={() => addToCart({ ...data, quantity: 1 })}
      cardTitle={cardTitle}
    />
  );
};

export default Card;
