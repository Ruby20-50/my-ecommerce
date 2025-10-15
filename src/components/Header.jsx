import { useCart } from "../hooks/useCart";
import { Link } from "react-router-dom";

export const Header = () =>{
    const {cart} = useCart();
    return (
        <header
        className="bg-fuchsia-900 text-white p-4 flex justify-between items-center">
            <h1
            className="text-xl font-bold">My Store</h1>
            <nav className="max-w-screen-xl mx-auto flex justify-between items-center">
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          <li><Link to="/products" className="hover:underline">Products</Link></li>
        </ul>
      </nav>
            {/* <nav className=" flex items-center space-x-6">
            <ul className="inline-flex gap-2">
             <li className="text-primary">Home
             </li>
                 <li>Products</li>
                
              */}
                <div className="relative">
                <button className="bg-white text-fuchsia-700 px4 py-2 rounded mt-2 hover:bg-fuchsia-800 ">Cart</button>
                {cart && cart.length >0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-2">
                        {cart.length}</span>
                )}
                 </div>
             {/* </ul> */}
            
        
            {/* </nav> */}

        </header>
       
       
    )
}
export default Header