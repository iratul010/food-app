import { createContext } from "react";

export const CartContext = createContext(null);

// eslint-disable-next-line react/prop-types
const CartProvider = ({ children }) => {
  const items = [];
  const totalAmount = (id) => {};
  const addItem = (id) => {};
  const removeItem = (item) => {};
  const cartInfo = { items, totalAmount, addItem, removeItem };
  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
