import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-slate-50 text-gray-800">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white"></div>
          <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-white"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 font-semibold uppercase tracking-widest text-blue-200">
              Welcome to ShopNest
            </p>

            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              Shopping Made
              <span className="block text-yellow-300">Simple & Exciting</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-blue-100">
              Discover amazing products, unbeatable prices, and a shopping
              experience designed especially for you.
            </p>

            <Link
              to="/productlist"
              className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-bold text-blue-700 shadow-lg transition hover:scale-105 hover:bg-yellow-300 hover:text-gray-900"
            >
              Explore Products →
            </Link>
          </div>

          <div className="mt-12 hidden lg:block">
            <div className="flex h-72 w-72 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
              <div className="text-center">
                <span className="text-7xl">🛍️</span>
                <p className="mt-4 text-xl font-bold">Shop Smart</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>
            <span className="font-semibold uppercase tracking-wider text-indigo-600">
              Who We Are
            </span>

            <h2 className="mt-3 text-4xl font-bold text-gray-900">
              Your Favorite Online Shopping Destination
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              At ShopNest, we believe shopping should be easy, enjoyable, and
              accessible to everyone. We bring together quality products,
              affordable prices, and a seamless online shopping experience.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              From the latest electronics to everyday essentials, we carefully
              select products that add value to your lifestyle.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div>
                <h3 className="text-3xl font-bold text-indigo-600">10K+</h3>
                <p className="text-sm text-gray-500">Happy Customers</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-indigo-600">5K+</h3>
                <p className="text-sm text-gray-500">Products</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-indigo-600">24/7</h3>
                <p className="text-sm text-gray-500">Support</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 p-8 shadow-2xl">
              <div className="rounded-2xl bg-white p-8">
                <div className="text-center">
                  <span className="text-7xl">🚀</span>
                  <h3 className="mt-5 text-2xl font-bold text-gray-900">
                    Shopping of the Future
                  </h3>
                  <p className="mt-4 text-gray-600">
                    Quality products. Great prices. Delivered to your door.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-12 text-center">
            <span className="font-semibold uppercase tracking-wider text-indigo-600">
              Why Choose Us
            </span>

            <h2 className="mt-3 text-4xl font-bold text-gray-900">
              Everything You Need, All in One Place
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl bg-slate-50 p-7 text-center transition hover:-translate-y-2 hover:shadow-xl">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-3xl">
                🚚
              </div>
              <h3 className="mt-5 text-xl font-bold">Fast Delivery</h3>
              <p className="mt-3 text-gray-600">
                Get your favorite products delivered quickly and safely.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-7 text-center transition hover:-translate-y-2 hover:shadow-xl">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
                🔒
              </div>
              <h3 className="mt-5 text-xl font-bold">Secure Payment</h3>
              <p className="mt-3 text-gray-600">
                Your payment and personal information are always protected.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-7 text-center transition hover:-translate-y-2 hover:shadow-xl">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 text-3xl">
                ⭐
              </div>
              <h3 className="mt-5 text-xl font-bold">Quality Products</h3>
              <p className="mt-3 text-gray-600">
                We provide products selected for quality and value.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-7 text-center transition hover:-translate-y-2 hover:shadow-xl">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-3xl">
                💬
              </div>
              <h3 className="mt-5 text-xl font-bold">Customer Support</h3>
              <p className="mt-3 text-gray-600">
                Our team is always ready to help you whenever you need us.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gradient-to-r from-gray-900 to-slate-800 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">

          <span className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Our Mission
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Making Every Shopping Experience Better
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our mission is to make online shopping convenient, affordable,
            trustworthy, and enjoyable for everyone.
          </p>

          <Link
            to="/productlist"
            className="mt-8 inline-block rounded-full bg-indigo-600 px-8 py-3 font-semibold transition hover:bg-indigo-500"
          >
            Start Shopping Now
          </Link>

        </div>
      </section>

    </div>
  );
};

export default About;