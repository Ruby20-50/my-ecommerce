
import { Route, Routes, Outlet} from 'react-router-dom'; 
import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Products from './components/Products'
import { CartProvider } from './providers/CartProvider';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetails from './components/ProductDetails';
function Layout() {
  return (
    <div className='min-h-screen'>   
      <Header />
      <Outlet />
    </div>
  );
}
function App() {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

   return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products" element={<Products 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}/>} />
        <Route path="products/:id" element={<ProductDetails
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory} />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App
