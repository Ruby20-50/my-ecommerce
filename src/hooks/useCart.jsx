import {  useContext } from "react";
import { CartContext } from "../providers/CartProvider"; 

// export const CartContext = createContext([]);
export const useCart = () => useContext(CartContext);
