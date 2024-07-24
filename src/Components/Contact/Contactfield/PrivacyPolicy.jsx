import {useState } from "react";

import checkbox from "../../../assets/Icons/checkboxJ.png";
import CheckedCheckbox from "../../../assets/Icons/checkedbox.png";

export default function PrivacyPolicy({ isChecked1, setChecked1 }) {
    const [isChecked, setChecked] = useState(false);

    const checkingBox = () => {
        setChecked(!isChecked);
    };

    const checkingBox1 = () => {
        setChecked1(!isChecked1);
    };

    return (
        <>
            <section>
                <div>
                    <p className="mt-4 text-black text-sm mb-5">
                        O'clock s'engage à protéger et à respecter votre vie privée. Nous n'utiliserons vos données personnelles que pour administrer votre compte et vous fournir les produits et services demandés.
                    </p>
                </div>

                <div className="checkbox_policy mb-5 ms-4">
                    <div className="flex items-start">
                        <a onClick={checkingBox} id="link-checkbox" type="checkbox">
                            {isChecked ? <img src={CheckedCheckbox} alt="" /> : <img src={checkbox} alt="" />}
                        </a>
                        <label htmlFor="link-checkbox" className="ms-2 text-sm text-black dark:text-gray-300">
                            J'accepte de recevoir d'autres communications de O'clock.
                        </label>
                    </div>
                    <div className="flex items-start required">
                        <a onClick={checkingBox1} id="link-checkbox" type="checkbox">
                            {isChecked1 ? <img src={CheckedCheckbox} alt="" /> : <img src={checkbox} alt="" />}
                        </a>
                        <label htmlFor="link-checkbox" className="ms-2 text-sm text-black dark:text-gray-300 required">
                            J'accepte d'être contacté par un conseiller pour recevoir une réponse.*
                        </label>
                    </div>
                </div>
                <div className="checkbox_policy">
                    <p className="text-sm mb-4">Vous pouvez vous désabonner de ces communications à tout moment.</p>
                    <p className="text-sm mb-4" id="ImportantCheck">En cliquant sur « Envoyer » ci-dessous, vous autorisez l’entreprise O'clock à stocker et traiter les données personnelles soumises ci-dessus afin qu’elle vous fournisse le contenu demandé.</p>
                    <p className="font-medium text-sm">* les champs obligatoires</p>
                </div>
            </section>
        </>
    );
}
