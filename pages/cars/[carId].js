import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import CarDetailsPage from "../../components/templates/CarDetailsPage";

function CarDetails() {
  const router = useRouter();
  const { carId } = router.query;

  const carDetails = carsData[carId - 1];

  return (
    <div>
      <CarDetailsPage {...carDetails} />
    </div>
  );
}

export default CarDetails;
