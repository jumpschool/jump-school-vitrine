import React from 'react';

export default function Message() {
    return (
        <div className="w-full mt-4">
            <label
                className="after:content[''] pointer-events-none text-sm mt-9 flex h-full w-full select-none !overflow-visible truncate text-[11px] leading-tight text-black transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 font-semibold">
                Message <span className={'text-rose-600  ml-1'}>*</span>
            </label>
            <textarea name="message"
                      className=" mt-4 textarea block w-full px-5 py-3  placeholder-gray-400 bg-slate-900 bg-opacity-0  border-2  rounded border-black
                                            dark:placeholder-gray-600  text-white dark:border-gray-700 outline-none"
                      placeholder=""></textarea>
        </div>
    );
}

