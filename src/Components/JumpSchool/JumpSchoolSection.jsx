import React from 'react';
import Group from "../../assets/images/Group.png";

import './jump.css';

function JumpSchoolSection() {
  return (
    <div className= 'bg-jumpschool-section p-5 '>
      <div className='flex justify-between items-center h-full '>
        <div className='w-[50%] mr-5 '>
        <div>
  <h1 className='text-5xl mb-5 font-bold pl-20'>
    Why jump <span className='text-white relative'>
      <span className="after:absolute after:inline-block after:h-1 after:w-full after:bg-pink-500 after:bottom-0 after:left-0"></span>school?
    </span>
  </h1>
</div>

          
          <div className='space-y-5 pl-20 py-3 '>
          <div className='bg-white px-4 pt-2 pb-4 rounded-xl shadow  '>
            <h2 className='text-2xl pb-2 rounded text-pink-500 font-bold'>
               Flexibilité dans l’apprentissage
           </h2>
           <p className='font-semibold pb-2 '>
         80% de pratique, 20% de théorie ! Notre pédagogie basée sur la <br /> 
         réalisation de projets permet de se préparer au monde professionnel et de justifier auprès des recruteurs de hard skills et de soft skills.
           </p>
          </div>



          <div className='bg-white px-3 py-2 rounded-xl shadow'>
            <h2 className='text-2xl p-2 rounded text-pink-500 font-bold'>
               Flexibilité dans l’apprentissage
           </h2>
           <p className='font-semibold'>
         80% de pratique, 20% de théorie ! Notre pédagogie basée sur la <br /> 
         réalisation de projets permet de se préparer au monde professionnel et de justifier auprès des recruteurs de hard skills et de soft skills.
           </p>
          </div>
            <div className='bg-white px-3 py-2 rounded-xl shadow'>
            <h2 className='text-2xl p-2 rounded text-pink-500 font-bold'>
               Flexibilité dans l’apprentissage
           </h2>
           <p className='font-semibold'>
         80% de pratique, 20% de théorie ! Notre pédagogie basée sur la <br /> 
         réalisation de projets permet de se préparer au monde professionnel et de justifier auprès des recruteurs de hard skills et de soft skills.
           </p>
          </div>

          </div>
        </div>
        <div className=' flex justify-center items-end w-[40%] h-[100%] p-[5%]'>
          <img src={Group} alt='Group' className=''/>
        </div>
      </div>
    </div>
  );
}

export default JumpSchoolSection;
