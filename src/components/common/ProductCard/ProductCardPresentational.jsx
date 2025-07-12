import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { classList, toggleClass } from "../../../utils/classList";
import { calculateDiscountedPrice, formatPrice } from "../../../utils/numbers";
import { IconTruckDelivery } from "@tabler/icons-react";
import Card from "../Card/Card";

const ProductCardPresentational = ({ data, cardTitle, noCardWrapper }) => {
  const content = (
    <div className={styles.cardInnerContainer}>
      <Link
        className={styles.imageContainer}
        to={`/product/${data.id}`}
      >
        <img
          src={data.image_url}
          className={classList([styles.image, 'imgResponsive'])}
        />
      </Link>
      <div className={styles.info}>
        <h4 className={styles.title}>
          {data.title}
        </h4>
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

  if (noCardWrapper) {
    return content;
  }
  
  return (
    <Card headerTitle={cardTitle}>
      {content}
    </Card>
  );
};

export default ProductCardPresentational;
