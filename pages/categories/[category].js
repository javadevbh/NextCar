import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import CarsList from "../../components/templates/CarsList";

function Category() {
  const router = useRouter();
  const { category } = router.query;
  const filteredCars = carsData.filter((car) => car.category == category);

  return (
    <div>
      <CarsList data={filteredCars} />
    </div>
  );
}

export default Category;
