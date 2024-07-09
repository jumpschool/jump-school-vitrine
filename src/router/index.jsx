import {createBrowserRouter} from 'react-router-dom'
import Home from '../Pages/Home'
import NotFound from '../Pages/NotFound'
import Layout from '../Layouts/Layout'
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
            }
        ]

    }
])