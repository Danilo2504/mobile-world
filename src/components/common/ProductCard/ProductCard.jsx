import { useContext } from "react";
import ProductCardPresentational from "./ProductCardPresentational";
import { CartContext } from "../../../contexts/CartContext";

const ProductCard = ({ data, cardTitle, noCardWrapper=false }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <ProductCardPresentational
      data={data}
      addToCart={() => addToCart({ ...data, quantity: 1 })}
      cardTitle={cardTitle}
      noCardWrapper={noCardWrapper}
    />
  );
};

export default ProductCard
