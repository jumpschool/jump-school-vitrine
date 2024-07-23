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
    useEffect(() => {
        // Load HubSpot Form Script
        const script = document.createElement('script');
        script.src = 'https://js.hsforms.net/forms/v2.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        // Cleanup function to remove the script after component unmounts
        return () => {
            document.body.removeChild(script);
        }
    }, []);

    useEffect(() => {
        if (window.hbspt) {
            window.hbspt.forms.create({
                portalId: '',
                formId: '',
                target: '#hubspot-form',
                // inlineMessage: 'Thanks for contacting us!',
                onFormSubmit: () => toast.success('Form submitted successfully!')
            });
        }
    }, []);

    return (
        <div>
            <div id="hubspot-form"></div>
        </div>
    );
}