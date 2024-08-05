import { useState, useEffect } from "react";
import uncheckedCheckBox from "../../../assets/images/Admission/checkBox.png";
import checkedCheckBox from "../../../assets/images/Admission/checkedCheckBox.png"; 

export default function CurrentStatus() {
  const [checkedIndex, setCheckedIndex] = useState(null);

  const handleCheckBoxClick = (event, index) => {
    event.stopPropagation(); 
    setCheckedIndex(index);
  };

  const handleDocumentClick = () => {
    setCheckedIndex(null);
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div className="flex-1 px-4 sm:px-2 mt-4">
      <div className="relative h-11 w-full min-w-[200px] mt-7">
        <h1
          className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate !text-lg leading-tight text-black transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 font-semibold"
        >
          Votre Situation Actuelle
        </h1>
      </div>
      <div className="flex items-center mt-4 font-bold">
        <img
          src={checkedIndex === 0 ? checkedCheckBox : uncheckedCheckBox}
          alt="CheckBox"
          className="cursor-pointer"
          onClick={(event) => handleCheckBoxClick(event, 0)}
        />
        <h1 className="ml-2">Étudiants / poursuite d'études</h1>
      </div>
      <div className="flex items-center mt-4 font-bold">
        <img
          src={checkedIndex === 1 ? checkedCheckBox : uncheckedCheckBox}
          alt="CheckBox"
          className="cursor-pointer"
          onClick={(event) => handleCheckBoxClick(event, 1)}
        />
        <h1 className="ml-2">Demandeur d’emploi / en reconversion</h1>
      </div>
    </div>
  );
}
