import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import CartCard from "../../common/CartCard/CartCard";

const CartPresentational = ({ cart, clearCart, totalPrice }) => {
  return (
    <div className={styles.container}>
      {cart.length > 0 ? (
        <div className={styles.contentWrapper}>
          <div className={styles.cardsContainer}>
            {cart.map((product) => (
              <CartCard key={product.id} data={product} />
            ))}
          </div>
          <div className={styles.sideBar}>
            <p>Total: $ {totalPrice}</p>
            <Link
              to="/checkout"
              className={
                cart.length > 0 ? styles.linkActive : styles.linkDisabled
              }
            >
              Comprar todo
            </Link>
            <button onClick={clearCart}>Vaciar carrito</button>
          </div>
        </div>
      ) : (
        <div className={styles.emptyCart}>
          <h3 className={styles.text}>No hay productos</h3>
          <Link to="/">Volver al inicio</Link>
        </div>
      )}
    </div>
  );
};

export default CartPresentational;
