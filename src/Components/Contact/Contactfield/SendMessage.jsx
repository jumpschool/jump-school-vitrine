import React from 'react';

function SendMessage() {
    function checkBox(){
        document.getElementById("ImportantCheck").required = true;
    }
    return (
        <div className='flex h-[10vh] items-end'>
        <button type="submit" onclick={{checkBox}}
            className="text-semibold  bg-rose-600 px-[3%] py-[1%] rounded-md border-2 border-rose-600 hover:bg-white hover:text-rose-600  ">
            Envoyer
        </button>
        </div>
    );
}

export default SendMessage;