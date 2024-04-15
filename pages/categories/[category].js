import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import CarsList from "../../components/templates/CarsList";
import BackButton from "../../components/modules/BackButton";

function Category() {
  const router = useRouter();
  const { category } = router.query;
  const filteredCars = carsData.filter((car) => car.category == category);

  const backHandler = () => {
    router.back();
  };

  return (
    <div>
      <BackButton backHandler={backHandler} />
      <CarsList data={filteredCars} />
    </div>
  );
}

export default Category;
