import React from 'react';
import logoCarde from "../../assets/images/Formation-proposé/logoCarde.png";
import './cartes.css';

function Cartes() {
  return (
    <div className="section-container column_holder mt-16 w-full mx-auto">

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-12 w-3/4 max-sm:w-9/10 lg-custom-width mx-auto">

        {/* Card 1 */}
        <div className="relative">
          <div className="rounded-3xl bg-blue-200 bg-carde relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex flex-row items-center justify-center mb-4">
                <div className="w-1/6 mr-4 pt-2">
                  <img
                    src={logoCarde}
                    alt="image_formation"
                    className="w-3/4 h-3/4 object-cover"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center pt-16 pb-40 text-3xl font-bold text-center text-white">
                <h3>Développement Web </h3>
              </div>
              <div className="bottom_card z-20 hover:bg-customPink hover:text-white">
                <button className='text-customPink hover:text-white text-button flex flex-col items-center justify-center text-xl font-bold'>
                  découvrir la formation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
<div className="relative">
          <div className="rounded-3xl bg-customPink bg-carde relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex flex-row items-center justify-center mb-4">
                <div className="w-1/6 mr-4 pt-2">
                  <img
                    src={logoCarde}
                    alt="image_formation"
                    className="w-3/4 h-3/4 object-cover"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center pt-16 pb-40 text-3xl font-bold text-center text-white">
                <h3>UX/UI Design</h3>
              </div>
              <div className="bottom_card z-20 hover:bg-customPink hover:text-white">
                <button className='text-customPink hover:text-white text-button flex flex-col items-center justify-center text-xl font-bold'>
                  découvrir la formation
                 </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative">
          <div className="rounded-3xl bg-blue-700 bg-carde relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex flex-row items-center justify-center mb-4">
                <div className="w-1/6 mr-4 pt-2">
                  <img
                    src={logoCarde}
                    alt="image_formation"
                    className="w-3/4 h-3/4 object-cover"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center pt-16 pb-40 text-3xl font-bold text-center text-white">
                <h3>Marketing Digital</h3>
              </div>
              <div className="bottom_card z-20 hover:bg-customPink">
                <button className='text-customPink hover:text-white text-button flex flex-col items-center justify-center text-xl font-bold'>
                  découvrir la formation
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-3/4 max-sm:w-9/10 lg-custom-width mx-auto max-2xl:flex justify-center items-center pt-10">

        {/* Card 4 */}
        <div className="relative ">
          <div className="rounded-3xl bg-blue-900 bg-carde relative overflow-hidden px-7">
            <div className="relative z-10">
              <div className="flex flex-row items-center justify-center mb-4">
                <div className="w-1/6 mr-4 pt-2">
                  <img
                    src={logoCarde}
                    alt="image_formation"
                    className="w-3/4 h-3/4 object-cover"
                  />
                </div>
              </div>
              <div className="flex px-7 items-center justify-center pt-16 pb-40 text-3xl font-bold text-center text-white ">
                <h3>Recrutement </h3>
              </div>
              <div className="bottom_card z-20 hover:bg-customPink hover:text-white">
                <button className='text-customPink hover:text-white text-button  flex flex-col items-center justify-center text-xl font-bold'>
                  découvrir la formation
                </button>
              </div>
            </div>
          </div>
        </div>



        {/* Card 5 */}
        <div className="relative">
          <div className="rounded-3xl bg-red-200 bg-carde relative overflow-hidden  px-8">
            <div className="relative z-10">
              <div className="flex flex-row items-center justify-center mb-4">
                <div className="w-1/6 mr-4 pt-2">
                  <img
                    src={logoCarde}
                    alt="image_formation"
                    className="w-3/4 h-3/4 object-cover"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center pt-16 pb-40 text-3xl font-bold text-center text-white px-6">
                <h3>UX/UI Design </h3>
              </div>
              <div className="bottom_card z-20 hover:bg-customPink ">
                <button className='text-customPink hover:text-white text-button flex flex-col items-center justify-center text-xl font-bold'>
                  découvrir la formation
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>



    </div>
  );
}

export default Cartes;
