import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import { Outlet } from "react-router-dom"

export default function Layout(){
    return(
        <>
        <Header/>
            <main>
                <Outlet/>
            </main>
        <Footer/>
        </>
    )
}