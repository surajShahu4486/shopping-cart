import React from 'react'

import { createBrowserRouter,RouterProvider} from 'react-router'
import Navbar from './Components/Navbar'
import Productlist from './Pages/Productlist'
import ProductDetails from './Pages/ProductDetails'
import Checkout from './Pages/Checkout'
import HomePage from './Components/HomePage'


const router = createBrowserRouter([
  
  {path:"/",
    element:<Navbar />,
    children:[
      { index: true, element: <HomePage /> },
      { path:"productlist",element:<Productlist /> },
      { path:"productDetails/:id", element:<ProductDetails/>},
      { path:"cart",element:<cart/>},
      { path:"checkout",element:<Checkout/>}
      
    ]

  },
])
const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default App