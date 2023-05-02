import React, {useState, useEffect} from "react";
import Head from "next/head";
import { InstagramEmbed } from 'react-social-media-embed';

import { heroimg, logofooter, logofooteralt, flyer1, flyer2, publi1, publi2, publi3, publi4 } from "../assets";

import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaBath } from 'react-icons/fa';
import { MdElectricBolt, MdOutlineWaterDrop, MdFormatPaint, MdOutlineCarpenter, MdLightbulb } from 'react-icons/md';
import { GiGasStove, GiPaintBucket } from 'react-icons/gi';
import { TbAirConditioning } from 'react-icons/tb';
import ContactFormOverlay from "../components/ContactFormOverlay";
import Navbar from "../components/Navbar";

import useWindowSize from "../hooks/useWindowSize";

const Home = () => {

  const [images, setImages] = useState([{src:publi1.src}, {src:publi2.src}, {src:publi3.src}, {src:publi4.src}]);
  const alternateImages = [{src:logofooteralt.src}, {src:flyer2.src}, {src:heroimg.src}, {src:logofooter.src}];

  useEffect(() => {
      const timer = setInterval(() => {
          setImages(oldImages => oldImages[0].src === publi1.src ? alternateImages : [{src:publi1.src}, {src:publi2.src}, {src:publi3.src}, {src:publi4.src}]);
      }, 3000);
      return () => clearInterval(timer);
  }, []);

  const size = useWindowSize();
  const isMobile = size.width <= 768; // You can choose the breakpoint according to your needs

  const [tiles, setTiles] = useState([false, false, false, false, false, false]);

  const changeTile = (index, value) => {
    const newTiles = [...tiles];
    newTiles.fill(false).splice(index, 1, value);
    setTiles(newTiles);
  };

  const [selectedItem, setSelectedItem] = useState(null);

  const services = [
    {icon: <MdOutlineWaterDrop />, name: 'Plomería', description: 'Ofrecemos servicios de plomería de alta calidad.'},
    {icon: <GiPaintBucket />, name: 'Durlock y Albañilería', description: 'Nuestros profesionales proporcionan servicios de durlock y albañilería de confianza.'},
    {icon: <MdOutlineCarpenter />, name: 'Carpintería', description: 'Realizamos todo tipo de trabajos de carpintería.'},
    {icon: <MdFormatPaint />, name: 'Pintura', description: 'Ofrecemos servicios de pintura para interiores y exteriores.'},
    {icon: <FaBath />, name: 'Sanitarios', description: 'Proporcionamos instalación y reparación de sanitarios.'},
    {icon: <GiGasStove />, name: 'Gas', description: 'Nuestro equipo está capacitado para manejar todas sus necesidades de gas.'},
    {icon: <TbAirConditioning />, name: 'Aires Acondicionados', description: 'Brindamos servicios de instalación y mantenimiento de aires acondicionados.'},
    {icon: <MdElectricBolt />, name: 'Electricidad', description: 'Ofrecemos una variedad de servicios eléctricos, incluyendo instalaciones y reparaciones.'},
    {icon: <MdLightbulb />, name: 'Iluminación', description: 'Proporcionamos servicios de iluminación, incluyendo instalación y diseño.'},
  ];

  const handleInteractionStart = (index) => {
    setSelectedItem(index);
  };

  const handleInteractionEnd = () => {
    setSelectedItem(null);
  };

  const handleTouch = (index) => {
    setSelectedItem(selectedItem !== index ? index : null);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center md:bg-fixed" style={{ backgroundImage: `url(${heroimg.src})` }}>
      <Head>
        <title>My Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <Navbar />

      <a href="https://api.whatsapp.com/send?phone=5492644051652" target="_blank" rel="noopener noreferrer" class="fixed bottom-4 left-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full flex flex-wrap gap-1 items-center justify-center">
        <span className="text-3xl"><FaWhatsapp/></span> <span className="sm:block hidden">Escribinos por WhatsApp</span>
      </a>

      {/* Hero */}
      <div className="flex-1 md:mt-0 mt-[4.7rem]">
        <div className="bg-[#3683DC75] w-full md:h-screen md:py-0 py-10 flex items-center justify-center">
          <div className="w-full max-w-6xl px-4">
            <div className="flex flex-col sm:flex-row justify-center items-center">
              <div className="md:w-2/5 md:mr-4 mb-8 md:mb-0">
                <div className="flex flex-col flex-wrap gap-5">
                {['Quiénes Somos', 'Abonos Mensuales', 'Nuestros Servicios', 'Redes', 'Obras y Clientes'].map((label, index) => (
                  <button
                    key={index}
                    onClick={() => changeTile(index, !tiles[index])} // toggle the tile on click
                    className="gradient-background text-white py-4 px-4 rounded-s-md rounded-e-xl hover:shadow-[8px_0px_8px_rgba(255,255,255,0.1)] focus:shadow-[8px_0px_8px_rgba(255,255,255,0.1)] focus:outline-none hover:bg-[#3683DC] focus:bg-[#3683DC] font-bold uppercase sm:text-xl transition-all ease-in-out"
                  >
                    {label}
                  </button>
                ))}
                {/*<ContactFormOverlay />*/}
                <button 
                  className="gradient-background text-white py-4 px-4 rounded-s-md rounded-e-xl hover:shadow-[8px_0px_8px_rgba(255,255,255,0.1)] focus:shadow-[8px_0px_8px_rgba(255,255,255,0.1)] focus:outline-none hover:bg-[#3683DC] focus:bg-[#3683DC] font-bold uppercase sm:text-xl transition-all ease-in-out"
                  onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                >
                  Contactanos
                </button>
                <button className="gradient-background text-white py-4 px-4 rounded-s-md rounded-e-xl hover:shadow-[8px_0px_8px_rgba(255,255,255,0.1)] focus:shadow-[8px_0px_8px_rgba(255,255,255,0.1)] focus:outline-none hover:bg-[#3683DC] focus:bg-[#3683DC] font-bold uppercase sm:text-xl transition-all ease-in-out">
                  Cotizador Online
                </button>
                </div>
              </div>
              <div className="md:w-2/5">
                {tiles.some(tile => tile === true) ? (
                  null
                ) : 
                <div className="flex flex-col items-center justify-center gap-2">
                    {images.map((image, index) => (
                      <img key={index} src={image.src} alt={`Publicidad ${index + 1}`} className="sm:w-[200px] w-[125px] h-auto max-h-[75px] rounded-md" />
                    ))}
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
                  <div className="bg-[#0022ff35] py-4 px-4 rounded-md">
                    <p className="sm:text-lg text-base text-center">
                      <span className="font-bold text-white uppercase">Nuestros Servicios</span>
                      <ul className="mt-4 mb-2 flex flex-col flex-wrap gap-y-2">
                        {services.map((service, index) => (
                          <li
                            key={index}
                            onMouseEnter={isMobile ? null : () => handleInteractionStart(index)}
                            onMouseLeave={isMobile ? null : handleInteractionEnd}
                            onTouchEnd={isMobile ? () => handleTouch(index) : null}
                            className="cursor-pointer border-[#0022ff85] bg-[#0022ff85] border-2 py-2 px-4 rounded-md text-white shadow-[8px_0px_8px_rgba(0,0,0,0.25)] flex flex-row flex-wrap gap-1 font-bold"
                          >
                            <span className="text-3xl text-white">{service.icon}</span>{service.name}
                            <div style={{
                              opacity: selectedItem === index ? 1 : 0,
                              maxHeight: selectedItem === index ? '100px' : '0',
                              overflow: 'hidden',
                              transition: 'opacity 0.3s ease-in-out, max-height 0.3s ease-in-out',
                              pointerEvents: 'none'
                            }}
                              className="text-base font-normal text-start">
                              {service.description}
                            </div>
                          </li>
                        ))}
                      </ul>
                      <span className="font-bold text-white">Y muchos más!</span>
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
                {/*{tiles[5] ?
                  <div className="rounded-lg w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
                    <form className="bg-white p-8 rounded-lg w-full max-w-screen-md mx-auto">
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
                        className="bg-[#0022ff] hover:bg-[#3683DC] text-white font-bold uppercase py-4 px-4 rounded-lg w-full mt-4 transition-all ease-in-out"
                      >
                        Enviar
                      </button>
                    </form>
                  </div>

                  : ''
                }*/}
              </div>
            </div>
            <p className="text-md sm:text-lg md:text-xl mb-4 text-center text-white uppercase font-medium mt-4">
                Mantenimiento a empresas e instituciones educativas y hogar
                </p>
          </div>
        </div>
      </div>

      {/* Footer 
      <footer className="bg-[#3683DC75] text-white p-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row gap-5 items-center md:ml-[25%] md:mb-0 mb-8">
          <a href="https://api.whatsapp.com/send?phone=5492644051652" target="_blank" rel="noopener noreferrer" className="ml-2 hover:text-[#0022ff] text-sm sm:text-base flex items-center gap-1 font-medium transition-all ease-in-out"><span className="text-[#00bb2d] text-2xl"><FaWhatsapp /></span> 2644051652</a>
          <a href="https://api.whatsapp.com/send?phone=5492645215000" target="_blank" rel="noopener noreferrer" className="ml-2 hover:text-[#0022ff] text-sm sm:text-base flex items-center gap-1 font-medium transition-all ease-in-out"><span className="text-[#00bb2d] text-2xl"><FaWhatsapp /></span> 2645215000</a>
          <a href="mailto:infoaires.sas@gmail.com" target="_blank" rel="noopener noreferrer" className="ml-2 hover:text-[#0022ff] text-sm sm:text-base flex items-center gap-1 font-medium transition-all ease-in-out"><span className="text-red-500 text-2xl" ><FaEnvelope /></span> infoaires.sas@gmail.com</a>
          <a href="https://goo.gl/maps/sqX2QbMQgvzsqF646" target="_blank" rel="noopener noreferrer" className="ml-2 hover:text-[#0022ff] text-sm sm:text-base sm:text-start text-center flex items-center gap-1 font-medium transition-all ease-in-out"><span className="text-[#0022FF] text-2xl"><FaMapMarkerAlt /></span> Oficina: Calle Entre Ríos 859 Sur – Capital – San Juan</a>
        </div>
        <img src={logofooteralt.src} alt="Logo" className="w-[180px] h-auto" />
      </footer>*/}
      {/* Footer*/} 
      <footer className="bg-white text-black pt-20 p-4">
        <h3 className="text-center text-[#0022ff] md:text-[2.5rem] text-[2rem] font-semibold mb-4">Contactanos</h3>
        <div className="rounded-lg w-full h-full flex items-center justify-center mb-8">
          <form className="bg-white p-8 rounded-lg border-2 border-[#0022ff] w-full max-w-screen-md mx-auto">
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
              className="bg-[#0022ff] hover:bg-[#3683DC] text-white font-bold uppercase py-4 px-4 rounded-lg w-full mt-4 transition-all ease-in-out"
            >
              Enviar
            </button>
          </form>
        </div>
        <div>
          <div className="flex flex-col gap-4 items-center justify-between m-auto w-full">
            <div className="flex flex-col md:flex-row gap-4 items-center mx-auto md:mb-0">
              <a href="https://api.whatsapp.com/send?phone=5492644051652" target="_blank" rel="noopener noreferrer" className="ml-2 hover:text-[#0022ff] text-sm sm:text-base flex items-center gap-1 font-medium transition-all ease-in-out"><span className="text-[#00bb2d] text-2xl"><FaWhatsapp /></span> 2644051652</a>
              <a href="https://api.whatsapp.com/send?phone=5492645215000" target="_blank" rel="noopener noreferrer" className="ml-2 hover:text-[#0022ff] text-sm sm:text-base flex items-center gap-1 font-medium transition-all ease-in-out"><span className="text-[#00bb2d] text-2xl"><FaWhatsapp /></span> 2645215000</a>
              <a href="mailto:infoaires.sas@gmail.com" target="_blank" rel="noopener noreferrer" className="ml-2 hover:text-[#0022ff] text-sm sm:text-base flex items-center gap-1 font-medium transition-all ease-in-out"><span className="text-red-500 text-2xl" ><FaEnvelope /></span> infoaires.sas@gmail.com</a>
            </div>
            <a href="https://goo.gl/maps/sqX2QbMQgvzsqF646" target="_blank" rel="noopener noreferrer" className="ml-2 hover:text-[#0022ff] text-sm sm:text-base sm:text-start text-center flex items-center gap-1 font-medium transition-all ease-in-out"><span className="text-[#0022FF] text-2xl"><FaMapMarkerAlt /></span> Oficina: Calle Entre Ríos 859 Sur – Capital – San Juan</a>
          </div>
          <div className="flex flex-wrap w-full items-center justify-end mt-10">
            <img src={logofooteralt.src} alt="Logo" className="w-[180px] h-auto" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;