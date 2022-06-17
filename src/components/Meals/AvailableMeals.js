import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Acarajé com camarão",
    description: "Vatapá, caruru, camarão, salada e pimenta",
    price: 12.99,
  },
  {
    id: "m2",
    name: "Acarajé com camarão e bacalhau",
    description: "Vatapá, caruru, camarão, bacalhau, salada e pimenta",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Acarajé sem camarão",
    description: "Vatapá, caruru, salada e pimenta",
    price: 10.00,
  },
  {
    id: "m4",
    name: "Barca média",
    description: "9 bolinhos, caruru, vatapá, camarão e salada.",
    price: 39.99,
  }
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
