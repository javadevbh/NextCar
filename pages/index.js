import Link from "next/link";
import carsData from "../data/carsData";
import Categories from "../components/modules/Categories";
import SearchBar from "../components/modules/SearchBar";
import CarsList from "../components/templates/CarsList";
import AllButton from "../components/modules/AllButton";

export default function Home() {
  const data = carsData.slice(0, 3);

  return (
    <div>
      <SearchBar />
      <Categories />
      <AllButton/>
      <CarsList data={data} />
    </div>
  );
}
