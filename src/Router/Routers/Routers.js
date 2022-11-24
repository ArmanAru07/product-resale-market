import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Main from "../../Layout/Main";
import Products from "../../Pages/Products/Products";
import CAtegoryProduct from "../../Pages/Products/CAtegoryProduct";

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
                path: '/category/:id',
                element: <CAtegoryProduct></CAtegoryProduct>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.categoryID}`)
            }
        ]
    }
]);

export default router;