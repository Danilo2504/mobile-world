import { useContext, useState } from "react";
import { CartContext } from "../../../contexts/CartContext";
import CartCardPresentational from "./CartCardPresentational";

const CartCard = ({ data }) => {
  const { editProduct, removeProduct } = useContext(CartContext);
  const [subTotal, setSubTotal] = useState(data.price * data.quantity);

  const sumar = () => {
    if (data.stock > data.quantity) {
      editProduct(data, ["quantity", data.quantity + 1]);
      setSubTotal((prevState) => prevState + data.price);
    }
  };

  const restar = () => {
    if (data.quantity > 1) {
      editProduct(data, ["quantity", data.quantity - 1]);
      setSubTotal((prevState) => prevState - data.price);
    }
  };

  const handleRemove = () => {
    removeProduct(data);
    setSubTotal((prevState) => prevState - data.price * data.quantity);
  };

  return (
    <CartCardPresentational
      data={data}
      sumar={sumar}
      restar={restar}
      subTotal={subTotal}
      handleRemove={handleRemove}
    />
  );
};

export default CartCard;
