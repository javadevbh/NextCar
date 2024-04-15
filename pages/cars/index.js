import carsData from "../../data/carsData";
import CarsPage from "../../components/templates/CarsPage";
import Categories from "../../components/modules/Categories";

function Cars() {
  return (
    <div>
      <Categories/>
      <CarsPage data={carsData} />
    </div>
  );
}

export default Cars;
