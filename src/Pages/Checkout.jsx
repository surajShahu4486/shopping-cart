import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import OrderConfirmation from './OrderConfirmation';



const Checkout = () => {
  const { cart, cartTotal, cartDiscount, cartCount, clearCart } = useCart();
  const [deliveryDetails, setDeliveryDetails] = useState({
    first_name: "",
    last_name: "",
    email_id: "",
    phone_number: "",
    address: "",
    city: "",
    postal_code: ""
  })
  const [isConfirmed, setIsConfirmed] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryDetails(pre => ({ ...pre, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    setIsConfirmed(true);
  }
  console.log(deliveryDetails);
  if(isConfirmed) return <OrderConfirmation deliveryDetails={deliveryDetails} />
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4 py-10">

      {/* Page Title */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Checkout
        </h1>

        <p className="text-gray-500 mt-2">
          Complete your order securely
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">

          {/* Delivery Options */}
          <div className="bg-white rounded-3xl shadow-xl p-7">

            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Delivery Options
              </h2>

              <span className="text-sm text-blue-600 font-semibold">
                Step 1 of 2
              </span>
            </div>

            {/* Delivery / Pickup */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">

              <div className="border-2 border-blue-600 bg-blue-50 rounded-2xl p-5 flex items-center gap-4 cursor-pointer">
                <span className="text-3xl">🚚</span>

                <div>
                  <h3 className="font-bold text-blue-700">
                    Delivery
                  </h3>

                  <p className="text-sm text-gray-500">
                    Delivered to your address
                  </p>
                </div>
              </div>

              <div className="border-2 border-gray-200 hover:border-blue-500 rounded-2xl p-5 flex items-center gap-4 cursor-pointer transition">

                <span className="text-3xl">📍</span>

                <div>
                  <h3 className="font-bold text-gray-700">
                    Pick-Up
                  </h3>

                  <p className="text-sm text-gray-500">
                    Pick up from store
                  </p>
                </div>

              </div>

            </div>

            {/* Customer Information */}
            <h3 className="text-xl font-bold text-gray-800 mb-5">
              Customer Information
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {Object.keys(deliveryDetails).map((key) => (
                  <div
                    key={key}
                    className={key === "address" ? "md:col-span-2" : ""}
                  >
                    <label
                      htmlFor={key}
                      className="block mb-2 font-semibold text-gray-700 capitalize"
                    >
                      {key.replaceAll("_", " ")}
                    </label>

                    <input
                      id={key}
                      type={
                        key === "email_id"
                          ? "email"
                          : key === "phone_number"
                            ? "tel"
                            : key === "postal_code"
                              ? "number "
                              : "text"
                      }
                      name={key}
                      value={deliveryDetails[key]}
                      placeholder={`Enter ${key.replaceAll("_", " ")}`}
                      onChange={handleChange}
                      className="w-full px-4 py-4 rounded-xl border border-gray-200
          bg-gray-50 outline-none
          focus:ring-2 focus:ring-blue-200
          focus:border-blue-500"
                    />
                  </div>
                ))}

              </div>

              <button className="w-full mt-7 bg-gradient-to-r from-blue-700 to-indigo-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg">
                Pay and Confirm Order( ₹{cartTotal.toFixed(2)})
              </button>

            </form>


          </div>

          {/* Payment */}
          <div className="bg-white rounded-3xl shadow-xl p-7">

            <h2 className="text-2xl font-bold text-gray-800 mb-5">
              Payment Method
            </h2>

            <div className="border-2 border-blue-600 bg-blue-50 rounded-2xl p-5 flex justify-between items-center">

              <div>
                <h3 className="font-bold text-gray-800">
                  💳 Credit / Debit Card
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Secure and encrypted payment
                </p>
              </div>

              <span className="text-2xl text-blue-600">
                ✓
              </span>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div>

          <div className="bg-white rounded-3xl shadow-xl p-7 sticky top-6">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-2xl font-bold text-gray-800">
                In Your Bag
              </h2>

              <button className="text-blue-600 font-semibold">
                Edit
              </button>

            </div>

            {/* Product 1 */}
            {cart.map((item) => (


              <div className="flex gap-4 border-b pb-5 mb-5">

                <div className="w-24 h-24 rounded-2xl bg-gray-100 flex items-center justify-center text-4xl">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-36 h-28 rounded-2xl object-cover"
                  />
                </div>

                <div className="flex-1">

                  <h3 className="font-bold text-gray-800">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {item.category}
                  </p>

                  <p className="text-sm text-gray-500">
                    Quantitycxdcs: {item.quantity}
                  </p>

                  <p className="text-blue-600 font-bold mt-2">
                    ₹{(item.quantity*item.price).toFixed(2)}
                  </p>

                </div>

              </div>
            ))}


            {/* Order Summary */}
            <div className="space-y-4">

              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₹{cartTotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Delivery</span>

                <span className="text-green-600 font-semibold">
                  FREE
                </span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Discount</span>

                <span className="text-red-500">
                  -₹500
                </span>
              </div>

              <div className="border-t pt-5 flex justify-between text-xl font-extrabold">

                <span>Total</span>

                <span className="text-blue-700">
                  ₹{cartDiscount.toFixed(2)}
                </span>

              </div>

            </div>

            <button className="w-full mt-7 bg-gradient-to-r from-blue-700 to-indigo-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg">
              Place Order 🚀
            </button>

            <p className="text-center text-xs text-gray-400 mt-4">
              🔒 Secure checkout • Your data is protected
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}


export default Checkout
