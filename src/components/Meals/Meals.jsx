 
import MealsSummary from "./MealsSummary"
import AvailableMeals from "./AvailableMeals"

function Meals() {
  return (
    <div className="text-white relative">
      <MealsSummary/>
      <AvailableMeals/>
    </div>
  )
}

export default Meals
