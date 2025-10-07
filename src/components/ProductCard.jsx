import {  useCart } from "../hooks/useCart";


const ProductCard = ({data}) =>{
  console.log('data in product card',data);
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
                        onClick={handleClick} //!!! there was a () here  like {handleClick()} this is an error because the onClick expects a function reference not a function call
                        //?? so what is the difference between function reference and function call
                        // A function reference is when you refer to the function by its name without parentheses, like handleClick. This means you are passing the function itself as a value, and it can be called later when needed.
                        // A function call is when you invoke the function by adding parentheses after its name, like handleClick(). This means you are executing the function immediately and using its return value.
                        >Add to Cart</button>
                    </div>
)
}
export default ProductCard;
