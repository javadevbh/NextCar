import Card from "../modules/Card";
import BackButton from "../modules/BackButton";
import styles from "./CategoryPage.module.css";
import { useRouter } from "next/router";

function CategoryPage({ cars }) {
  const router = useRouter();

  const backHandler = () => {
    router.back();
  };

  return (
    <div>
      <BackButton backHandler={backHandler} />
      <div className={styles.CardsContainer}>
        {cars.map((car) => (
          <Card key={car.id} {...car} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
