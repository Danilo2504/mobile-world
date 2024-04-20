import styles from "./styles.module.css";
import Cart from "../../../assets/cart.svg?react";
import { Link } from "react-router-dom";

const CartButtonPresentational = ({ cartCount }) => {
  return (
    <div className={styles.container}>
      <Link to={"/cart"} className={styles.cartButton}>
        <Cart className={styles.cartIcon} />
        <span>{cartCount}</span>
      </Link>
    </div>
  );
};

export default CartButtonPresentational;
