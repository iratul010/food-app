import img from "../assets/meals.jpg";
import Meals from "../components/Meals/Meals";
 
function Home() {
  return (
    <div className="h-[94vh] flex flex-col bg-zinc-800">
      <div className="h-[50vh]  bg-white " style={{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 65%, 0% 100%)",
      }}>
    <img
      
      src= {img}
      alt="Example Image"
      className="w-full h-full object-cover"
    />
  </div>
      <Meals  />
    </div>
  );
}

export default Home;
