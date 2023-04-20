import React, {useState} from "react";
import Head from "next/head";
import { InstagramEmbed } from 'react-social-media-embed';

import { heroimg, logofooter, logofooteralt, logonav, logonavalt, flyer1, flyer2, publi1, publi2, publi3, publi4 } from "../assets";

import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaBath } from 'react-icons/fa';
import { MdElectricBolt, MdOutlineWaterDrop, MdFormatPaint, MdOutlineCarpenter, MdLightbulb } from 'react-icons/md';
import { GiGasStove, GiPaintBucket } from 'react-icons/gi';
import { TbAirConditioning } from 'react-icons/tb';

const Home = () => {

  const [tiles, setTiles] = useState([false, false, false, false, false]);

  const changeTile = (index) => {
    const newTiles = [...tiles];
    if (newTiles[index]) {
      newTiles[index] = false;
    } else {
      newTiles.fill(false).splice(index, 1, true);
    }
    setTiles(newTiles);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>My Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <nav className="bg-white text-black p-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logonav.src} alt="Logo" className="w-[175px] h-auto md:ml-10" />
        </div>
        <div className="flex items-center">
          <img src={logonavalt.src} alt="Logo alternativo" className="md:w-[100px] w-[60px] h-auto md:mr-10" />
        </div>
      </nav>

      <a href="https://api.whatsapp.com/send?phone=5492644051652" target="_blank" rel="noopener noreferrer" class="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full flex flex-wrap gap-1 items-center justify-center">
        <span className="text-3xl"><FaWhatsapp/></span> <span className="sm:block hidden">Escribinos por WhatsApp</span>
      </a>

      {/* Hero */}
      <div className="flex-1 bg-cover bg-center" style={{ backgroundImage: `url(${heroimg.src})` }}>
        <div className="bg-[#3683DC75] w-full md:h-screen md:py-0 py-10 flex items-center justify-center">
          <div className="w-full max-w-6xl px-4">
            <div className="flex flex-col sm:flex-row justify-center items-center">
              <div className="md:w-2/5 md:mr-4 mb-8 md:mb-0">
                <div className="flex flex-col flex-wrap gap-5">
                  <button onClick={() => changeTile(0)} style={{backgroundColor: !tiles[0] ? '#0022FF' : '#3683DC' }} className=" text-white py-4 px-4 rounded-s-md rounded-e-xl shadow-[8px_0px_8px_rgba(0,0,0,0.15)] hover:shadow-[8px_0px_8px_rgba(255,255,255,0.1)] focus:shadow-[8px_0px_8px_rgba(255,255,255,0.1)] focus:outline-none focus:bg-[#3683DC] font-bold uppercase sm:text-xl transition-all ease-in-out">
                    Quiénes Somos
                  </button>
                  <button onClick={() => changeTile(1)} style={{backgroundColor: !tiles[1] ? '#0022FF' : '#3683DC' }} className="text-white py-4 px-4 rounded-s-md rounded-e-xl shadow-[8px_0px_8px_rgba(0,0,0,0.15)] hover:shadow-[8px_0px_8px_rgba(255,255,255,0.1)] focus:shadow-[8px_0px_8px_rgba(255,255,255,0.1)] focus:outline-none focus:bg-[#3683DC] font-bold uppercase sm:text-xl transition-all ease-in-out">
                    Abonos Mensuales
                  </button>
                  <button onClick={() => changeTile(2)} style={{backgroundColor: !tiles[2] ? '#0022FF' : '#3683DC' }} className=" text-white py-4 px-4 rounded-s-md rounded-e-xl shadow-[8px_0px_8px_rgba(0,0,0,0.15)] hover:shadow-[8px_0px_8px_rgba(255,255,255,0.1)] focus:shadow-[8px_0px_8px_rgba(255,255,255,0.1)] focus:outline-none focus:bg-[#3683DC] font-bold uppercase sm:text-xl transition-all ease-in-out">
                    Nuestros Servicios
                  </button>
                  <button onClick={() => changeTile(3)} style={{backgroundColor: !tiles[3] ? '#0022FF' : '#3683DC' }} className="text-white py-4 px-4 rounded-s-md rounded-e-xl shadow-[8px_0px_8px_rgba(0,0,0,0.15)] hover:shadow-[8px_0px_8px_rgba(255,255,255,0.1)] focus:shadow-[8px_0px_8px_rgba(255,255,255,0.1)] focus:outline-none focus:bg-[#3683DC] font-bold uppercase sm:text-xl transition-all ease-in-out">
                    Redes
                  </button>
                  <button onClick={() => changeTile(4)} style={{backgroundColor: !tiles[4] ? '#0022FF' : '#3683DC' }} className="text-white py-4 px-4 rounded-s-md rounded-e-xl shadow-[8px_0px_8px_rgba(0,0,0,0.15)] hover:shadow-[8px_0px_8px_rgba(255,255,255,0.1)] focus:shadow-[8px_0px_8px_rgba(255,255,255,0.1)] focus:outline-none focus:bg-[#3683DC] font-bold uppercase sm:text-xl transition-all ease-in-out">
                    Obras y Clientes
                  </button>
                  <button className="bg-[#0022FF] text-white py-4 px-4 rounded-s-md rounded-e-xl shadow-[8px_0px_8px_rgba(0,0,0,0.15)] hover:shadow-[8px_0px_8px_rgba(255,255,255,0.1)] focus:shadow-[8px_0px_8px_rgba(255,255,255,0.1)] hover:bg-[#3683DC] focus:outline-none focus:bg-[#3683DC] font-bold uppercase sm:text-xl transition-all ease-in-out">
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
                  <div className="border-white bg-white border-2 py-4 px-4 rounded-md text-black shadow-[8px_0px_8px_rgba(0,0,0,0.25)]">
                    <p className="sm:text-lg text-base sm:text-start text-center">
                      <span className="font-bold text-[#0022ff]">AYRES</span> es un emprendimiento sanjuanino conformado por jóvenes profesionales que ofrece soluciones de mantenimiento integral personalizado en función de la actividad que llevan a cabo nuestros clientes, teniendo en cuenta las instalaciones y los requerimientos de la prestación para hogares o empresas. <br></br> <br></br>
                      La diversidad de soluciones se encuentra atravesada por un mismo compromiso con la calidad, la seguridad y el medio ambiente. <br></br> <br></br>
                      <span className="font-bold text-[#0022ff]"> AYRES</span> te ayuda a que puedas realizar ese proyecto que tenes en mente para tu hogar o el mantenimiento preventivo del establecimiento de tu empresa.
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
                  <div className="border-white bg-white border-2 py-4 px-4 rounded-md text-black shadow-[8px_0px_8px_rgba(0,0,0,0.25)]">
                    <p className="sm:text-lg text-base text-center">
                      <span className="font-bold text-[#0022ff] uppercase">Nuestros Servicios</span>
                      <ul className="mt-4">
                        <li className="flex flex-row flex-wrap gap-1 font-bold"><span className="text-3xl text-[#0022ff]"><MdOutlineWaterDrop /></span>Plomería</li>
                        <li className="flex flex-row flex-wrap gap-1 font-bold"><span className="text-3xl text-[#0022ff]"><GiPaintBucket /></span>Durlock y Albañilería</li>
                        <li className="flex flex-row flex-wrap gap-1 font-bold"><span className="text-3xl text-[#0022ff]"><MdOutlineCarpenter /></span>Carpintería</li>
                        <li className="flex flex-row flex-wrap gap-1 font-bold"><span className="text-3xl text-[#0022ff]"><MdFormatPaint /></span>Pintura</li>
                        <li className="flex flex-row flex-wrap gap-1 font-bold"><span className="text-3xl text-[#0022ff]"><FaBath /></span>Sanitarios</li>
                        <li className="flex flex-row flex-wrap gap-1 font-bold"><span className="text-3xl text-[#0022ff]"><GiGasStove /></span>Gas</li>
                        <li className="flex flex-row flex-wrap gap-1 font-bold"><span className="text-3xl text-[#0022ff]"><TbAirConditioning /></span>Aires Acondicionados</li>
                        <li className="flex flex-row flex-wrap gap-1 font-bold"><span className="text-3xl text-[#0022ff]"><MdElectricBolt /></span>Electricidad</li>
                        <li className="flex flex-row flex-wrap gap-1 font-bold"><span className="text-3xl text-[#0022ff]"><MdLightbulb /></span>Iluminación</li>
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
      <footer className="bg-white text-black p-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <span className="text-md sm:text-lg font-medium uppercase">Contactanos:</span>
          <a href="https://api.whatsapp.com/send?phone=5492644051652" target="_blank" rel="noopener noreferrer" className="ml-2 hover:text-[#0022ff] text-sm sm:text-base flex items-center gap-1 font-medium transition-all ease-in-out"><span className="text-[#00bb2d] text-2xl"><FaWhatsapp /></span> 2644051652</a>
          <a href="https://api.whatsapp.com/send?phone=5492645215000" target="_blank" rel="noopener noreferrer" className="ml-2 hover:text-[#0022ff] text-sm sm:text-base flex items-center gap-1 font-medium transition-all ease-in-out"><span className="text-[#00bb2d] text-2xl"><FaWhatsapp /></span> 2645215000</a>
          <a href="mailto:infoaires.sas@gmail.com" target="_blank" rel="noopener noreferrer" className="ml-2 hover:text-[#0022ff] text-sm sm:text-base flex items-center gap-1 font-medium transition-all ease-in-out"><span className="text-red-500 text-2xl" ><FaEnvelope /></span> infoaires.sas@gmail.com</a>
          <a href="https://goo.gl/maps/sqX2QbMQgvzsqF646" target="_blank" rel="noopener noreferrer" className="ml-2 hover:text-[#0022ff] text-sm sm:text-base flex items-center gap-1 font-medium transition-all ease-in-out"><span className="text-[#0022FF] text-2xl"><FaMapMarkerAlt /></span> Oficina: Calle Entre Ríos 859 Sur – Capital – San Juan</a>
        </div>
        <img src={logofooteralt.src} alt="Logo" className="w-[180px] h-auto" />
      </footer>
    </div>
  );
};

export default Home;