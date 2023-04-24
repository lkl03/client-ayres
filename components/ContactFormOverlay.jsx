import React, { useState } from "react";

import { FaTimes } from "react-icons/fa";

const ContactFormOverlay = () => {
    const [showOverlay, setShowOverlay] = useState(false);

    const toggleOverlay = () => {
        setShowOverlay(!showOverlay);
    };

    return (
        <>
            <button
                onClick={toggleOverlay}
                className="gradient-background text-white py-4 px-4 rounded-s-md rounded-e-xl hover:shadow-[8px_0px_8px_rgba(255,255,255,0.1)] focus:shadow-[8px_0px_8px_rgba(255,255,255,0.1)] focus:outline-none hover:bg-[#3683DC] focus:bg-[#3683DC] font-bold uppercase sm:text-xl transition-all ease-in-out">
                Contactanos
            </button>

            {showOverlay && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
                    <form className="bg-white p-8 rounded-lg w-full max-w-screen-md mx-auto">
                        <div className="flex justify-end mb-4">
                            <FaTimes onClick={toggleOverlay} size={30} className="cursor-pointer hover:text-red-600 transition-all ease-in-out"  />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Nombre y apellido"
                                className="px-4 py-2 border border-gray-300 rounded-lg col-span-full focus:outline-[#0022ff]"
                            />
                            <input
                                type="text"
                                name="phone"
                                placeholder="Teléfono"
                                className="px-4 py-2 border border-gray-300 rounded-lg col-span-full focus:outline-[#0022ff]"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="px-4 py-2 border border-gray-300 rounded-lg col-span-full focus:outline-[#0022ff]"
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="Mensaje"
                            className="px-4 py-2 border border-gray-300 rounded-lg w-full mt-4 h-40 focus:outline-[#0022ff]"
                        />
                        <button
                            type="submit"
                            className="bg-[#0022ff] hover:bg-[#3683DC] text-white py-4 px-4 rounded-lg w-full mt-4 transition-all ease-in-out"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};

export default ContactFormOverlay;