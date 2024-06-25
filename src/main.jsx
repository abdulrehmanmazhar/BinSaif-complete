import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Home.jsx'
// import './index.css'
// import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Unstitched from './components/Unstitched.jsx'
import Search from './components/Search.jsx'
import Products from './components/Products.jsx'
import Element from './components/Element.jsx'
import Sales from './components/Sales.jsx'
import Suggestions from './components/Suggestions.jsx'
import Admin from './components/Admin.jsx'
import AddProduct from './components/AddProduct.jsx'
import Orders from './components/Orders.jsx'
import Category from './components/Category.jsx'
import Signup from './components/Signup.jsx'
import Cart from './components/Cart.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'home',
        element:<Home/>
      },
      {
        path:'about',
        element:<Suggestions/>
      },
      {
        path:'products',
        element: <Products/>
      },
      {
        path:'unstitched',
        element:<Unstitched src={"./src/assets/02.jpg"}/>
      },
      {
        path:'readytowear',
        element:<Home/>
      },
      {
        path:'hotsales',
        element:<Sales/>
      },
      {
        path:'cart',
        element:<Cart/>
      },
      {
        path:'signup',
        element:<Signup/>
      },
      {
        path:'search',
        element:<Search/>
      },
      {
        path:'category',
        element: <Category/>
      }
      
    ]
  },{
    path:'/admin',
    element:<Admin/>,
    children:[
      {
        path:'addproducts',
        element: <AddProduct/>
      },
      {
        path:'signup',
        element:<Signup/>
      },
      {
        path:'orders',
        element: <Orders/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
