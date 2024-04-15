import carsData from "../../data/carsData";
import CarsPage from "../../components/templates/CarsPage";
import Categories from "../../components/modules/Categories";
import SearchBar from "../../components/modules/SearchBar";

function Cars() {
  return (
    <div>
      <SearchBar/>
      <Categories/>
      <CarsPage data={carsData} />
    </div>
  );
}

export default Cars;
