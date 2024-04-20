import { Link, useNavigate } from "react-router-dom";
import Cart from "../../../assets/cart.svg?react";
import styles from "./styles.module.css";

const CardPresentational = ({ data, addToCart }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.cardContainer}>
      <div
        className={styles.imageContainer}
        onClick={() => navigate(`/product/${data.id}`)}
      >
        <img
          src={data.image_url}
          height={150}
          width={150}
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <Link to={`/product/${data.id}`} className={styles.textModel}>
          {data.model}
        </Link>
        <p className={styles.textInfo}>
          {data.brand} - {data.year}
        </p>
        <p className={styles.textPrice}>USD${data.price}</p>
        <button className={styles.buttonCart} onClick={addToCart}>
          <Cart />
          <span>Añadir al carrito</span>
        </button>
      </div>
    </div>
  );
};

export default CardPresentational;
