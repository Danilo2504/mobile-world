import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { IconShoppingCart } from "@tabler/icons-react";
import { classList } from "../../../utils/classList";

const CartButtonPresentational = ({ cartCount }) => {
  return (
    <Link to={"/cart"} className={classList(["buttonPrimary", styles.cartButton])}>
      <IconShoppingCart size={20}/>
      <span>{cartCount}</span>
    </Link>
  );
};

export default CartButtonPresentational;
