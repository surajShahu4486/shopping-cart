import React from 'react'
import { useCart } from '../context/CartContext';

const CartItem = ({item}) => {
  const {addToCart,removeFromCart} = useCart();
  const incrementItem = ()=>addToCart(item);
  const decrementItem = ()=>removeFromCart(item.id);
  const removeItem  = ()=>removeFromCart(item.id,true);
  return (
    <div className="flex gap-6 py-6 border-b hover:bg-slate-50 transition rounded-2xl">
              {/* Product Image */}
              <img
                src={item.image}
                alt=""
                className="w-44 h-36 rounded-2xl object-cover"
              />

              {/* Product Details */}
              <div className="flex-1">

                <div className="flex justify-between">

                  <div>
                    <h2 className="text-2xl font-semibold text-slate-800">
                      {item.name}
                    </h2>

                    <p className="text-slate-500 mt-2">
                      {item.category}
                    </p>
                  </div>

                  <button onClick={removeItem} className="text-red-500 text-xl hover:scale-110 transition">
                    🗑
                  </button>

                </div>

                <div className="flex items-center justify-between mt-8">

                  <div className="flex items-center gap-4">

                    <button className="w-10 h-10 rounded-full bg-slate-200 hover:bg-blue-600 hover:text-white transition" onClick={decrementItem}>
                      −
                    </button>

                    <span className="font-bold text-lg">
                     {item.quantity}
                    </span>

                    <button className="w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition" onClick={incrementItem}>
                      +
                    </button>

                  </div>

                  <h2 className="text-3xl font-bold text-blue-700">
                    ₹{item.price}
                  </h2>

                </div>

              </div>
            </div>
  )
}

export default CartItem