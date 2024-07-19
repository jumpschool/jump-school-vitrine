import React from 'react';

function SendMessage() {
    function checkBox(){
        document.getElementById("ImportantCheck").required = true;
    }
    return (
        <button onclick={{checkBox}}
            className="envoyer absolute  right-0 w-fit px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-md border border-black hover:bg-rose-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
            Envoyer
        </button>
    );
}

export default SendMessage;