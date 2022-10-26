import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/Blog";
import Courses from "../pages/Courses";
import Categories from "../pages/Categories";
import Faq from "../pages/Faq";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SingleCourse from "../pages/SingleCourse";
import Checkout from "../pages/Checkout";
import ForgotPassword from "../pages/ForgotPassword";
import PrivateRouter from "./PrivateRouter";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'home',
                element: <Home></Home>
            },
            {
                path: 'courses',
                loader: () => {
                    return fetch(`https://telecourse-server.vercel.app/courses`);
                },
                element: <Courses></Courses>
            },
            {
                path: '/category/:id',
                loader: ({ params }) => {
                    return fetch(`https://telecourse-server.vercel.app/category/${params.id}`);
                },
                element: <Categories></Categories>
            },
            {
                path: '/course/:id',
                loader: ({ params }) => {
                    return fetch(`https://telecourse-server.vercel.app/course/${params.id}`);
                },
                element: <SingleCourse></SingleCourse>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'faq',
                element: <Faq></Faq>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'forgotPassword',
                element: <ForgotPassword></ForgotPassword>
            },
            {
                path: '/checkout/:id',
                loader: ({ params }) => {
                    return fetch(`https://telecourse-server.vercel.app/course/${params.id}`);
                },
                element: <PrivateRouter><Checkout></Checkout></PrivateRouter> 
            },
        ]
    }
]) 