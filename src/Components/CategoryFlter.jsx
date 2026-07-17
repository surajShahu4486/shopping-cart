import React from "react";
// import { initialProducts } from "../data/product";
import { useCart } from "../context/CartContext";


const CategoryFilter = ({selectedCategory, setSelectedCategory}) => {

  const initialProducts = useCart();

  const availableCategories = [
    "ALL",
    ...new Set(initialProducts.products.map((p) => p.category)),
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center p-4">
      {availableCategories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-5 py-2 rounded-full border-2 font-semibold transition-all duration-300 shadow-md
          ${selectedCategory === category
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;