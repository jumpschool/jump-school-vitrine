import {createBrowserRouter} from 'react-router-dom'
import Home from '../Pages/Home'
import NotFound from '../Pages/NotFound'
import Layout from '../Layouts/Layout'
import Contact from '../Pages/Contact'
import Formation from "../Pages/Formation";


export const router = createBrowserRouter([
    {
        element: <Layout/>,
        children:[
            {
                path:'/',
                element: <Home/>
            },
            {
                path: '*',
                element: <NotFound/>
            },{
                path:"/contact",
                element: <Contact/>
            }
            ,{
                path:"/formation",
                element: <Formation/>
            }
        ]

    }
])