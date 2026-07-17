import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Productlist from "./Pages/Productlist";
import ProductDetails from "./Pages/ProductDetails";
import HomePage from "./Components/HomePage";
import Cart from "./Pages/Cart";
import OrderConfirmation from "./Pages/OrderConfirmation";
import Checkout from "./Pages/Checkout";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "productlist",
          element: <Productlist />,
        },
        {
          path: "productDetails/:id",
          element: <ProductDetails />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "checkout",
          element: <Checkout />,
        },
        {
          path: "orderConfirmation",
          element: <OrderConfirmation />,
        },
      ],
    },
  ],
  {
    basename: "/shopping-cart",
  }
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;