import React from 'react';
import CategorieSection from './categorieSection'; 
import Cardes from './Cardes'; 
import './firstSection.css'; 

export default function FirstSection() {
  return (
    <>
      <div className="">
        <div className="title-container">
          <h2 className="text-3xl md:text-5xl font-bold text-customPink mb-4 py-12">
            Des Formations en Alternance <br />
            <span className="text-black">
              pour Changer <span className="relative">
                d'avenir
                <span className="absolute left-0 bottom-0 w-full h-1 bg-customPink"></span>
              </span>
            </span>
          </h2>
        </div>

        <CategorieSection />
         <Cardes />
        
      </div>
    </>
  );
}
