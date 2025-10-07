
export default function Filter({searchTerm, setSearchTerm, selectedCategory, setSelectedCategory}){
    
    return(
        <div>
            <input type="text" 
            placeholder="Search.." 
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            className="p-3 text-black border-gray"/>
        <select  className="p-3 m-3 text-black border-gray"
        value={selectedCategory}
        onChange={(e)=>setSelectedCategory(e.target.value)}>

            <option selected value="all">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
        </select>

        </div>
    )
}