import { createContext, useReducer } from "react";

export const CartContext = createContext(null);

// eslint-disable-next-line react/prop-types
const CartProvider = ({ children }) => {
  const defaultCartState = {
    items: [],
    totalAmount: 0,
  };
  const cartReducer = (state, action) => {
    if (action.type === "ADD") {
      const updateTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];

      let updatedItems;
      if (existingCartItem) {
       const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }
      return {
        items: updatedItems,
        totalAmount: updateTotalAmount,
      };
    }
   else if(action.type==='REMOVE'){
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount- existingCartItem.price;
    let updatedItems;
     if(existingCartItem.amount ===1){
      updatedItems = state.items.filter(item=>item.id !== action.id )
     }else{
       const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1};
         updatedItems = [...state.items];
         updatedItems[existingCartItemIndex] = updatedItem

     }
     return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
     }
       
   }
    return defaultCartState;
  };
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);
  const items = cartState.items;

  const totalAmount = cartState.totalAmount;
  const addItemToCartHandler = (item) => {
    console.log(item)
    dispatchCart({ type: "ADD", item: item });
  };
  const removeItemToCartHandler = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };
  const cartInfo = {
    items,
    totalAmount,
    addItemToCartHandler,
    removeItemToCartHandler,
  };
  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
