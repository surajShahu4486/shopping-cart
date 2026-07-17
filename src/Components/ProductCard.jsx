import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      
      {/* Clickable Product Details */}
      <Link to={`/productDetails/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover"
        />

        <div className="p-5">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            {product.name}
          </h2>

          <p className="text-gray-500 text-sm line-clamp-2 mb-4">
            {product.description}
          </p>

          <span className="text-2xl font-bold text-blue-600">
            ₹{product.price}
          </span>
        </div>
      </Link>

      {/* Add to Cart Button */}
      <div className="px-5 pb-5">
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;