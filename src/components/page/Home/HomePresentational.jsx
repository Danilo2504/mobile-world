import { Card } from "../../common";
import styles from "./styles.module.css";

const HomePresentational = ({ data }) => {
  return (
    <main className={styles.cardsGrid}>
      {data?.map((product, index) => (
        <Card key={index} data={product} />
      ))}
    </main>
  );
};

export default HomePresentational;
