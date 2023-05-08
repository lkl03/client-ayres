import { useState } from "react";
import Head from "next/head";
import useFirebaseCollection from "../hooks/useFirebaseCollection";
import { heroimg } from "../assets";
import Navbar from "../components/Navbar";

import { useForm, ValidationError } from '@formspree/react';

const cotizador = () => {
    const categories = useFirebaseCollection("cotizador");
    const [selectedService, setSelectedService] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [submitted, setSubmitted] = useState(false);


    const calculateEstimatedPrice = (ancho, largo, alto, pricePerSquareMeter) => {
        const totalMeters = ancho * largo * alto;
        const estimatedPrice = totalMeters * pricePerSquareMeter;
        return estimatedPrice;
    };

    const [estimatedPrice, setEstimatedPrice] = useState(0);

    const handleEstimationInputsChange = (event) => {
        const { ancho, largo, alto, service } = event.target.form.elements;

        const selectedService = categories
            .flatMap((category) => category.servicios)
            .find((serv) => serv.servicio === service.value);

        if (!selectedService) {
            setEstimatedPrice(0);
            return;
        }

        const pricePerSquareMeter = selectedService.valorM2;
        const newEstimatedPrice = calculateEstimatedPrice(
            parseFloat(ancho.value) || 0,
            parseFloat(largo.value) || 0,
            parseFloat(alto.value) || 0,
            pricePerSquareMeter
        );
        setEstimatedPrice(newEstimatedPrice);
    };

    const [state, handleSubmit] = useForm("xyyokopn");

    if (!categories) {
        return <div>Loading...</div>;
    }


    return (
        <div className="min-h-screen flex flex-col bg-cover bg-center md:bg-fixed" style={{ backgroundImage: `url(${heroimg.src})` }}>
            <Head>
                <title>My Website</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <div className="bg-[#3683DC95] w-full md:min-h-screen md:py-0 py-10 flex items-center justify-center">
                <div className="container mx-auto px-4 py-20">
                    <h2 className="text-white md:text-3xl text-center mt-4 mb-4 uppercase font-bold">Cotizador Online</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category)}
                                className="border-2 border-white bg-white text-[#3683DC] p-4 rounded-md text-center font-semibold focus:outline-none uppercase"
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                    {selectedCategory && (
                        <div className="mt-8">
                            <div className="flex flex-col md:flex-row items-center md:space-x-4">
                                <img
                                    src={selectedCategory.image}
                                    alt={selectedCategory.name}
                                    className="w-full md:w-1/2"
                                />
                                <div className="mt-4 md:mt-0 text-white">{selectedCategory.description}</div>
                            </div>
                            <form className="mt-2 space-y-4">
                            <div className="space-y-4 bg-[#3683DC] p-4 mt-4 rounded-md">
                                <h3 className="text-white text-xl font-semibold">
                                    Calcular precio estimado
                                </h3>
                                <p className="text-white font-medium">(Los cálculos son estimativos a modo de referencia de precios.)</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <select
                                        name="service"
                                        className="border-2 border-gray-300 px-3 py-2 rounded-md w-full"
                                        onChange={handleEstimationInputsChange}
                                        required
                                    >
                                        <option value="">Seleccione un servicio</option>
                                        {categories
                                            .flatMap((category) => category.servicios)
                                            .map((service) => (
                                                <option key={service.servicio} value={service.servicio}>
                                                    {service.servicio}
                                                </option>
                                            ))}
                                    </select>
                                    <input
                                        type="number"
                                        name="ancho"
                                        placeholder="Ancho (m) -si no es necesario por favor escriba '1'-"
                                        className="border-2 border-gray-300 px-3 py-2 rounded-md w-full"
                                        onChange={handleEstimationInputsChange}
                                        required
                                    />
                                    <input
                                        type="number"
                                        name="largo"
                                        placeholder="Largo (m) -si no es necesario por favor escriba '1'-"
                                        className="border-2 border-gray-300 px-3 py-2 rounded-md w-full"
                                        onChange={handleEstimationInputsChange}
                                        required
                                    />
                                    <input
                                        type="number"
                                        name="alto"
                                        placeholder="Alto (m) -si no es necesario por favor escriba '1'-"
                                        className="border-2 border-gray-300 px-3 py-2 rounded-md w-full"
                                        onChange={handleEstimationInputsChange}
                                        required
                                    />
                                </div>
                                <div className="text-right text-white font-semibold">
                                    Precio estimado: ${estimatedPrice.toFixed(2)}
                                </div>
                                <input type="hidden" name="precio-estimado" value={estimatedPrice.toFixed(2)} />
                            </div>
                            </form>
                            <div className="mt-4">
                            <h3 className="text-white text-xl font-semibold">Contactanos y nos comunicaremos a la brevedad para coordinar un presupuesto.</h3>
                            </div>
                            <form onSubmit={handleSubmit} className="mt-2 space-y-4">
                                {/* Nombre y apellido */}
                                <input
                                    type="text"
                                    placeholder="Nombre y apellido"
                                    className="border-2 border-gray-300 px-3 py-2 rounded-md w-full"
                                    required
                                />

                                {/* Email */}
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="border-2 border-gray-300 px-3 py-2 rounded-md w-full"
                                    required
                                />

                                {/* Telefono */}
                                <input
                                    type="tel"
                                    placeholder="Teléfono"
                                    className="border-2 border-gray-300 px-3 py-2 rounded-md w-full"
                                    required
                                />

                                {/* Provincia/Región */}
                                <select
                                    className="border-2 border-gray-300 px-3 py-2 rounded-md w-full"
                                    required
                                >
                                    <option value="">Seleccione una zona</option>
                                    <option value="Barreal">Barreal</option>
                                    <option value="Caucete">Caucete</option>
                                    <option value="Las Flores">Las Flores</option>
                                    <option value="Rivadavia">Rivadavia</option>
                                    <option value="Santa Lucía">Santa Lucía</option>
                                    <option value="Valle Fértil">Valle Fértil</option>
                                    <option value="Bella Vista">Bella Vista</option>
                                    <option value="Iglesia">Iglesia</option>
                                    <option value="Pismanta">Pismanta</option>
                                    <option value="Rodeo">Rodeo</option>
                                    <option value="Tudcum">Tudcum</option>
                                    <option value="Vallecito">Vallecito</option>
                                    <option value="Calingasta">Calingasta</option>
                                    <option value="Jachal">Jachal</option>
                                    <option value="Rawson">Rawson</option>
                                    <option value="San Juan Capital">San Juan Capital</option>
                                    <option value="Ullum">Ullum</option>
                                    <option value="Zonda">Zonda</option>
                                </select>

                                {/* Domicilio */}
                                <input
                                    type="text"
                                    placeholder="Domicilio"
                                    className="border-2 border-gray-300 px-3 py-2 rounded-md w-full"
                                    required
                                />

                                {/* Localidad/Barrio */}
                                <input
                                    type="text"
                                    placeholder="Localidad/Barrio"
                                    className="border-2 border-gray-300 px-3 py-2 rounded-md w-full"
                                    required
                                />

                                {/* Mejor horario para llamarte */}
                                <div className="flex flex-wrap">
                                    <label className="block w-full mb-2 text-white">Mejor horario para llamarte:</label>
                                    <input
                                        type="text"
                                        placeholder="Mañana/Mediodia/Tarde/Noche"
                                        className="border-2 border-gray-300 px-3 py-2 rounded-md w-full"
                                        required
                                    />
                                </div>

                                {/* Mejor día para llamarte */}
                                <div className="flex flex-wrap">
                                    <label className="block w-full mb-2 text-white">Mejor día para llamarte:</label>
                                    {/* Replace with the actual list of days */}
                                    <input
                                        type="text"
                                        placeholder="Lunes/Martes/Miercoles/Jueves/Viernes/Sabado/Domingo"
                                        className="border-2 border-gray-300 px-3 py-2 rounded-md w-full"
                                        required
                                    />
                                </div>

                                {/* Textarea */}
                                <textarea
                                    placeholder="Mensaje"
                                    className="border-2 border-gray-300 px-3 py-2 rounded-md w-full"
                                    rows="4"
                                    required
                                ></textarea>
                                {/* Other form inputs */}
                                <button
                                    type="submit"
                                    className="border-white bg-white text-[#3683DC] px-4 py-2 rounded-md w-full"
                                >
                                    Enviar
                                </button>
                            </form>
                        </div>
                    )}
                    {state.succeeded && (
                        <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md">
                            Mensaje enviado! Pronto nos contactaremos con vos, gracias!
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};

export default cotizador;