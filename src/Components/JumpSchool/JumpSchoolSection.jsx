import React from 'react';
import Group from "../../assets/images/Group.png";

import './jump.css';

function JumpSchoolSection() {
  return (
    <div className='bg-jumpschool-section p-5'>
      <div className='flex flex-col lg:flex-row justify-between items-center h-full'>
        <div className='w-full lg:w-1/2 lg:mr-5 mb-5 lg:mb-0'>
          <div className='pt-4'>
            <h1 className='text-3xl text-white lg:text-4xl mb-3 lg:mb-5 font-extrabold pl-5 lg:pl-20'>
              Why jump <span className='text-white relative'>
                <span className="after:absolute after:inline-block after:h-1 after:w-full after:bg-pink-500 after:bottom-0 after:left-0"></span>school?
              </span>
            </h1>
          </div>
          
          <div className='space-y-3 lg:space-y-5 pl-5 lg:pl-20 py-2 lg:py-3'>
            <div className='bg-white px-3 lg:px-4 pt-2 pb-3 lg:pb-4 rounded-xl shadow'>
              <h2 className='text-xl lg:text-2xl pb-1 lg:pb-2 rounded text-pink-500 font-bold'>
                Flexibilité dans l’apprentissage
              </h2>
              <p className='text-sm lg:text-base font-semibold pb-1 lg:pb-2'>
                80% de pratique, 20% de théorie ! Notre pédagogie basée sur la 
                réalisation de projets permet de se préparer au monde professionnel et de justifier auprès des recruteurs de hard skills et de soft skills.
              </p>
            </div>

            <div className='bg-white px-3 lg:px-4 pt-2 pb-3 lg:pb-4 rounded-xl shadow'>
              <h2 className='text-xl lg:text-2xl pb-1 lg:pb-2 rounded text-pink-500 font-bold'>
                Flexibilité dans l’apprentissage
              </h2>
              <p className='text-sm lg:text-base font-semibold pb-1 lg:pb-2'>
                80% de pratique, 20% de théorie ! Notre pédagogie basée sur la 
                réalisation de projets permet de se préparer au monde professionnel et de justifier auprès des recruteurs de hard skills et de soft skills.
              </p>
            </div>
            
            <div className='bg-white px-3 lg:px-4 pt-2 pb-3 lg:pb-4 rounded-xl shadow'>
              <h2 className='text-xl lg:text-2xl pb-1 lg:pb-2 rounded text-pink-500 font-bold'>
                Flexibilité dans l’apprentissage
              </h2>
              <p className='text-sm lg:text-base font-semibold pb-1 lg:pb-2'>
                80% de pratique, 20% de théorie ! Notre pédagogie basée sur la 
                réalisation de projets permet de se préparer au monde professionnel et de justifier auprès des recruteurs de hard skills et de soft skills.
              </p>
            </div>
          </div>
        </div>
       
        <div className='hidden lg:flex justify-center items-end w-[40%] h-[100%] p-[5%]'>
          <img src={Group} alt='Group' className=''/>
        </div>
      </div>
    </div>
  );
}

export default JumpSchoolSection;
