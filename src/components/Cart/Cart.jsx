 
import Modal from "../UI/Modal";

function Cart(props) {
  // eslint-disable-next-line react/prop-types
  const {cartIsShown,setCartIsShown } = props;
  const handleShowCart = (e)=>{
    e.preventDefault();
    setCartIsShown(cartIsShown)
  }
  const CartItems = [
    {
      id: "c1",
      name: "Sushi",
      amount: 2,
      price: 12.99,
    },
  ].map((item) => {
    return <li key={item?.id}>{item?.name}</li>;
  });

  return (
    <Modal>
      <ul className="list-none max-h-[20rem] overflow-auto">{CartItems}</ul>
      <div className="flex justify-between items-center font-bold text-2xl my-[1rem] mx-0">
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className="  flex justify-end items-center gap-5 font-mono">
        <button onClick={handleShowCart} className="btn border w-28 rounded-full h-10 border-orange-400 hover:bg-gray-100">
          Close
        </button>
        <button className="btn  w-28 text-white bg-orange-600  h-10 rounded-full hover:bg-orange-700">
          Order
        </button>
      </div>
    </Modal>
  );
}

export default Cart;
