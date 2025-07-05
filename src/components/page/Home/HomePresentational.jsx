import { Card } from "../../common";
import styles from "./styles.module.css";

const HomePresentational = ({ data }) => {
  return (
    <>
      <main className={styles.cardsGrid}>
        {data?.slice(0,10).map((product, index) => (
          <Card key={index} data={product} cardTitle="Oferta del dia"/>
        ))}
      </main>
    </>
  );
};

export default HomePresentational;
