import { Search } from "lucide-react"
export default function Filter({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory }) {

    return (
        <div className="relative">
            <div  className="relative  max-w-md mx-auto">
                <Search  className="absolute left-3 top-1/2 transform
                 -translate-y-1/2 text-gray-400"  size={20} />
            <input type="text"
                placeholder="Search.."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg
                 shadow-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-600
                  transition duration-200 bg-white text-gray-700 placeholder-gray-400"
                />
                </div>
            <select className="p-3 m-3 text-black border-gray"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value="all">All Categories</option>
                <option value="beauty">Beauty</option>
                <option value="fragrances">Fragrances</option>
                <option value="furniture">Furniture</option>
                <option value="groceries">Groceries</option>
            </select>
        </div>
    )
}