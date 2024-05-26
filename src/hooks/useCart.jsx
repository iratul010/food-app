import { useContext } from "react";
import { CartContext } from "../store/CartProvider";

const useCart = () => {
  const cart = useContext(CartContext);
  return cart;
};

export default useCart;
