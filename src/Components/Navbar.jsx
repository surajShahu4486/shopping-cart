import React from 'react'
import { NavLink, Outlet } from 'react-router'
import Footer from './Footer'

const Navbar = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-white">
            MyWebsite
          </h1>

          <nav className="flex gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-white font-medium ${
                  isActive ? "border-b-2 border-white" : ""
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/productlist"
              className={({ isActive }) =>
                `text-white font-medium ${
                  isActive ? "border-b-2 border-white" : ""
                }`
              }
            >
              Products
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-white font-medium ${
                  isActive ? "border-b-2 border-white" : ""
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-white font-medium ${
                  isActive ? "border-b-2 border-white" : ""
                }`
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </main>

      <Footer/>
    </div>
  )
}

export default Navbar

