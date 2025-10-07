import { createContext, useState } from "react";


export const CartContext = createContext();
export function CartProvider ({children}) {
    const[cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);//this line is ambiguous for me
        
    };
    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item)=> item.id !== productId))
    }
    return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
