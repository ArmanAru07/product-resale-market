import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Main from "../../Layout/Main";
import Products from "../../Pages/Products/Products";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Blog from "../../Pages/Blog/Blog";
import AvailableProduct from "../../Pages/Products/AvailableProduct";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import AddProduct from "../../Pages/Dashboard/Addproduct/AddProduct"
import MyProduct from "../../Pages/Dashboard/MyProduct/MyProduct";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSeller from "../../Pages/Dashboard/AllSeller/AllSeller";


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
                loader: ({params}) => fetch(`http://localhost:5000/motorcycle/${params.name}`)
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
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard/my-orders',
                element:<MyOrders></MyOrders>
            },
            {
                path:'/dashboard/add-product',
                element:<AddProduct></AddProduct>
            },
            {
                path:'/dashboard/my-product',
                element:<MyProduct></MyProduct>
            },
            {
                path:'/dashboard/all-buyers',
                element:<AllBuyers></AllBuyers>
            },
            {
                path:'/dashboard/all-sellers',
                element:<AllSeller></AllSeller>
            }

        ]
    },
    {
        path:"*",element:<div>Error 404</div>

    }
]);

export default router;