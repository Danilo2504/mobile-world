import { useContext, useState } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { buyProducts } from "../../../services/buyProduct";
import { useForm } from "../../../hooks/useForm";
import CheckoutPresentational from "./CheckoutPresentational";

const initialValues = {
  name: "",
  surname: "",
  email: "",
};

const toValidate = ["name", "surname", "email"];

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();
  const { values, handleOnChange, validateValues } = useForm(initialValues);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateValues(toValidate) && cart.length > 0) {
      const orderPayload = {
        buyer: values,
        items: cart,
        totalPrice,
      };

      const response = await buyProducts(orderPayload);
      setOrderId(response);
      clearCart();
    }
  };

  return (
    <CheckoutPresentational
      handleSubmit={handleSubmit}
      handleOnChange={handleOnChange}
      totalPrice={totalPrice}
      navigate={navigate}
      orderId={orderId}
      values={values}
    />
  );
};

export default Checkout;
