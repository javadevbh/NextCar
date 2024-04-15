import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import CategoryPage from "../../components/templates/CategoryPage";

function Category() {
  const router = useRouter();
  const { category } = router.query;
  const cars = carsData.filter((car) => car.category == category);

  return (
    <div>
      <CategoryPage cars={cars} />
    </div>
  );
}

export default Category;
