import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { classList, toggleClass } from "../../../utils/classList";
import { calculateDiscountedPrice, formatPrice } from "../../../utils/numbers";
import { IconTruckDelivery } from "@tabler/icons-react";

const CardPresentational = ({ data, cardTitle }) => {
  const navigate = useNavigate();
  
  return (
    <div className={styles.cardContainer}>
      {cardTitle && <div className={styles.cardTitle}><h4>{cardTitle}</h4></div>}
      <div
        className={styles.imageContainer}
        onClick={() => navigate(`/product/${data.id}`)}
      >
        <img
          src={data.image_url}
          className={classList([styles.image, 'imgResponsive'])}
        />
      </div>
      <div className={styles.info}>
        <Link to={`/product/${data.id}`} className={styles.title}>
          {data.title}
        </Link>
        {!(data.discount || data.freeDelivery) && (
          <p className={styles.description}>{data.description}</p>
        )}
        <p className={toggleClass(data.discount, styles.textOriginalPrice, styles.textPrice)}>{formatPrice(data.price)}</p>
        {data.discount && (
          <p className={styles.textDiscountedPrice}>{formatPrice(calculateDiscountedPrice(data.price, data.discount))}</p>
        )}
        {data.freeDelivery && (
          <div className={styles.freeDelivery}>
            <span className={styles.textDelivery}>Envío Gratis</span>
            <IconTruckDelivery size={20}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardPresentational;
