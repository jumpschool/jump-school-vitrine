import { useRef, useState } from "react";
import FirstName from './Contactfield/FirstName'
import LastName from './Contactfield/LastName'
import Message from "./Contactfield/Message";
import Email from "./Contactfield/Email";
import PhoneNumber from "./Contactfield/PhoneNumber";
import PrivacyPolicy from "./Contactfield/PrivacyPolicy";
import SendMessage from "./Contactfield/SendMessage";
import toast, { Toaster } from 'react-hot-toast';
import decoration from "../../assets/images/decoration.png"
import React, { useEffect } from 'react';
import './Herosection.css'





export default function ContactForm(){

    // const form = useRef();
    // const [isChecked1, setChecked1] = useState(false);

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     if (!isChecked1) {
    //         toast.error("Veuillez accepter les champs obligatoires pour continuer.");
    //         return;
    //     }
    // }
    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.src = 'https://js.hsforms.net/forms/v2.js';
    //     script.async = true;
    //     script.defer = true;
    //     document.body.appendChild(script);

    //     // Cleanup function to remove the script after component unmounts
    //     return () => {
    //         document.body.removeChild(script);
    //     }
    // }, []);

    useEffect(() => {
        if (window.hbspt) {
            window.hbspt.forms.create({
                portalId: '145061004',
                formId: '842cce6d-c986-4ce6-a12c-2ef003ee631b',
                target: '#hubspot-form',
                // inlineMessage: 'Thanks for contacting us!',
                onFormSubmit: () => toast.success('Form submitted successfully!')
            });
        }
    }, []);

    return (
        <>
    <div className="parent mt-[20%] relative">
        <img src={decoration} alt="" className="absolute top-[-2%]" />
      <div className="main_text bg-rose-200 p-[15%]"> 
         <div id="hubspot-form" className="hubspot-form"></div>
    </div>
    </div>
        

        </>
    );
}