import React from 'react';
import logoCarde from "../../assets/images/Formation-proposé/logoCarde.png";
import './cartes.css';

function Cartes() {
  return (

      <div className=" column_holder mt-16 w-full mx-auto">
        <div className="flex flex-wrap justify-center  gap-12 w-3/4 max-sm:w-9/10 lg-custom-width mx-auto">

          {/* Card 1 */}
          <div className="flex relative h-80">
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
                <div className="flex px-8 items-center justify-center pb-28 pt-16 text-3xl font-bold text-center text-white">
                  <h3 className="title-shadow">Développement<br /> Web</h3>
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
         
          <div className="flex relative h-80">
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
                <div className="flex px-12 items-center justify-center pt-16 pb-36 text-3xl font-bold text-center text-white">
                  <h3 className="title-shadow">UX/UI Design</h3>
                </div>
                <div className="bottom_card z-20 hover:bg-customPink">
                  <button className='text-customPink hover:text-white text-button flex flex-col items-center justify-center text-xl font-bold'>
                    découvrir la formation
                  </button>
                </div>
              </div>
            </div>
          </div>


          {/* Card 3 */}
          <div className="flex relative h-80">
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
                <div className="flex px-5 items-center justify-center pt-16 pb-36 text-3xl font-bold text-center text-white">
                  <h3 className="title-shadow">Marketing Digital</h3>
                </div>
                <div className="bottom_card z-20 hover:bg-customPink">
                  <button className='text-customPink hover:text-white text-button flex flex-col items-center justify-center text-xl font-bold'>
                    découvrir la formation
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex relative h-80">
            <div className="rounded-3xl bg-blue-900 bg-carde relative overflow-hidden">
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
                <div className="flex px-12 items-center justify-center pt-16 pb-36 text-3xl font-bold text-center text-white">
                  <h3 className="title-shadow">Recrutement</h3>
                </div>
                <div className="bottom_card z-20 hover:bg-customPink hover:text-white">
                  <button className='text-customPink hover:text-white text-button flex flex-col items-center justify-center text-xl font-bold'>
                    découvrir la formation
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="flex relative h-80">
      <div className="rounded-3xl bg-red-200 bg-carde relative overflow-hidden">
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
          <div className="flex px-12 items-center justify-center pt-16 pb-36 text-3xl font-bold text-center text-white">
            <h3 className="title-shadow">UX/UI Design</h3>
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
      </div>
  );
}

export default Cartes;
