import { useEffect, useState } from "react";
import useCart from "../../hooks/useCart";

function HeaderCartButton(props) {
  const {items} = useCart();
  const [ showBtnClass,setShowBtnClass] = useState(false);
 
 const numberOfCartItems = items.reduce((cur,item)=>{
  return cur + Number(item.amount);
 },0)
  const handleShowCart = (e) => {
   
    e.preventDefault();
    // eslint-disable-next-line react/prop-types
    props.setCartIsShown(!false);

   

  };

 const btnClass = 'btn bg-slate-900 w-60 h-10 bg-opacity-50 rounded-full p-4 flex flex-row items-center justify-evenly hover:bg-opacity-60   transition-all duration-300'
   // eslint-disable-next-line no-undef
   const  btnAllClass = `${btnClass} ${showBtnClass?  'bump' : ''}`
useEffect(()=>{
  if(items.length===0){
    return;

  }else{
    
   setShowBtnClass(true)
  }
  const timer =setTimeout(() => {
    setShowBtnClass(false);
  }, 300);
  return ()=>{
    clearTimeout(timer)
  }
},[items])
  return (
    <button
      onClick={handleShowCart}
      className={btnAllClass}
    >
      <span className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </span>
      <span>Your Cart</span>
      <span className="rounded-full text-center bg-red-600 bg-opacity-90 w-7 h-7">
        {numberOfCartItems}
      </span>
    </button>
  );
}

export default HeaderCartButton;
