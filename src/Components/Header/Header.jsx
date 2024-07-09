import LogoJumpit from "../../assets/Logos/LogoJumpIt";
import CallIcon from "../../assets/Icons/CallIcon";
import MiniPhoneIcon from "../../assets/Icons/MiniPhoneIcon" 
import './Header.css'
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    return (
        <>
        <nav className="navbar bg-white rounded-b-2xl shadow-md flex w-full">
            <div className="Logo py-[1.5%] w-[23%] flex justify-end">
                <LogoJumpit/>
            </div>
            <div className="block lg:hidden">
                    <button onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded text-teal-200 border-rose-600 hover:text-rose-600 hover:border-rose-400">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
            </div>
            <div className={` flex-grow  lg:flex lg:items-center lg:justify-between bg-rosa-200 ${isMenuOpen ? '' : 'hidden'} lg:block`}>
                    <div className="w-[80%] mt-[1%] flex gap-[1.25%] lg:justify-center">
                        <Link to="/" className="hover:bg-rose-600 hover:text-white hover:px-[1%] hover:rounded-md Text-navbar-element block text-xl lg:inline-block lg:mt-0 text-rose-600 font-semibold max-xl:text-md" onClick={closeMenu}>
                                Accueil
                        </Link>
                        <Link to="/" className="hover:bg-rose-600 hover:text-white hover:px-[1%] hover:rounded-md Text-navbar-element block text-xl lg:inline-block lg:mt-0 text-rose-600   font-semibold max-xl:text-md" onClick={closeMenu}>
                            Notre ecole
                        </Link>
                        <Link to="/" className="hover:bg-rose-600 hover:text-white hover:px-[1%] hover:rounded-md Text-navbar-element block text-xl lg:inline-block lg:mt-0 text-rose-600 font-semibold max-xl:text-md" onClick={closeMenu}>
                            Admission
                        </Link>
                        <Link to="/" className="hover:bg-rose-600 hover:text-white hover:px-[1%] hover:rounded-md Text-navbar-element block  text-xl lg:inline-block lg:mt-0 text-rose-600 font-semibold max-xl:text-md" onClick={closeMenu}>
                            Formations
                        </Link>
                        <Link to="/" className="hover:bg-rose-600 hover:text-white hover:px-[1%] hover:rounded-md Text-navbar-element block text-xl lg:inline-block lg:mt-0 text-rose-600 font-semibold max-xl:text-md" onClick={closeMenu}>
                            Pour les entreprises
                        </Link>
                        <Link to="/" className="hover:bg-rose-600 hover:text-white hover:px-[1%] hover:rounded-md Text-navbar-element block text-xl lg:inline-block lg:mt-0 text-rose-600 font-semibold max-xl:text-md" onClick={closeMenu}>
                            Contact                        
                        </Link>
                    </div>
                    <div className="w-[30%] flex  justify-evenly">

                    <div className="relative">
                    <div>
                        <button className="relative group">
                        <CallIcon className="callusicon" />
                        <div className="absolute right-[2%] top-[85%] w-[600%] py-[60%] bg-white text-dark rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-2000 ease-out delay-100 hidden group-hover:block">
                            <p className="text-xl font-bold">Téléphonez-nous au :</p>
                                <div className="border-b-2 border-black pb-[2%]">
                                    <p className="text-2xl font-bold flex items-center justify-center mt-2">
                                        <MiniPhoneIcon />
                                        7 82 78 94 42
                                    </p>
                                </div>
                            
                            <p className="my-[4%]">Ou envoyez-nous un message :</p>
                            <button className=" bg-rose-600 hover:bg-white hover:text-rose-600 hover:border-2 hover:border-rose-600 text-white font-bold px-[4%] py-[2%] rounded-md">
                                 Nous contacter
                            </button>
                        </div>
                        </button>
                    </div>
                    </div>





                        
                       

                        <button className="hover:bg-white hover:border-2 hover:border-rose-600 hover:text-rose-600  hover:rounded-md Text-navbar-element bg-rose-600 text-lg px-[7%] text-white font-bold rounded-lg">
                            Candidater
                        </button>

                    </div>

            </div>

        </nav>
        </>
    )
}