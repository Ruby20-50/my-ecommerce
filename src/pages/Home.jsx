import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div className="text-center">
            <img src="bg-image.jpg" alt="Background image" className="my-5"/>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-screen-xl mx-auto">

                     {/* // repeat this block 5 times with different content */}
            {/* block 1 */}
            <div  className="text-bold text-black m-5 text-lg  font-semibold ">
                        <img src="fragrance.webp"  alt="Frangrances" className="inline-flex items-center 
                         justify-center shadow-lg shadow-fuchsia-950 w-90" />
                        <h3 className="mt-3">Fragrance</h3>
                    </div>
                      {/* block 3 */}
                     <div  className="text-bold text-black m-5  text-lg  font-semibold ">
                        <img src="make-up.jpg"  alt="Make-up" className="inline-flex items-center 
                         justify-center shadow-lg shadow-fuchsia-950 w-full h-85" />
                        <h3 className="mt-3">Make up</h3>
                    </div>
            {/* block 2 */}
                     <div  className="text-bold text-black m-5 text-lg  font-semibold  ">
                        <img src="fashion.jpg"  alt="fashion" className="inline-flex items-center 
                         justify-center shadow-lg shadow-fuchsia-950 w-full " />
                        <h3 className="mt-3">Fashion</h3>
                    </div>

          

            {/* block 4 */}
             <div  className=" text-bold text-black m-5  text-lg  font-semibold ">
                        <img src="furniture.webp"  alt="furniture" className="inline-flex items-center 
                       justify-center shadow-lg shadow-fuchsia-950 w-FULL" />
                        <h3 className="mt-3">Furniture</h3>
                    </div>
                    {/* block 5 */}
                     <div  className="text-bold text-black m-5 text-lg  font-semibold ">
                        <img src="grocery.jpg"  alt="Grocery" className="inline-flex items-center 
                        justify-center shadow-lg shadow-fuchsia-950 w-full" />
                        <h3 className="mt-3">Grocery</h3>
                    </div>
                    {/* End of blocks here */}

            </div>
             <Link to="/profile">profile</Link>
             <footer className="bg-black py-12">
                <div className="container mx-auto px-2 text-white">
                        <div className="mb-4 md:mb-0">
                            <p className="mt-2">Your one-stop shop for all things awesome!</p>
                       
                        </div>  
                </div>
                        </footer>
                        </div>
        
    );
}