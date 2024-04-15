import { useRouter } from "next/router";
import styles from "./CarsList.module.css";
import Card from "../modules/Card";
import BackButton from "../modules/BackButton";

function CategoryPage({ data }) {
  const router = useRouter();

  const backHandler = () => {
    router.back();
  };

  return (
    <div>
      <BackButton backHandler={backHandler} />
      <div className={styles.CardsContainer}>
        {data.map((car) => (
          <Card key={car.id} {...car} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
