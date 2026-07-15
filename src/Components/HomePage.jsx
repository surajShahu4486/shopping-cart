import React from 'react'
import { useNavigate } from 'react-router'

const HomePage = () => {
   const navigate = useNavigate();
  return (
    <>
      {/* Hero Section */}
      <section className="bg-orange-400 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-6">
              Welcome to MyStore
            </h1>

            <p className="text-lg mb-8">
              Discover premium products at unbeatable prices.
              Shop electronics, fashion, and much more.
            </p>

            <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition" onClick={()=>navigate('/productlist')}>
              Shop Now
            </button>
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
              alt="Shopping"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-bold mb-2">
                Free Shipping
              </h3>
              <p className="text-gray-600">
                Free delivery on all orders above ₹999.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-5xl mb-4">💳</div>
              <h3 className="text-xl font-bold mb-2">
                Secure Payment
              </h3>
              <p className="text-gray-600">
                100% secure payment with trusted gateways.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-2">
                Best Quality
              </h3>
              <p className="text-gray-600">
                High-quality products with warranty.
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default HomePage