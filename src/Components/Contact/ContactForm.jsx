import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PrivacyPolicy from "../Contact/Contactfield/PrivacyPolicy"
import SendMessage from "../Contact/Contactfield/SendMessage"
import decoration from "../../assets/images/decoration.png"

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isChecked1, setChecked1] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isChecked1) {
      toast.error("Veuillez accepter les champs obligatoires pour continuer.");
      return;
    }

    const data = {
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
    };

    try {
      const response = await axios.post('https://hook.eu2.make.com/yhja7t6uq6nwyz9fa7wfqykukfi1v92z', data, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log(response);
      toast.success("Votre message a été envoyé avec succès !");
    } catch (error) {
      console.error(error);
      toast.error("Une erreur s'est produite lors de l'envoi du message.");
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
  };

  return (
    <>
     <img src={decoration} alt="" className="absolute top-[75%] z-0 max-sm:hidden sm:max-xl:hidden" />
      <div className="bg-rose-200 ">
        <div className="pt-[6%] max-sm:pt-[20%] max-sm:px-[3%] sm:max-xl:pt-[10%]">
          <div className="second-contact-background-text flex justify-center ">
            <h2 className="text-black font-bold text-4xl max-sm:text-center">Envoyez-nous<span className="text-rose-600"> un message !</span></h2>
          </div>
        </div>
        <div className="min-h-screen .bg-slate-900 text-amber-50 overflow-x-hidden h-full w-[98vw] flex !justify-center m-auto">
          <div className="container px-6 py-10 mx-auto sm:max-xl:!pb-0 ">
            <div className="lg:flex lg:items-center lg:-mx-10 justify-center">
              <div className="lg:w-1/2 lg:mx-10">
                <form onSubmit={handleSubmit} className={'relative mb-[10%] mt-6 max-sm:mt-6'}>
                  <div className="-mx-2 md:items-center md:flex">
                    <div className="flex-1 px-2">
                      <div className="relative h-11 w-full min-w-[200px]">
                        <input name="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)}
                          className="peer h-full w-full border-b border-black bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                        <label
                          className="text-sm font-medium absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate leading-tight text-black transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-xs peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-base peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                          Nom <span className={'text-rose-600 ml-1'}>*</span>
                        </label>
                      </div>
                    </div>
                    <div className="flex-1 px-2 mt-4 md:mt-0">
                      <div className="relative h-11 w-full min-w-[200px]">
                        <input name="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} type={"text"}
                          className="peer h-full w-full border-b border-black bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                        <label
                          className="text-sm font-medium after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-black !overflow-visible truncate leading-tight transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-base peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                          Prénom <span className={'text-rose-600  ml-1'}>*</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="-mx-2 md:items-center md:flex">
                    <div className="flex-1 px-2">
                      <div className="relative h-11 w-full min-w-[200px] mt-9">
                        <input type="number" name="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
                          className="peer h-full w-full border-b border-black bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                        <label
                          className="text-sm font-medium pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate leading-tight text-black transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-base peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                          Téléphone <span className={'text-rose-600  ml-1'}>*</span>
                        </label>
                      </div>
                    </div>
                    <div className="flex-1 px-2 mt-4 md:mt-0">
                      <div className="relative h-11 w-full min-w-[200px] mt-9">
                        <input type={"email"} name="email" value={email} onChange={(e) => setEmail(e.target.value)}
                          className="peer h-full w-full border-b border-black bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border-blue-gray-200  disabled:border-0  placeholder:opacity-0 focus:placeholder:opacity-100" />
                        <label
                          className="text-sm font-medium after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] leading-tight text-black transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-base peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                          Email <span className={'text-rose-600  ml-1'}>*</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-4">
                    <label className="after:content[''] pointer-events-none text-sm mt-9 flex h-full w-full select-none !overflow-visible truncate text-[11px] leading-tight text-black transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 font-semibold">
                      Message <span className={"text-rose-600  ml-1"}>*</span>
                    </label>
                    <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)}
                      className="mt-4 textarea block w-full px-5 py-3 bg-slate-900 bg-opacity-0 border-2 rounded border-black text-white dark:border-gray-700 outline-none"
                    ></textarea>
                  </div>
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
        <ToastContainer />
      </div>
    </>
  );
}
