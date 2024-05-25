// eslint-disable-next-line react/prop-types
function MealItem({ data }) {
  const { id,name, description, price } = { ...data };
 
 
  return (
    <div className="flex flex-row justify-between items-center bg-slate-50 text-black p-8 border-b-2">
      <div className="flex flex-col justify-center items-center gap-1">
        <h2 className="text-2xl text-slate-800 font-bold">{name}</h2>
        <p className="font-mono italic">{description}</p>
        <p className="text-orange-500 text-xl font-bold">${price}</p>
      </div>
      <form className="grid grid-cols-2 gap-3 p-2 h-28  justify-center items-center ">
        <label htmlFor={id} label="Amount" className="font-bold text-slate-600 font-sans ">Amount</label>
        <input
        id={id} min='1' max='5'
          type="number" step='1'
          defaultValue="1"
          className="w-16   border border-gray-300 rounded-md px-3 py-1 text-center"
        />
        <button className="col-span-2 h-10 rounded-full bg-red-500 text-white hover:bg-red-400 font-bold text-xl">
          +Add
        </button>
      </form>
    </div>
  );
}

export default MealItem;
