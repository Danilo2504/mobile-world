import { Link } from "react-router-dom";
import ArrowLeft from "../../../assets/arrow-left.svg?react";
import styles from "./styles.module.css";

const ProductDetailPresentational = ({
  sumar,
  restar,
  addToCart,
  product,
  counter,
}) => {
  return (
    <div className={styles.productContainer}>
      <div className={styles.leftCol}>
        <img src={product?.image_url} height={600} className={styles.image} />
      </div>
      <div className={styles.rightCol}>
        <Link to={"/"} className={styles.goBackButton}>
          <ArrowLeft />
          <p>Volver</p>
        </Link>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
            marginTop: 30,
          }}
        >
          <div>
            <p style={{ fontSize: 12, color: "#5d5d5d" }}>
              PRODUCTS {">"} {product?.category?.toUpperCase()}
            </p>
            <p
              style={{
                fontSize: 22,
                fontFamily: "FF Mark Pro Medium",
                marginTop: 30,
                marginBottom: 30,
              }}
            >
              {product?.brand} {product?.model}
            </p>
            <section
              style={{
                fontFamily: "FF Mark Pro",
                fontSize: 14,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <p>Fecha de lanzamiento: {product?.year}</p>
              <p>Color: {product?.color}</p>
              <p>Stock: {product?.stock}</p>
            </section>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 25 }}>
            <p style={{ fontSize: 18 }}>USD${product?.price}</p>
            <div className={styles.counterContainer}>
              <button onClick={sumar} className={styles.button}>
                +
              </button>
              <div className={styles.text}>{counter}</div>
              <button onClick={restar} className={styles.button}>
                -
              </button>
            </div>
            <div style={{ display: "flex", gap: 25 }}>
              <button
                onClick={() => addToCart({ ...product, quantity: counter })}
              >
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPresentational;
