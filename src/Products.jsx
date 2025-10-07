//this file is called main in the github file..
import React, { useEffect, useState } from "react";
import ProductCard from "./Components/ProductCard";
import axios from "axios";
import Filter from "./Components/Filter"

export default function Products({searchTerm, setSearchTerm,
     selectedCategory, setSelectedCategory }){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    //   const OnAddToCart = ()=>{
    // console.log("const{cart, handleSetCard} = useCart();");
    // console.log(" handleSetCard({id:2, name: 'New Item'})");

//   }
     useEffect(()=>{
    const fetchProducts = () => {
      
             axios.get("https://dummyjson.com/products")
            .then((res) => {
                setProducts(res.data.products);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setError(err.message);
                setLoading(false);
            });
            
    };
    
    fetchProducts();
    },[]);

    // const handleAddToCart = (product) => {
    //     setCart((prevCart) => [...prevCart, product]);//this line is ambiguous for me
        
    // };
    const filteredProducts = products.filter((product) =>{
        const matchesSearch = product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) 
        const matchesCategory = selectedCategory !== "all" ?
         product.category === selectedCategory
        : true;
        return matchesSearch && matchesCategory 
    }
    )
    console.log(filteredProducts);
    return(

        //    if(loading) return <p>Loading..</p>;
    // if(error) return <p>Error: {error}</p>
    <div className="w-max-fit">
        <Filter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        />
        {loading? ( <p className="text-center">
        Loading products...</p> ) : (
            
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-screen-xl mx-auto">
                 {filteredProducts.map((product) => {
                  
             <ProductCard 
              key={product.id} data={products} />     
            })}
             </div>
             )
    }
    </div>
 );
}
// filteredProducts && filteredProducts.length > 0 &&