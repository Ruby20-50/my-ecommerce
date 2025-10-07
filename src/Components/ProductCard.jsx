import {  useCart } from "../hooks/useCart";

// import React, { useContext } from "react";

const ProductCard = ({data}) =>{
   const {cart, setCart} = useCart();
  // let value  = useContext(CartContext);
  const handleClick = ()=> {
   setCart({id:2, name: 'New Item'})
  }

return(
           <div key={data.id} className="bg-white p-4 shadow-lg shadow-fuchsia-950
         text-black m-5 rounded-xl  ">
                        <img src={data.images[0]}  alt={data.title} className="inline-flex items-center 
                       justify-center rounded-xl  
                       shadow-fuchsia-300 shadow-xs w-40" />
                        <h3 className="mt-3">{data.title}</h3>
                        <p className="mb-3">{data.price}$</p>
                        <button className="bg-fuchsia-400 text-white m-3"
                        onClick={handleClick()} 
                        >Add to Cart</button>
                    </div>
)
}
export default ProductCard;
