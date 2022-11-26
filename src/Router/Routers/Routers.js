import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Main from "../../Layout/Main";
import Products from "../../Pages/Products/Products";
import CAtegoryProduct from "../../Pages/Products/CAtegoryProduct";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Blog from "../../Pages/Blog/Blog";

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
                element: <CAtegoryProduct></CAtegoryProduct>,
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
            }
        ]
    }
]);

export default router;