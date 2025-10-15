import { useEffect } from "react";
import axios from "axios";

export default function ProductDetails(product) {
    
     useEffect(() => {
        const fetchSingleProduct = () => {
            try {
                const response = axios.get(`https://fakestoreapi.com/products/${product.id}`);
            } catch (error) {
                console.error("Error fetching product details:", error);
            }
        };
        fetchSingleProduct();
     }, []);
    return (
        <div>
            <h1>Product Details Page</h1>  
            <p>This is the product details page of our e-commerce application.</p>
        </div>
    );
}