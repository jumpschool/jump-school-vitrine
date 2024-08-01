import React, { useState } from "react";
import Image1 from "../../assets/Backgrounds/call_design.png";
import Image2 from "../../assets/Backgrounds/html_design.png";
import Image3 from "../../assets/Backgrounds/marketing_design.png";
import Image4 from "../../assets/Backgrounds/ui_design.png";
import "./Formation.css";
import ImageTest1 from "../../assets/images/Formation/Formation1.png";
import ImageTest2 from "../../assets/images/Formation/Formation2.png";
import ImageTest3 from "../../assets/images/Formation/Formation3.png";
import ImageTest4 from "../../assets/images/Formation/Formation4.png";
import ImageTest5 from "../../assets/images/Formation/Recrutement.png";
import Timing from "../../assets/images/timing.png";

export default function FormationHeroSection() {
  const [activeContent, setActiveContent] = useState('UX/UI design');
  const [transition, setTransition] = useState(false);

  const content = {
    'UX/UI design': {
      title: 'UX/UI Designer',
      image: ImageTest1,
      description: 'Une formation certifiante en partenariat avec des entreprises et des experts internationaux pour vous offrir la meilleure formation en UX/UI design en France.',
      details: 'Cette formation vous permettra d\'apprendre à analyser les users, concevoir et designer des interface dans le but d\'améliorer l\'expérience utilisateur de vos produits digitaux.',
    },
    'Web Development': {
      title: 'Concepteur développeur WEB',
      image: ImageTest2,
      description: 'Une formation certifiante en partenariat avec des entreprises et des experts internationaux pour vous offrir la meilleure formation en UX/UI design en France.',
      details: 'Cette formation vous permettra d\'apprendre à analyser les users, concevoir et designer des interface dans le but d\'améliorer l\'expérience utilisateur de vos produits digitaux.',
    },
    'Marketing Digital': {
      title: 'Marketteur digital',
      image: ImageTest3,
      description: 'Une formation certifiante en partenariat avec des entreprises et des experts internationaux pour vous offrir la meilleure formation en UX/UI design en France.',
      details: 'Cette formation vous permettra d\'apprendre à analyser les users, concevoir et designer des interface dans le but d\'améliorer l\'expérience utilisateur de vos produits digitaux.',
    }, 
    'Secretariat': {
      title: 'Secretariat',
      image: ImageTest4,
      description: 'Une formation certifiante en partenariat avec des entreprises et des experts internationaux pour vous offrir la meilleure formation en UX/UI design en France.',
      details: 'Cette formation vous permettra d\'apprendre à analyser les users, concevoir et designer des interface dans le but d\'améliorer l\'expérience utilisateur de vos produits digitaux.',
    },
    'Recrutement': {
      title: 'Tech recruitement specialist',
      image: ImageTest5,
      description: 'Une formation certifiante en partenariat avec des  entreprises et des experts internationaux pour vous offrir la meilleure formation en UX/UI design en France.',
      details: 'Cette formation vous permettra d\'appren dre à analyser les users, concevoir et designer des interface dans le but d\'améliorer l\'expérience utilisateur de vos produits digitaux.',
    },
  };

  const handleContentChange = (newContent) => {
    if (newContent !== activeContent) {
      setTransition(true);
      setTimeout(() => {
        setActiveContent(newContent);
        setTransition(false);
      }, 300); 
    }
  };

  return (
    <>
      <div className="FomationContainer">
        <div className="overlay">
          <div className="sliderBackground">
            <img src={Image1} alt="Image 1" />
            <img src={Image2} alt="Image 2" />
            <img src={Image3} alt="Image 3" />
            <img src={Image4} alt="Image 4" />
            <img src={Image1} alt="Image 1" />
          </div>
        </div>
        <div className="Hero-text">
          <div className="FirstSection">
            <h3 className="text-lg">NOS FORMAT<span>IONS</span></h3>
            <p>
              Chez Jump School, nous comprenons l'importance de se plonger dans l'univers dynamique de l'industrie numérique. C'est pourquoi nous offrons une gamme de formations spécialisées, soigneusement conçues pour répondre aux besoins en constante évolution du marché du travail numérique.
              Que vous souhaitiez vous spécialiser dans le développement web, maîtriser les systèmes et réseaux ou exceller dans le design UX/UI, notre équipe dévouée est là pour vous accompagner dans votre parcours.
            </p>
          </div>
        </div>
      </div>

      <div className="BottomHero">
        <div className="buttonFilter">
          <button className={activeContent === 'UX/UI design' ? 'Active' : ''} onClick={() => handleContentChange('UX/UI design')}>UX/UI design</button>
          <button className={activeContent === 'Web Development' ? 'Active' : ''} onClick={() => handleContentChange('Web Development')}>Web Development</button>
          <button className={activeContent === 'Marketing Digital' ? 'Active' : ''} onClick={() => handleContentChange('Marketing Digital')}>Marketing Digital</button>
          <button className={activeContent === 'Secretariat' ? 'Active' : ''} onClick={() => handleContentChange('Secretariat')}>Secretariat</button>
          <button className={activeContent === 'Recrutement' ? 'Active' : ''} onClick={() => handleContentChange('Recrutement')}>Recrutement</button>
        </div>

        <div className={`content ${transition ? 'fade-out' : 'fade-in'}`}>{/* for BackGround image */}
          <div className="ContentHolder">
            <div className="headerContent">
              <h1 className="!text-bold">{content[activeContent].title}</h1>
            </div>
            <div className="FilteredContent ">
              <div className="FilterLeft">
                <img src={content[activeContent].image} alt={content[activeContent].title} />
              </div>
              <div className="FilterRight flex flex-col items-center  max-sm:w-[90%]">
                <div className="FormationContent  w-[90%]  max-sm:w-[100%]">
                  <h2 className="font-bold text-xl leading-none text-center max-sm:text-lg">{content[activeContent].description}</h2>
                  <p className="text-center font-medium mt-5 leading-none max-sm:text-md max-sm:leading-relaxed">{content[activeContent].details}</p>
                </div>
                <div className="timing mt-16  mx-auto flex items-center justify-center flex-col gap-8">
                  <img src={Timing} alt="Timing" />
                <button className="moreInfo  py-[2%] px-[5%] text-lg max-sm:text-md bg-rose-600 text-white rounded-lg hover:bg-white border-2 border-rose-600  hover:border-rose-600 hover:text-rose-600">Plus de Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
