import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import ErrorPage from './components/ErrorPage'
import Shops from './components/Shops/Shops'
import Cart from './components/Cart'
import { ProductAndCartData } from './loaders/getCard&ProductData'
import toast, { Toaster } from 'react-hot-toast';
const router = createBrowserRouter([{
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
    loader: ProductAndCartData,
    children: [
        { path: '/', element: <Home /> },
        {
            path: '/shop', element: <Shops />,
            loader: () => fetch(`products.json`),
        },
        {
            path: '/cart', element: <Cart />,
            loader: ProductAndCartData
        },
        { path: '/about', element: <About /> },
    ]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
<>
<RouterProvider router={router} />
<Toaster />
</>
)
