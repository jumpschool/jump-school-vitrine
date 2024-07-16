import Testimonials from "./Testemonials";
import "./Testemonials.css";

export default function TestemoialsHolder()
{
    return (
        <>
            <div className="TestHolder">
               <div className="TestContainer">
                    <div className="TestTile">
                        <h2><span>NOS ÉLÈVES </span>ET ALUMNI <span className="UnderLine">TÉMOIGNENT</span></h2>
                    </div>
                    <div className="TestDescription">
                        <div>
                            <p>N’attendez pas de changer de métier pour évoluer dans votre carrière !
                            Améliorer vos connaissances tech à travers nos Skill Courses dédiés.</p>
                        </div>
                        <div>
                            <p>Vous voulez monter en compétence, maîtriser un nouvel outil ou accélérer votre reconversion par l’ajout de connaissances ?
                            Où que vous soyez, et quand vous le souhaitez, progressez rapidement sur notre plateforme en ligne.</p>
                        </div>
                    </div>
                    <Testimonials />
               </div>
            </div>
        </>
    )
}