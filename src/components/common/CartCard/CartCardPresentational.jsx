import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const CartCardPresentational = ({
  data,
  sumar,
  restar,
  subTotal,
  handleRemove,
}) => {
  return (
    <div className={styles.container}>
      <img src={data.image_url} className={styles.image} />
      <div className={styles.titleContainer}>
        <Link to={`/product/${data.id}`} className={styles.title}>
          {data.model}
        </Link>
        <p className={styles.subtitle}>{`${data.brand} - ${data.year}`}</p>
      </div>
      <div className={styles.counterContainer}>
        <button onClick={sumar} className={styles.button}>
          +
        </button>
        <div className={styles.text}>{data.quantity}</div>
        <button onClick={restar} className={styles.button}>
          -
        </button>
      </div>
      <p className={styles.info}>{`Stock: ${data.stock}`}</p>
      <div className={styles.feature}>
        <p className={styles.info}>{`$ ${subTotal}`}</p>
        <button onClick={handleRemove}>Quitar Producto</button>
      </div>
    </div>
  );
};

export default CartCardPresentational;
