import { Card, ProductCard } from "../../common";
import styles from "./styles.module.css";

const HomePresentational = ({ data }) => {
  return (
    <main className={styles.home}>
      <section className={styles.banner}>
        <ProductCard data={data.at(16)} cardTitle="Oferta del dia"/>
        <Card headerTitle={"Te puede interesar"} separator="HEADER">
          <div className={styles.cardGrid}>
            {data.slice(0, 3).map((item, index) => {
              return (
                <ProductCard key={index} data={item} noCardWrapper />
              );
            })}
          </div>
        </Card>
      </section>
    </main>
  );
};

export default HomePresentational;
