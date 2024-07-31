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
        <nav className="navbar bg-white rounded-b-2xl fixed top-[0.01%] shadow-md flex w-full z-30 max-sm:justify-between sm:max-xl:justify-between max-xl:flex-col sm:max-xl:px-[3%] max-sm:flex-col max-sm:px-[3%]">
            <Link to='' className="Logo py-[1.5%] w-[23%] flex justify-end">
                <LogoJumpit/>
            </Link>

            <div className={`NavbarLinks flex-grow w-full block  xl:w-auto  xl:flex xl:items-center xl:justify-between max-xl:flex-col bg-rosa-200  ${isMenuOpen ? '' : 'hidden'} xl:block`}>
                    <div className="NavbarLinks_menu max-sm:block sm:max-xl:block   w-[80%] mt-[1%] flex gap-[1.25%] xl:justify-center sm:max-xl:pb-[1%]">
                        <Link to="/" className="hover:bg-rose-600 hover:shadow-md hover:text-white hover:px-[1%] hover:rounded-md rounded-md Text-navbar-element block text-xl xl:inline-block xl:mt-0 text-rose-600 font-semibold max-xl:w-[100%] max-xl:border-y-2 max-xl:border-rose-100 max-xl:text-md max-sm:rounded-none" onClick={closeMenu}>
                                Accueil
                        </Link>
                        <Link to="/" className="hover:bg-rose-600 hover:shadow-md hover:text-white hover:px-[1%] hover:rounded-md rounded-md Text-navbar-element block text-xl xl:inline-block xl:mt-0 text-rose-600   font-semibold max-xl:w-[100%] max-xl:border-b-2 max-xl:border-rose-100 max-xl:text-md max-sm:rounded-none" onClick={closeMenu}>
                            Notre ecole
                        </Link>
                        <Link to="/admission" className="hover:bg-rose-600 hover:shadow-md hover:text-white hover:px-[1%] hover:rounded-md rounded-md Text-navbar-element block text-xl xl:inline-block xl:mt-0 text-rose-600 font-semibold max-sxl:w-[100%] max-xl:border-b-2 max-xl:border-rose-100 max-xl:text-md max-sm:rounded-none" onClick={closeMenu}>
                            Admission
                        </Link>
                        <Link to="/formation" className="hover:bg-rose-600 hover:shadow-md hover:text-white hover:px-[1%] hover:rounded-md rounded-md Text-navbar-element block  text-xl xl:inline-block xl:mt-0 text-rose-600 font-semibold max-xl:w-[100%] max-xl:border-b-2 max-xl:border-rose-100 max-xl:text-md" onClick={closeMenu}>
                            Formations
                        </Link>
                        <Link to="/" className="hover:bg-rose-600 hover:shadow-md hover:text-white hover:px-[1%] hover:rounded-md rounded-md Text-navbar-element block text-xl xl:inline-block xl:mt-0 text-rose-600 font-semibold max-xl:w-[100%] max-xl:border-b-2 max-xl:border-rose-100 max-xl:text-md max-sm:rounded-none" onClick={closeMenu}>
                            Pour les entreprises
                        </Link>
                        <Link to="/contact" className="hover:bg-rose-600  hover:shadow-md hover:text-white hover:px-[1%] hover:rounded-md rounded-md Text-navbar-element block text-xl xl:inline-block xl:mt-0 text-rose-600 font-semibold max-xl:w-[100%] max-xl:border-b-2 max-xl:border-rose-100 max-xl:text-md max-sm:rounded-none" onClick={closeMenu}>
                            Contact                        
                        </Link>
                    </div>
                    <div className="w-[30%] flex  justify-evenly xl:max-2xl:mt-[1%] max-xl:justify-between max-xl:w-[30%] max-xl:pb-[1%] rounded-md max-sm:flex-row-reverse max-sm:w-[50%] max-sm:py-[2%] max-sm:justify-between ">
                        <div className="relative">
                                <div className="2xl:max-3xl:h-[8vh]">
                                    <button className="relative group xl:max-2xl:h-full">
                                        <CallIcon className="callusicon"  />
                                        <div className="absolute right-[2%] top-[85%] w-[600%] py-[60%] bg-white text-dark rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-2000 ease-out delay-100 hidden group-hover:block sm:max-xl:right-auto  max-sm:right-auto ">
                                                <p className="text-xl font-bold">Téléphonez-nous au :</p>
                                                <div className="border-b-2 border-black pb-[2%]">
                                                    <p className="text-2xl font-bold flex items-center justify-center mt-2">
                                                        <MiniPhoneIcon />
                                                            7 82 78 94 42
                                                    </p>
                                                </div>
                                                <p className="my-[4%]">Ou envoyez-nous un message :</p>
                                                <button className=" bg-rose-600 hover:bg-white hover:text-rose-600 hover:border-2 hover:border-rose-600   text-white font-bold px-[4%] py-[2%] rounded-md">
                                                    Nous contacter
                                                </button>
                                        </div>
                                    </button>
                                </div>
                        </div>
                        <button className="hover:bg-white hover:border-2 hover:border-rose-600 hover:text-rose-600  hover:rounded-lg  border-2 border-rose-600 Text-navbar-element bg-rose-600 text-lg px-[7%] text-white font-bold rounded-lg">
                            Candidater
                        </button>

                    </div>

            </div>
            <div className="block xl:hidden py-[4%] max-xl:absolute sm:max-xl:right-[2%] sm:max-xl:top-[-3%] max-sm:absolute max-sm:right-[2%] ">
                    <button data-cyp="menu-toggle" id="menu" onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded border-rose-600 hover:text-rose-600 hover:border-rose-400">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
            </div>

        </nav>
        </>
    )
}