import Card from "../UI/Card";
import MealItem from "./MealItem";

 

function AvailableMeals() {
  // eslint-disable-next-line no-unused-vars
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];

  const mealList = DUMMY_MEALS.map((list) => {
   return <MealItem key={list.id} data={list}/>;
  });
  return (
    <section className=" w-[50%] min-w-[800px] h-[350px] overflow-auto mt-[50px] m-auto  text-center rounded-2xl">
     <Card>
   {  <ul className="flex flex-col">{mealList}</ul>}
     </Card>
    </section>
  );
}

export default AvailableMeals;
