import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import CarsList from "../../components/templates/CarsList";
import Notfound from "../../components/icons/Notfound";
import BackButton from "../../components/modules/BackButton";

function FilteredCards() {
  const router = useRouter();
  const [min, max] = router.query.slug || [];
  const filteredCars = carsData.filter(
    (car) => car.price >= min && car.price <= max
  );

  const backHandler = () => {
    router.back();
  };

  if (!filteredCars.length)
    return (
      <>
        <BackButton backHandler={backHandler} />
        <div style={{ textAlign: "center" }}>
          <Notfound />
          <h3>No items found!</h3>
        </div>
      </>
    );
  return (
    <div>
      <CarsList data={filteredCars} />
    </div>
  );
}

export default FilteredCards;
