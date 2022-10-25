import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/Blog";
import Courses from "../pages/Courses";
import Faq from "../pages/Faq";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
                    return fetch(`https://telecourse-server.vercel.app/categories`);
                },
                element: <Courses></Courses>
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
        ]
    }
]) 