import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Main from "../../Layout/Main";
import Products from "../../Pages/Products/Products";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Blog from "../../Pages/Blog/Blog";
import AvailableProduct from "../../Pages/Products/AvailableProduct";
import MyOrders from "../../Pages/MyOrders/MyOrders";
import AddProduct from "../../Pages/Addproduct/AddProduct";
import MyProduct from "../../Pages/MyProduct/MyProduct";
import MyBuyers from "../../Pages/MyBuyers/MyBuyers";
import AllSeller from "../../Pages/AllSeller/AllSeller";
import AllBuyers from "../../Pages/AllBuyers/AllBuyers";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () =>fetch('http://localhost:5000/category')
            },
            {
                path: '/products',
                element: <Products></Products>,
                loader: () =>fetch('http://localhost:5000/products')
            },
            {
                path: '/category/:name',
                element:<AvailableProduct></AvailableProduct>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.name}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path:'my-order',
                element: <MyOrders></MyOrders>
            },
            {
                path:'add-product',
                element: <AddProduct></AddProduct>
            },
            {
                path:'my-product',
                element:<MyProduct></MyProduct>
            },
            {
                path:'my-buyers',
                element:<MyBuyers></MyBuyers>
            },
            {
                path:'all-sellers',
                element:<AllSeller></AllSeller>
            },
            {
                path:'all-buyers',
                element:<AllBuyers></AllBuyers>
            }
        ]
    },
    {
        path:"*",element:<div>Error 404</div>

    }
]);

export default router;