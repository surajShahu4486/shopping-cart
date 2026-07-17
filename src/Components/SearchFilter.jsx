import { Search } from "lucide-react";

const SearchFilter = ({searchTerm, setSearchTerm}) => {
    return (
        <div className="w-full bg-white rounded-2xl shadow-xl p-5 border border-blue-100">
            <div className="relative">
                <Search
                    size={22}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-600"
                />

                <input
                   value={searchTerm}
                    onChange={(e)=>setSearchTerm(e.target.value)}
                    type="text"
                    placeholder="Search products by name, category, or feature..."
                    className="w-full h-14 rounded-xl bg-blue-50 border-2 border-blue-600 pl-14 pr-4
                    text-gray-700 placeholder:text-gray-400 outline-nonefocus:border-blue-700 focus:ring-4 focus:ring-blue-200
                    transition-all"
                />
            </div>
        </div>
    );
};

export default SearchFilter;