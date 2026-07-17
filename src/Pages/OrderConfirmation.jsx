import React from "react";
import { Link } from "react-router";

const OrderConfirmation = ({deliveryDetails}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-3xl">

        {/* Success Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">

          {/* Success Icon */}
          <div className="mx-auto mb-6 w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center text-4xl font-bold">
              ✓
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold text-gray-900">
            Order Confirmed!
          </h1>

          <p className="text-gray-500 mt-4 text-lg">
            Thank you for your purchase. Your order has been successfully placed.
          </p>

          {/* Order Number */}
          <div className="mt-8 bg-blue-50 border border-blue-100 rounded-2xl p-5">
            <p className="text-gray-500 text-sm">
              Order Number
            </p>

            <h2 className="text-2xl font-bold text-blue-700 mt-1">
              #SHOP-20260717
            </h2>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
    Delivery Details
  </h3>

  <p className="text-gray-700">
    👤{" "}
    <span className="font-semibold">
      {deliveryDetails.first_name} {deliveryDetails.last_name}
    </span>
  </p>

  <p className="text-gray-600">
    📧 {deliveryDetails.email_id}
  </p>

  <p className="text-gray-600">
    📱 {deliveryDetails.phone_number}
  </p>

  <p className="text-gray-600">
    📍 {deliveryDetails.address}, {deliveryDetails.city}
  </p>

  <p className="text-gray-600">
    📮 {deliveryDetails.postal_code}
  </p>
          </div>

          {/* Order Details */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">

            <div className="bg-gray-50 rounded-2xl p-5">
              <p className="text-sm text-gray-500">
                Payment Status
              </p>

              <p className="text-green-600 font-bold mt-2">
                ✓ Paid
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-5">
              <p className="text-sm text-gray-500">
                Delivery Status
              </p>

              <p className="text-blue-600 font-bold mt-2">
                Processing
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-5">
              <p className="text-sm text-gray-500">
                Estimated Delivery
              </p>

              <p className="text-gray-800 font-bold mt-2">
                3-5 Business Days
              </p>
            </div>

          </div>

          {/* Delivery Info */}
          <div className="mt-8 text-left border-t pt-6">

            <h2 className="text-xl font-bold text-gray-800 mb-4">
              What's Next?
            </h2>

            <div className="space-y-4">

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  📦
                </div>

                <div>
                  <h3 className="font-bold text-gray-800">
                    Order Processing
                  </h3>

                  <p className="text-sm text-gray-500">
                    We are preparing your order for shipment.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  🚚
                </div>

                <div>
                  <h3 className="font-bold text-gray-800">
                    Order Shipped
                  </h3>

                  <p className="text-sm text-gray-500">
                    You will receive tracking details once your order is shipped.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  🏠
                </div>

                <div>
                  <h3 className="font-bold text-gray-800">
                    Delivered
                  </h3>

                  <p className="text-sm text-gray-500">
                    Your order will be delivered to your address.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">

            <Link
              to="/productlist"
              className="flex-1 text-center bg-gradient-to-r from-blue-700 to-blue-500 text-white py-4 rounded-xl font-bold hover:shadow-lg hover:scale-[1.02] transition"
            >
              Continue Shopping
            </Link>

            <Link
              to="/"
              className="flex-1 text-center border-2 border-blue-600 text-blue-600 py-4 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition"
            >
              Go to Home
            </Link>

          </div>

        </div>

        {/* Bottom Message */}
        <p className="text-center text-gray-500 text-sm mt-6">
          📧 A confirmation email has been sent to your email address.
        </p>

      </div>

    </div>
  );
};

export default OrderConfirmation;