
import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Products from './components/Products'
import { CartProvider } from './providers/CartProvider';


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (

    <CartProvider
      className='App'>
      <Header />
      <Products
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory} />

    </CartProvider>
  )
}

export default App
