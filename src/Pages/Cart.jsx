import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "../Components/CartItem";
import { Link } from "react-router";

const Cart = () => {

  
  const  {cart,
        clearCart,
        addToCart,
        removeFromCart,
        cartTotal,
        cartDiscount,
        cartCount} = useCart();
        

  
  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">

        {/* Cart Section */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8">

          <h1 className="text-4xl font-bold mb-8 text-slate-800">
            My Cart
          </h1>

          {cart.map((cartProduct) =>(
            <CartItem key={cartProduct.id} item={cartProduct}/>
            ))}

        </div>

        {/* Order Summary */}

        <div className="bg-white rounded-3xl shadow-xl p-8 h-fit sticky top-24">

          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            Order Summary
          </h2>

          <div className="space-y-5">

            <div className="flex justify-between text-lg">
              <span className="text-slate-600">
                Subtotal
              </span>

              <span className="font-semibold">
                ₹{cartTotal}
              </span>
            </div>

            <div className="flex justify-between text-lg">

              <span className="text-slate-600">
                Discount
              </span>

              <span className="text-green-600 font-semibold">
                -₹500
              </span>

            </div>

            <div className="flex justify-between text-lg">

              <span className="text-slate-600">
                Delivery
              </span>

              <span className="text-green-600 font-semibold">
                FREE
              </span>

            </div>

            <div className="pt-4">

              <input
                type="text"
                placeholder="Enter Promo Code"
                className="w-full border border-slate-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-600"
              />

            </div>

            <hr />

            <div className="flex justify-between text-2xl font-bold">

              <span>Total</span>

              <span className="text-blue-700">
                ₹{cartDiscount}
              </span>

            </div>

           <div className="flex flex-col gap-4 mt-6">

  <Link
    to="/checkout"
    className="w-full text-center bg-gradient-to-r from-blue-700 to-blue-500 
    text-white py-4 rounded-xl text-lg font-semibold 
    hover:from-blue-800 hover:to-blue-600 
    hover:shadow-lg transition-all duration-300"
  >
    Proceed to Checkout
  </Link>

  <Link
    to="/productlist"
    className="w-full text-center border-2 border-blue-600 
    text-blue-600 py-4 rounded-xl font-semibold 
    hover:bg-blue-600 hover:text-white 
    transition-all duration-300"
  >
    Continue Shopping
  </Link>

</div>

            <div className="text-center text-slate-500 mt-8">
              Secure Payment
            </div>

            <div className="flex justify-center gap-4 mt-4">

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                className="h-8"
                alt=""
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                className="h-8"
                alt=""
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                className="h-8"
                alt=""
              />

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Cart;