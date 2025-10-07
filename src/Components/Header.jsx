import React from "react";
import { useCart } from "../hooks/useCart";

export const Header = () =>{
    const {cart} = useCart();
    return (
        <header
        className="bg-fuchsia-900 text-white p-4 flex justify-between items-center">
            <h1
            className="text-2xl font-bold">My Store</h1>
            <nav className=" flex items-center space-x-6">
            <ul className="inline-flex gap-2">
             <li className="text-primary">Home
             </li>
                 <li>Products</li>
                
                <input type="text" placeholder="  Search"/>
                <div className="relative">
                <button className="bg-white text-fuchsia-700 px4 py-2 rounded mt-2 hover:bg-fuchsia-800 ">Cart</button>
                {cart && cart.length >0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-2">
                        {cart.length}</span>
                )}
                 </div>
             </ul>
            
             {/* <button onClick=></button> */}
             </nav>

        </header>
       
       
    )
}
export default Header