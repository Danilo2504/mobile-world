import { Link, useParams } from "react-router-dom";
import { Loading } from "../../layout";
import ArrowLeft from "../../../assets/arrow-left.svg?react";
import styles from "./styles.module.css";
import { getProductById } from "../../../services/getProductById";
import { useFetch } from "../../../hooks/useFetch";
import { CartContext } from "../../../contexts/CartContext";
import { useContext, useState } from "react";
import ProductDetailPresentational from "./ProductDetailPresentational";

const ProductDetail = () => {
  const { productId } = useParams();
  const { data: product, isLoading } = useFetch(getProductById, productId);
  const { addToCart } = useContext(CartContext);
  const [counter, setCounter] = useState(1);

  const sumar = () => {
    if (counter < product.stock) {
      setCounter((prevState) => prevState + 1);
    }
  };

  const restar = () => {
    if (counter > 1) {
      setCounter((prevState) => prevState - 1);
    }
  };

  if (isLoading) return <Loading />;
  return (
    <ProductDetailPresentational
      sumar={sumar}
      restar={restar}
      addToCart={addToCart}
      product={product}
      counter={counter}
    />
  );
};

export default ProductDetail;
