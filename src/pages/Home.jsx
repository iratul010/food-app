import img from "../assets/meals.jpg";
function Home() {
  return (
    <div className="w-full h-[70vh]  ">
      <img style={{
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 0% 100%)'
                }} src={img} alt="" className="w-[100%] h-[100%] object-cover" />
    </div>
  );
}

export default Home;
