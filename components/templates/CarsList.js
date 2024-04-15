import styles from "./CarsList.module.css";
import Card from "../modules/Card";

function CarsList({ data }) {
  return (
    <div className={styles.CardsContainer}>
      {data.map((car) => (
        <Card key={car.id} {...car} />
      ))}
    </div>
  );
}

export default CarsList;
