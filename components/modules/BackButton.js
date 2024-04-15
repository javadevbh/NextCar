import styles from "./BackButton.module.css";
import Back from "../icons/Back";

function BackButton({ backHandler }) {
  return (
    <div onClick={backHandler} className={styles.back}>
      <Back />
      <p>back</p>
    </div>
  );
}

export default BackButton;
