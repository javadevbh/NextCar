import { useRouter } from "next/router";
import styles from "./CarDetailsPage.module.css";
import BackButton from "../modules/BackButton";
import Company from "../icons/Company";
import Location from "../icons/Location";
import Model from "../icons/Model";
import Money from "../icons/Money";
import Road from "../icons/Road";
import Calender from "../icons/Calender";

function CarDetailsPage(props) {
  const { name, model, year, distance, location, image, price, description } =
    props;
  const router = useRouter();

  const backHandler = () => {
    router.back();
  };

  return (
    <div className={styles.container}>
      <BackButton backHandler={backHandler} />
      <img src={image} className={styles.image} />
      <h3 className={styles.header}>
        {name} {model}
      </h3>
      <div className={styles.details}>
        <div>
          <Company />
          <p>Company</p>
          <span>{name}</span>
        </div>
        <div>
          <Model />
          <p>Model</p>
          <span>{model}</span>
        </div>
        <div>
          <Calender />
          <p>First registration</p>
          <span>{year}</span>
        </div>
        <div>
          <Road />
          <p>kms driven</p>
          <span>{distance}</span>
        </div>
      </div>
      <div className={styles.details}>
        <div>
          <Location />
          <p>Location</p>
          <span>{location}</span>
        </div>
      </div>
      <div className={styles.details}>
        <p className={styles.descriptionTitle}>Extra Information</p>
        <p className={styles.descriptionText}>{description}</p>
      </div>
      <div className={styles.details}>
        <div className={styles.price}>
          <Money />
          <p>Price :</p>
          <span>${price}</span>
        </div>
      </div>
      <button className={styles.button}>Buy</button>
    </div>
  );
}

export default CarDetailsPage;
