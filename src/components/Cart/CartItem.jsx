// eslint-disable-next-line react/prop-types
const CartItem = ({item,onAdd,onRemove}) => {
 
  const {name,price,amount}  = {...item};
 
  return (
    <li className="flex justify-between items-center px-5 border-b-2 border-orange-300 p-4">
      <div className="grid grid-cols-2 gap-4 justify-between items-center">
        <h2 className="col-span-2">{name}</h2>
        <span className="text-orange-400 font-bold">${price}</span>
        <span className="border-2 border-orange-300 w-8 h-8 text-center"> x {amount}</span>
      </div>
      <div className="flex justify-between gap-3 items-center text-orange-500 font-bold">
        <button onClick={onRemove} className="w-7 h-7 border-2 border-orange-300">-</button>
        <button onClick={onAdd} className="w-7 h-7 border-2 border-orange-300">+</button>
      </div>
    </li>
  );
};

export default CartItem;
