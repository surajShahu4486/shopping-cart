import React from 'react'

import { createBrowserRouter,RouterProvider} from 'react-router'
import Navbar from './Components/Navbar'
import Productlist from './Pages/Productlist'
import ProductDetails from './Pages/ProductDetails'
import HomePage from './Components/HomePage'
import Cart  from './Pages/Cart'
import OrderConfirmation from './Pages/OrderConfirmation'
import Checkout from './Pages/Checkout';


const router = createBrowserRouter([
  
  {path:"/",
    element:<Navbar />,
    children:[
      { index: true, element: <HomePage /> },
      { path:"productlist",element:<Productlist /> },
      { path:"productDetails/:id", element:<ProductDetails/>},
      { path:"cart",element:<Cart/>},
      { path:"Checkout",element:<Checkout/>},
      {path:"orderConfirmation",element:<OrderConfirmation/>}
      
    ]

  },
])
const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default App