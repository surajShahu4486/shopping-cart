import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useCart } from "../context/CartContext";
import { Bounce, ToastContainer, toast } from 'react-toastify';

const Navbar = () => {
  const { cartCount } = useCart();

  return (
    <div className="min-h-screen flex flex-col bg-slate-100">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 shadow-xl">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <NavLink
            to="/"
            className="text-3xl font-extrabold tracking-wide text-white"
          >
            🛍 ShopEasy
          </NavLink>

          {/* Navigation */}
          <nav className="flex items-center gap-3">

            {[
              { name: "Home", path: "/" },
              { name: "Products", path: "/productlist" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-white text-blue-700 shadow-lg"
                      : "text-white hover:bg-white hover:text-blue-700 hover:shadow-md"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* Cart */}
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `relative flex items-center gap-2 px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-white text-blue-700 shadow-lg"
                    : "text-white hover:bg-white hover:text-blue-700 hover:shadow-md"
                }`
              }
            >
              🛒 Cart

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold shadow-md">
                  {cartCount}
                </span>
              )}
            </NavLink>

          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
              {/* Toast Container */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Footer />
    </div>
  );
};

export default Navbar;