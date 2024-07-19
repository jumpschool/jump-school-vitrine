import { useRef, useState } from "react";
import FirstName from './Contactfield/FirstName'
import LastName from './Contactfield/LastName'
import Message from "./Contactfield/Message";
import Email from "./Contactfield/Email";
import PhoneNumber from "./Contactfield/PhoneNumber";
import PrivacyPolicy from "./Contactfield/PrivacyPolicy";
import SendMessage from "./Contactfield/SendMessage";

export default function ContactForm(){

    const form = useRef();
    const [isChecked1, setChecked1] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        if (!isChecked1) {
            toast.error("Veuillez accepter les champs obligatoires pour continuer.");
            return;
        }
    }

    return (
        <>
        <div className="relative">
                <div className="second-contact-background"></div>
                <div className="second-contact-background-text flex justify-center">
                    <h2 className="text-white font-bold text-3xl">Envoyez-nous<span className="text-[#39DDF5]"> un message !</span></h2>
                </div>
            </div>
            <Toaster />
            <div className="min-h-screen .bg-slate-900 text-amber-50 overflow-x-hidden h-full w-[98vw] flex !justify-center m-auto">
                <div className="container px-6 py-10 mx-auto">
                    <div className="lg:flex lg:items-center lg:-mx-10 justify-center">
                        <div className="lg:w-1/2 lg:mx-10">
                            <form className={'relative mb-[10%] mt-6 max-sm:mt-6'} ref={form} onSubmit={sendEmail}>
                                <div className="-mx-2 md:items-center md:flex">
                                    <FirstName />
                                    <LastName />
                                </div>
                                <div className="-mx-2 md:items-center md:flex">
                                    <PhoneNumber />
                                    <Email />
                                </div>
                                <Message />
                                <PrivacyPolicy 
                                    isChecked1={isChecked1}
                                    setChecked1={setChecked1}
                                />
                                <SendMessage />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        
        
        </>
    )
}