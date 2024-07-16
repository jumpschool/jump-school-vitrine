import { Link } from "react-router-dom";
import "./HeroSection.css";
import BottomHeroSection from "./BottomHeroSection";

export default function HeroSection()
{
    return(
        <>
            <div className="Hero_container overflow-hidden">
                <div className="flex_content max-2xl:w-[100%]">
                    <div className="content_left max-2xl:!w-[80%]">
                        <div className="header_text max-2xl:!w-[100%]">
                            <h2 className="max-2xl:text-5xl py-[1%]">FORMEZ-VOUS AUX <br></br>
                                MÉTIERS DE LA <span>TECH</span></h2>
                            <p className="">
                                Pour changer de carrière ou monter en compétences,la Wild Code School propose des formations certifiantes à distance ou sur campus. <br></br>
                                Développement Web, Data & I.A, Infrastructure & Cybersécurité et Product Design.<br></br>
                                <strong className="text-lg">Vous aurez les codes !</strong> 
                            </p>
                            <div className="bottom_button ">
                                <Link>Choisir sa formation</Link>  
                            </div>
                        </div>
                    </div>
                    <div className="content_right"></div>
                </div>
                <BottomHeroSection />
            </div>
        </>
    )
}