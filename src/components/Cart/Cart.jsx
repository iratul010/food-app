 
import useCart from "../../hooks/useCart";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

function Cart(props) {
  const {addItemToCartHandler,removeItemToCartHandler} = useCart();
  // eslint-disable-next-line react/prop-types
  const {cartIsShown,setCartIsShown } = props;
  const {items,totalAmount} = useCart();
  const hasItems = items.length>0;
  const handleShowCart = (e)=>{
    e.preventDefault();
    setCartIsShown(cartIsShown)
  }
 const cartItemRemove = (id)=>{
  removeItemToCartHandler(id);
 }
const cartItemAdd  =(item)=>{
  addItemToCartHandler({...item,amount:1})
}
  return (
    <Modal>
      <ul className="list-none max-h-[20rem] overflow-auto">{items.map(item=> <CartItem key={item.id} item={item} onRemove={cartItemRemove.bind(null, item.id)} onAdd={cartItemAdd.bind(null,item)}/>)}</ul>
      <div className="flex justify-between items-center font-bold text-2xl my-[1rem] mx-0">
        <span>Total Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <div className="  flex justify-end items-center gap-5 font-mono">
        <button onClick={handleShowCart} className="btn border w-28 rounded-full h-10 border-orange-400 hover:bg-gray-100">
          Close
        </button>
        {hasItems && <button className="btn  w-28 text-white bg-orange-600  h-10 rounded-full hover:bg-orange-700">
          Order
        </button>}
      </div>
    </Modal>
  );
}

export default Cart;
