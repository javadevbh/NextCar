import { useState } from "react";
import { useRouter } from "next/router";
import notify from "../../helpers/toastify";
import styles from "./SearchBar.module.css";

function SearchBar() {
  const [filter, setFilter] = useState({ min: "", max: "" });
  const router = useRouter();

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFilter({ ...filter, [name]: value });
  };

  const searchHandler = () => {
    if (filter.min && filter.max) {
      router.push(`/filter/${filter.min}/${filter.max}`);
    } else {
      notify("warn" , "Please enter min and max price!")
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <input
          type="number"
          name="min"
          placeholder="Inter min-price"
          value={filter.min}
          onChange={changeHandler}
        />
        <input
          type="number"
          name="max"
          placeholder="Inter max-price"
          value={filter.max}
          onChange={changeHandler}
        />
      </div>
      <button onClick={searchHandler}>Search</button>
    </div>
  );
}

export default SearchBar;
