import React from 'react';
import LogoJumpFooter from "../../assets/Logos/LogoJumpFooter";
import imageFooter from "../../assets/images/imageFooter.png";
import instagram from "../../assets/images/instagram.png";
import youtube from "../../assets/images/youtube.png";
import facebook from "../../assets/images/facebook.png";
import linkedin from "../../assets/images/linkedin.png";

export default function Footer() {
  return (
    <>
      <footer className="bg-customPink text-white py-10">
        <div className='container mx-auto px-4 md:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {/* Logo and Social Icons */}
            <div className='flex flex-col items-center justify-center mt-2'>
              <LogoJumpFooter />
              <div className='flex justify-center space-x-3 mt-5'>
                <div className="footer-icons flex justify-center">
                  <div className="footer-image bg-white p-2 rounded-full">
                    <img src={facebook} alt="Facebook" className="w-6" />
                  </div>
                </div>
                <div className="footer-icons flex justify-center">
                  <div className="footer-image bg-white p-2 rounded-full">
                    <img src={linkedin} alt="LinkedIn" className="w-6" />
                  </div>
                </div>
                <div className="footer-icons flex justify-center">
                  <div className="footer-image bg-white p-2 rounded-full">
                    <img src={youtube} alt="YouTube" className="w-6" />
                  </div>
                </div>
                <div className="footer-icons flex justify-center">
                  <div className="footer-image bg-white p-2 rounded-full">
                    <img src={instagram} alt="Instagram" className="w-6" />
                  </div>
                </div>
              </div>
              <button id="footer-button" className='bg-white rounded-lg py-1 text-customPink mt-4 font-oswald font-bold px-3'>
                Nous contacter
              </button>
            </div>

            {/* Formations Alternance */}
            <div className='text-white font-oswald text-center md:text-left'>
              <ul className="list-none">
                <li className="mb-3 mt-5 text-xl font-bold">Formations Alternance :</li>
                <li className="mb-3">Alternance Digital Marketing</li>
                <li className="mb-3">Alternance UX/UX Designer</li>
                <li className="mb-3">Alternance Développement et conception</li>
                <li className="mb-3">Alternance Cyber Securité</li>
                <li className="mb-3">Alternance Recrutement Tech</li>
                <li className="mb-3">Alternance Secrétariat</li>
              </ul>
            </div>

            {/* Boostez vos compétences */}
            <div className='text-white font-oswald text-center md:text-left'>
              <ul className="list-none">
                <li className="mb-3 mt-5 text-xl font-bold">Boostez vos compétences:</li>
                <li className="mb-3">Formation Web Design</li>
                <li className="mb-3">Formation Développement Web</li>
                <li className="mb-3">Formation Sécurité Informatique</li>
              </ul>
            </div>

            {/* Jump School */}
            <div className='text-white font-oswald text-center md:text-left'>
              <ul className="list-none">
                <li className="mb-3 mt-5 text-xl font-bold">Jump School:</li>
                <li className="mb-3">A propos</li>
                <li className="mb-3">Alternance UX/UX Designer</li>
                <li className="mb-3">Consulter la validité du certificat Qualiopi</li>
              </ul>
              <div className="flex justify-center md:justify-start">
                <img src={imageFooter} alt="Group" className="mt-5 w-32 md:w-auto" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
