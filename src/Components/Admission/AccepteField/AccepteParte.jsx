import { useState, useEffect } from "react";
import accepteCheckBox from "../../../assets/images/Admission/accepteCheckbox.png";
import checkedCheckBox from "../../../assets/images/Admission/acceptecheckedBox.png";

export default function AccepteParte() {
  const [checkedIndices, setCheckedIndices] = useState([false, false]);

  const handleCheckBoxClick = (event, index) => {
    event.stopPropagation();
    setCheckedIndices((prevState) => {
      const newCheckedIndices = [...prevState];
      newCheckedIndices[index] = !newCheckedIndices[index];
      return newCheckedIndices;
    });
  };

  const handleDocumentClick = () => {
    setCheckedIndices([false, false]);
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <>
      <div className="flex items-center font-Oswald text-gray-900 px-4 md:px-12 lg:px-24 xl:px-48 pb-4">
        <img
          src={checkedIndices[0] ? checkedCheckBox : accepteCheckBox}
          alt="CheckBox"
          className="cursor-pointer"
          onClick={(event) => handleCheckBoxClick(event, 0)}
        />
        <h1 className="ml-2">J'accepte de recevoir d'autres communications de ATA.</h1>
      </div>
      <div className="flex items-center font-Oswald px-4 md:px-12 lg:px-24 xl:px-48 pb-3">
        <img
          src={checkedIndices[1] ? checkedCheckBox : accepteCheckBox}
          alt="CheckBox"
          className="cursor-pointer"
          onClick={(event) => handleCheckBoxClick(event, 1)}
        />
        <h1 className="ml-2 text-gray-900">J'accepte d'être contacté par un conseiller pour recevoir une réponse.*</h1>
      </div>
      <div className="px-4 md:px-12 lg:px-24 xl:px-48 text-gray-900 font-Oswald">
        <p className="pb-4">
          Vous pouvez vous désabonner de ces communications à tout moment.
        </p>
        <p>
          En cliquant sur « Envoyer » ci-dessous, vous autorisez l’entreprise ATA à stocker et traiter les données personnelles soumises ci-dessus <br /> afin qu’elle vous fournisse le contenu demandé.
        </p>
      </div>
    </>
  );
}
