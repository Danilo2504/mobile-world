import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import CartPresentational from "./CartPresentational";

const Cart = () => {
  const { cart, clearCart, totalPrice } = useContext(CartContext);

  return (
    <CartPresentational
      cart={cart}
      clearCart={clearCart}
      totalPrice={totalPrice}
    />
  );
};

export default Cart;
