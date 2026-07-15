import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useCart();

    const [product, setProduct] = useState([]);

    useEffect(() => {
          setProduct( products.find((p)=>p.id.toString() === id));
          
    }, [id])
    

  if (!product) {
    return (
      <div className="text-center text-2xl font-bold mt-10">
        Product Not Found
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white rounded-3xl shadow-xl p-8">

        {/* Product Image */}
        <div className="bg-gray-100 rounded-2xl flex items-center justify-center p-8">
          <img
            src={product.image}
            alt={product.name}
            className="h-[450px] object-contain hover:scale-105 transition duration-300"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">

          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full w-fit font-semibold">
            {product.category}
          </span>

          <h1 className="text-4xl font-bold text-gray-800 mt-4">
            {product.name}
          </h1>

          <div className="flex items-center mt-4">
            <span className="text-yellow-500 text-xl">⭐⭐⭐⭐☆</span>
            <span className="ml-2 text-gray-500">(245 Reviews)</span>
          </div>

          <h2 className="text-4xl font-bold text-blue-600 mt-6">
            ₹ {product.price}
          </h2>

          <p className="text-gray-600 leading-8 mt-6">
            {product.description}
          </p>

          {/* Features */}
          <div className="mt-8">
            <h3 className="font-semibold text-xl mb-3">
              Product Highlights
            </h3>

            <ul className="list-disc ml-5 space-y-2 text-gray-600">
              <li>Premium Quality</li>
              <li>1 Year Warranty</li>
              <li>Fast Delivery</li>
              <li>Easy Returns</li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-10">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition">
              Add to Cart
            </button>

            <Link to={'/productlist'} className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition">
              Continue Shooping .
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;