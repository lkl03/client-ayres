import React, {useState} from "react";
import Head from "next/head";
import { InstagramEmbed } from 'react-social-media-embed';

import { heroimg, logofooter, logofooteralt, logonav, logonavalt, flyer1, flyer2, publi1, publi2, publi3, publi4 } from "../assets";

import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaBath } from 'react-icons/fa';
import { MdElectricBolt, MdOutlineWaterDrop, MdFormatPaint, MdOutlineCarpenter, MdLightbulb } from 'react-icons/md';
import { GiGasStove, GiPaintBucket } from 'react-icons/gi';
import { TbAirConditioning } from 'react-icons/tb';
import ContactFormOverlay from "../components/ContactFormOverlay";

const Home = () => {

  const [tiles, setTiles] = useState([false, false, false, false, false]);

  const changeTile = (index, value) => {
    const newTiles = [...tiles];
    newTiles.fill(false).splice(index, 1, value);
    setTiles(newTiles);
  };

  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center md:bg-fixed" style={{ backgroundImage: `url(${heroimg.src})` }}>
      <Head>
        <title>My Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <nav className="bg-[#3683DC75] text-black p-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logonav.src} alt="Logo" className="md:w-[250px] w-[175px] h-auto md:ml-10" />
        </div>
        <div className="flex items-center">
          <img src={logonavalt.src} alt="Logo alternativo" className="md:w-[100px] w-[60px] h-auto md:mr-10" />
        </div>
      </nav>

      <a href="https://api.whatsapp.com/send?phone=5492644051652" target="_blank" rel="noopener noreferrer" class="fixed bottom-4 left-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full flex flex-wrap gap-1 items-center justify-center">
        <span className="text-3xl"><FaWhatsapp/></span> <span className="sm:block hidden">Escribinos por WhatsApp</span>
      </a>

      {/* Hero */}
      <div className="flex-1">
        <div className="bg-[#3683DC75] w-full md:h-screen md:py-0 py-10 flex items-center justify-center">
          <div className="w-full max-w-6xl px-4">
            <div className="flex flex-col sm:flex-row justify-center items-center">
              <div className="md:w-2/5 md:mr-4 mb-8 md:mb-0">
                <div className="flex flex-col flex-wrap gap-5">
                {['Quiénes Somos', 'Abonos Mensuales', 'Nuestros Servicios', 'Redes', 'Obras y Clientes'].map((label, index) => (
                  <button
                    key={index}
                    onMouseEnter={() => changeTile(index, true)}
                    onMouseLeave={() => changeTile(index, false)}
                    className="gradient-background text-white py-4 px-4 rounded-s-md rounded-e-xl hover:shadow-[8px_0px_8px_rgba(255,255,255,0.1)] focus:shadow-[8px_0px_8px_rgba(255,255,255,0.1)] focus:outline-none hover:bg-[#3683DC] focus:bg-[#3683DC] font-bold uppercase sm:text-xl transition-all ease-in-out"
                  >
                    {label}
                  </button>
                ))}
                <ContactFormOverlay />
                <button className="gradient-background text-white py-4 px-4 rounded-s-md rounded-e-xl hover:shadow-[8px_0px_8px_rgba(255,255,255,0.1)] focus:shadow-[8px_0px_8px_rgba(255,255,255,0.1)] focus:outline-none hover:bg-[#3683DC] focus:bg-[#3683DC] font-bold uppercase sm:text-xl transition-all ease-in-out">
                  Cotizador Online
                </button>
                </div>
              </div>
              <div className="md:w-2/5">
                {tiles.some(tile => tile === true) ? (
                  null
                ) : 
                <div className="flex flex-wrap gap-2 items-center justify-center">
                <img src={publi1.src} alt="Publicidad 1" className="sm:w-[175px] w-[125px] h-auto rounded-md" />
                <img src={publi2.src} alt="Publicidad 2" className="sm:w-[175px] w-[125px] h-auto rounded-md" />
                <img src={publi3.src} alt="Publicidad 3" className="sm:w-[175px] w-[125px] h-auto rounded-md" />
                <img src={publi4.src} alt="Publicidad 4" className="sm:w-[175px] w-[125px] h-auto rounded-md" />
                </div>
                }
                {tiles[0] ?
                  <div className="border-[#0022ff85] bg-[#0022ff85] border-2 py-4 px-4 rounded-md text-white shadow-[8px_0px_8px_rgba(0,0,0,0.25)]">
                    <p className="sm:text-lg text-base text-start">
                      <span className="font-bold text-white">AYRES</span> es un emprendimiento sanjuanino conformado por jóvenes profesionales que ofrece soluciones de mantenimiento integral personalizado en función de la actividad que llevan a cabo nuestros clientes, teniendo en cuenta las instalaciones y los requerimientos de la prestación para hogares o empresas. <br></br> <br></br>
                      La diversidad de soluciones se encuentra atravesada por un mismo compromiso con la calidad, la seguridad y el medio ambiente. <br></br> <br></br>
                      <span className="font-bold text-white"> AYRES</span> te ayuda a que puedas realizar ese proyecto que tenes en mente para tu hogar o el mantenimiento preventivo del establecimiento de tu empresa.
                    </p>
                  </div>
                  : ''
                }
                {tiles[1] ?
                  <div className="border-white bg-white border-2 py-4 px-4 rounded-md text-white shadow-[8px_0px_8px_rgba(0,0,0,0.25)]">
                  <img src={flyer1.src} alt="flyer1" className="w-full h-auto pointer-events-none" />
                  <img src={flyer2.src} alt="flyer2" className="w-full h-auto pointer-events-none" />
                  </div>

                  : ''
                }
                {tiles[2] ? 
                  <div className="border-[#0022ff85] bg-[#0022ff85] border-2 py-4 px-4 rounded-md text-white shadow-[8px_0px_8px_rgba(0,0,0,0.25)]">
                    <p className="sm:text-lg text-base text-center">
                      <span className="font-bold text-white uppercase">Nuestros Servicios</span>
                      <ul className="mt-4">
                        <li className="flex flex-row flex-wrap gap-1 font-bold"><span className="text-3xl text-white"><MdOutlineWaterDrop /></span>Plomería</li>
                        <li className="flex flex-row flex-wrap gap-1 font-bold"><span className="text-3xl text-white"><GiPaintBucket /></span>Durlock y Albañilería</li>
                        <li className="flex flex-row flex-wrap gap-1 font-bold"><span className="text-3xl text-white"><MdOutlineCarpenter /></span>Carpintería</li>
                        <li className="flex flex-row flex-wrap gap-1 font-bold"><span className="text-3xl text-white"><MdFormatPaint /></span>Pintura</li>
                        <li className="flex flex-row flex-wrap gap-1 font-bold"><span className="text-3xl text-white"><FaBath /></span>Sanitarios</li>
                        <li className="flex flex-row flex-wrap gap-1 font-bold"><span className="text-3xl text-white"><GiGasStove /></span>Gas</li>
                        <li className="flex flex-row flex-wrap gap-1 font-bold"><span className="text-3xl text-white"><TbAirConditioning /></span>Aires Acondicionados</li>
                        <li className="flex flex-row flex-wrap gap-1 font-bold"><span className="text-3xl text-white"><MdElectricBolt /></span>Electricidad</li>
                        <li className="flex flex-row flex-wrap gap-1 font-bold"><span className="text-3xl text-white"><MdLightbulb /></span>Iluminación</li>
                      </ul>
                      Y muchos más!
                    </p>
                  </div>
                  
                  : ''
                }
                {tiles[3] ? 
                  <div className="border-white bg-white border-2 py-4 px-4 rounded-md text-black shadow-[8px_0px_8px_rgba(0,0,0,0.25)]">
                  <InstagramEmbed url="https://www.instagram.com/p/CrLEgJ5uMTq/?utm_source=ig_web_copy_link" width="100%" />
                  </div> 
                  
                  : ''
                }
                {tiles[4] ? 
                  'text5' 
                  
                  : ''
                }
              </div>
            </div>
            <p className="text-md sm:text-lg md:text-xl mb-4 text-center text-white uppercase font-medium mt-4">
                Mantenimiento a empresas e instituciones educativas y hogar
                </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#3683DC75] text-white p-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row gap-5 items-center md:ml-[25%] md:mb-0 mb-8">
          <a href="https://api.whatsapp.com/send?phone=5492644051652" target="_blank" rel="noopener noreferrer" className="ml-2 hover:text-[#0022ff] text-sm sm:text-base flex items-center gap-1 font-medium transition-all ease-in-out"><span className="text-[#00bb2d] text-2xl"><FaWhatsapp /></span> 2644051652</a>
          <a href="https://api.whatsapp.com/send?phone=5492645215000" target="_blank" rel="noopener noreferrer" className="ml-2 hover:text-[#0022ff] text-sm sm:text-base flex items-center gap-1 font-medium transition-all ease-in-out"><span className="text-[#00bb2d] text-2xl"><FaWhatsapp /></span> 2645215000</a>
          <a href="mailto:infoaires.sas@gmail.com" target="_blank" rel="noopener noreferrer" className="ml-2 hover:text-[#0022ff] text-sm sm:text-base flex items-center gap-1 font-medium transition-all ease-in-out"><span className="text-red-500 text-2xl" ><FaEnvelope /></span> infoaires.sas@gmail.com</a>
          <a href="https://goo.gl/maps/sqX2QbMQgvzsqF646" target="_blank" rel="noopener noreferrer" className="ml-2 hover:text-[#0022ff] text-sm sm:text-base sm:text-start text-center flex items-center gap-1 font-medium transition-all ease-in-out"><span className="text-[#0022FF] text-2xl"><FaMapMarkerAlt /></span> Oficina: Calle Entre Ríos 859 Sur – Capital – San Juan</a>
        </div>
        <img src={logofooteralt.src} alt="Logo" className="w-[180px] h-auto" />
      </footer>
    </div>
  );
};

export default Home;