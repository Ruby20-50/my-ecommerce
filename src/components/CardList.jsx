import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Skeleton from "./Skeleton";

export default function CardList({setTitle}){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState("all");


    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then((response)=> response.json())
        .then((data)=>{
        setProducts(data.products);
    setTimeout(()=> setLoading(false), 2000)
    setTitle("ProductList")
})
.catch((error)=>{
    console.log(error);
    setLoading(false);
});

    },[]);

    const handleSearch = (event ) => {
        setSearchTerm(event.target.value);
    }

    const filteredProducts = products.filter(products => {
        const categoryMatch = selectedCategory === 'all'? true : products.category.toLowerCase() === selectedCategory.toLowerCase()
        const searchTermMatch = products.name.toLowerCase().includes(searchTerm.toLowerCase());
        return categoryMatch && searchTermMatch;
    }
    )
    return (
    <>
    {loading?(

    )}
    </>
    )
}