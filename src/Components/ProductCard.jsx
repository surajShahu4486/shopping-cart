import React from 'react'
import { Link } from 'react-router'

const ProductCard = ({product}) => {
  return (
    
    <div
      key={product.id}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
    >
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover"
      />

      {/* Product Details */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {product.name}
        </h2>

        <p className="text-gray-500 text-sm line-clamp-2 mb-4">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">
            ₹{product.price}
          </span>

          <Link
            to={`/productDetails/${product.id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
 
  )
}

export default ProductCard