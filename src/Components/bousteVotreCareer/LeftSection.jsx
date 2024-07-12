import ArrowFlesh from "../../assets/images/arrow.png";
import CheckIcon from "../../assets/images/check.png";

export default function LeftSection()
{
     return (
        <>
            <div className="LeftContainer">
                <div className="header">
                    <h2 className=" leftHeaderText">
                        Boustez votre carrière avec <br></br>
                        nos formations <span>express</span>
                    </h2>
                </div>
                <div className="description">
                    <strong className="DescriptionTitle">N’attendez pas de changer de métier pour évoluer dans votre carrière ! <br></br>
                        Améliorer vos connaissances tech à travers nos Skill Courses dédiés.</strong>
                    <p>Vous voulez monter en compétence, maîtriser un nouvel outil ou accélérer votre reconversion par l’ajout de connaissances ?</p>
                    <p>Où que vous soyez, et quand vous le souhaitez, progressez rapidement sur notre plateforme en ligne.</p>
                </div>
                <div className="list">
                    <div className="FirstListContainer">
                        <div className="contentList flex">
                            <img src={CheckIcon} alt="" />
                            <p>Formations courtes et certifiantes</p>
                        </div>
                        <div className="contentList flex">
                            <img src={CheckIcon} alt="" />
                            <p>100% en ligne et éligibles au CPF</p>
                        </div>
                        <div className="contentList flex">
                            <img src={CheckIcon} alt="" />
                            <p>Flexibilité dans l’apprentissage</p>
                        </div>
                    </div>
                    <div className="bottomcards">
                        <div className="bottomCardsfirst flex">
                            <div>
                                <h3 className="text-lg">Flexibilité dans l’apprentissage</h3>
                                <p>Skill Course en ligne (50H)</p>
                            </div>
                            <div>
                                <img src={ArrowFlesh} alt="" />
                            </div>
                        </div>
                        <div className="bottomCardsSecond flex">
                            <div>
                                <h3 className="text-lg">Flexibilité dans l’apprentissage</h3>
                                <p>Skill Course en ligne (50H)</p>
                            </div>
                            <div>
                                <img src={ArrowFlesh} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     )
}