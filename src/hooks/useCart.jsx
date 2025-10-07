import {  useContext } from "react";
import { CartContext } from "../Providers/CartProvider"; 

// export const CartContext = createContext([]);
export const useCart = () => useContext(CartContext);
 