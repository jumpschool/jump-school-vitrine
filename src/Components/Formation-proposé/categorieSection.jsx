import React from 'react';
import Frame from "../../assets/images/Frame.png";

export default function CategorieSection() {
  return (
    <div className="mx-5">
      <div className="flex justify-between items-center p-5">
        <div className="flex items-center">
          <img src={Frame} alt="" className="w-12 h-12"/>
          <h3 className="text-3xl font-bold ml-2 font-custom">Formations certifiantes</h3>
        </div>
        <div className="flex items-center">
          <img src={Frame} alt="" className="w-12 h-12"/>
          <h3 className="text-3xl font-bold ml-2 font-custom">Eligibles au CPF</h3>
        </div>
        <div className="flex items-center">
          <img src={Frame} alt="" className="w-12 h-12"/>
          <h3 className="text-3xl font-bold ml-2 font-custom">Remote friendly</h3>
        </div>
      </div>
    </div>
  );
}
