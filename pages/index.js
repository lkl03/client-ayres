import React, {useState, useEffect} from "react";
import Router, { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { InstagramEmbed } from 'react-social-media-embed';

import { heroimg, logofooter, logofooteralt, flyer1, flyer2, publi1, publi2, publi3, publi4 } from "../assets";

import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaBath } from 'react-icons/fa';
import { MdElectricBolt, MdOutlineWaterDrop, MdFormatPaint, MdOutlineCarpenter, MdLightbulb } from 'react-icons/md';
import { GiGasStove, GiPaintBucket } from 'react-icons/gi';
import { TbAirConditioning } from 'react-icons/tb';
import ContactFormOverlay from "../components/ContactFormOverlay";
import Navbar from "../components/Navbar";

import useWindowSize from "../hooks/useWindowSize";

import { useForm, ValidationError } from '@formspree/react';

import { app } from '../firebase'

import { collection, query, getDocs, getFirestore } from 'firebase/firestore';

const Home = () => {

  const db = getFirestore(app);

  const [images, setImages] = useState([]);
  const [alternateImages, setAlternateImages] = useState([]);

  const router = useRouter()

  const [buttonsTitles, setButtonsTitles] = useState([])
  const [quienesSomosText, setQuienesSomosText] = useState([])
  const [servicios, setServicios] = useState([])
  const [updatedServices, setUpdatedServices] = useState([]);
  const [instagram, setInstagram] = useState([])
  const [whatsapp, setWhatsapp] = useState([])
  const [gmail, setGmail] = useState([])
  const [maps, setMaps] = useState([])
  const [whatsappButton, setWhatsappButton] = useState([])
  const [desc, setDesc] = useState([])
  const [abonosImage, setAbonosImage] = useState([])


  useEffect(() => {
    const getButtonsTitles = async () => {
      const itemsRef = query(collection(db, 'texts'));
      const querySnapshot = await getDocs(itemsRef);
      const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const valuesArray = data.map((buttonTitle) => buttonTitle.value);
      setButtonsTitles(valuesArray);
      console.log(valuesArray);
    };
    getButtonsTitles();
  }, []);

  useEffect(() => {
    const getQuienesSomosText = async () => {
      const itemsRef = query(collection(db, 'quienessomos'));
      const querySnapshot = await getDocs(itemsRef);
      const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const valuesArray = data.map((text) => text.value);
      setQuienesSomosText(valuesArray);
      console.log(valuesArray);
    };
    getQuienesSomosText();
  }, []);

  useEffect(() => {
    const getServicios = async () => {
      const itemsRef = query(collection(db, 'servicios'));
      const querySnapshot = await getDocs(itemsRef);
      const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setServicios(data);
      console.log(data);
    };
    getServicios();
  }, []);

  useEffect(() => {
    if (servicios.length > 0) {
      const newServices = services.map((service, index) => {
        const updatedService = servicios[index];
        if (updatedService) {
          return {
            ...service,
            name: updatedService.title,
            description: updatedService.desc,
          };
        }
        return service;
      });
      setUpdatedServices(newServices);
    }
  }, [servicios]);

  useEffect(() => {
    const getInstagram = async () => {
      const itemsRef = query(collection(db, 'instagram'));
      const querySnapshot = await getDocs(itemsRef);
      const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const valuesArray = data.map((url) => url.value);
      setInstagram(valuesArray);
      console.log(valuesArray);
    };
    getInstagram();
  }, []);

  useEffect(() => {
    const getWhatsapp = async () => {
      const itemsRef = query(collection(db, 'whatsapp'));
      const querySnapshot = await getDocs(itemsRef);
      const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const valuesArray = data.map((text) => text.value);
      setWhatsapp(valuesArray);
      console.log(valuesArray);
    };
    getWhatsapp();
  }, []);

  useEffect(() => {
    const getGmail = async () => {
      const itemsRef = query(collection(db, 'gmail'));
      const querySnapshot = await getDocs(itemsRef);
      const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const valuesArray = data.map((text) => text.value);
      setGmail(valuesArray);
      console.log(valuesArray);
    };
    getGmail();
  }, []);

  useEffect(() => {
    const getMaps = async () => {
      const itemsRef = query(collection(db, 'maps'))
      const querySnapshot = await getDocs(itemsRef)
      const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
      setMaps(data)
  }
  getMaps()
  }, []);

  useEffect(() => {
    const getWhatsappButton = async () => {
      const itemsRef = query(collection(db, 'whatsappbutton'));
      const querySnapshot = await getDocs(itemsRef);
      const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const valuesArray = data.map((text) => text.value);
      setWhatsappButton(valuesArray);
      console.log(valuesArray);
    };
    getWhatsappButton();
  }, []);

  useEffect(() => {
    const getDesc = async () => {
      const itemsRef = query(collection(db, 'desc'));
      const querySnapshot = await getDocs(itemsRef);
      const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const valuesArray = data.map((text) => text.value);
      setDesc(valuesArray);
      console.log(valuesArray);
    };
    getDesc();
  }, []);

  useEffect(() => {
    const getImages = async () => {
      const itemsRef = query(collection(db, 'publicidades1'))
      const querySnapshot = await getDocs(itemsRef)
      const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
      setImages(data)
      console.log(images)
  }
  getImages()
  }, []);

  useEffect(() => {
    const getAlternateImages = async () => {
      const itemsRef = query(collection(db, 'publicidades2'))
      const querySnapshot = await getDocs(itemsRef)
      const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
      setAlternateImages(data)
      console.log(images)
  }
  getAlternateImages()
  }, []);

  useEffect(() => {
    const getAbonosImage = async () => {
      const itemsRef = query(collection(db, 'abonos'))
      const querySnapshot = await getDocs(itemsRef)
      const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
      setAbonosImage(data)
  }
  getAbonosImage()
  }, []);

  const [displayedImages, setDisplayedImages] = useState(images);

  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayedImages((oldImages) =>
        oldImages === images ? alternateImages : images
      );
    }, 3000);
    return () => clearInterval(timer);
  }, [images, alternateImages]);


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
    {icon: <MdOutlineWaterDrop />, name: '', description: ''},
    {icon: <GiPaintBucket />, name: '', description: ''},
    {icon: <MdOutlineCarpenter />, name: '', description: ''},
    {icon: <MdFormatPaint />, name: '', description: ''},
    {icon: <FaBath />, name: '', description: ''},
    {icon: <GiGasStove />, name: '', description: ''},
    {icon: <TbAirConditioning />, name: '', description: ''},
    {icon: <MdElectricBolt />, name: '', description: ''},
    {icon: <MdLightbulb />, name: '', description: ''},
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

  const [state, handleSubmit] = useForm("xyyokopn");
  const [congratsMessage, setCongratsMessage] =useState(false)
  if (state.succeeded) {
    setCongratsMessage(true)
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center md:bg-fixed" style={{ backgroundImage: `url(${heroimg.src})` }}>
      <Head>
        <title>My Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <Navbar />


      {whatsappButton.map((label, index) => (
        <a href={`https://api.whatsapp.com/send?phone=549${label}`} target="_blank" rel="noopener noreferrer" class="fixed bottom-4 left-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full flex flex-wrap gap-1 items-center justify-center">
          <span className="text-3xl"><FaWhatsapp/></span> <span className="sm:block hidden">Escribinos por WhatsApp</span>
        </a>
      ))}

      {/* Hero */}
      <div className="flex-1 md:mt-0 mt-[4.7rem]">
        <div className="bg-[#3683DC75] w-full md:h-screen md:py-0 py-10 flex items-center justify-center">
          <div className="w-full max-w-6xl px-4">
            <div className="flex flex-col sm:flex-row justify-center items-center">
              <div className="md:w-2/5 md:mr-4 mb-8 md:mb-0">
                <div className="flex flex-col flex-wrap gap-5">
                {buttonsTitles.map((label, index) => (
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
                <Link href='/cotizador'>
                <div className="gradient-background text-white text-center py-4 px-4 rounded-s-md rounded-e-xl hover:shadow-[8px_0px_8px_rgba(255,255,255,0.1)] focus:shadow-[8px_0px_8px_rgba(255,255,255,0.1)] focus:outline-none hover:bg-[#3683DC] focus:bg-[#3683DC] font-bold uppercase sm:text-xl transition-all ease-in-out">
                  Cotizador Online
                </div>
                </Link>
                </div>
              </div>
              <div className="md:w-2/5">
                {tiles.some(tile => tile === true) ? (
                  null
                ) : 
                <div className="flex flex-col items-center justify-center gap-2">
                {displayedImages.map((label, index) => (
                  <img key={index} src={label.src} alt={`Publicidad ${index + 1}`} className="sm:w-[200px] w-[125px] h-auto max-h-[75px] rounded-md" />
                ))}
                </div>
                }
                {tiles[0] ?
                  <div className="border-[#0022ff85] bg-[#0022ff85] border-2 py-4 px-4 rounded-md text-white shadow-[8px_0px_8px_rgba(0,0,0,0.25)]">
                    {quienesSomosText.map((label) => (
                      <p className="sm:text-lg text-base text-start">
                      {label}
                      </p>
                    ))}
                  </div>
                  : ''
                }
                {tiles[1] ?
                  <div className="border-white bg-white border-2 py-4 px-4 rounded-md text-white shadow-[8px_0px_8px_rgba(0,0,0,0.25)]">
                  {abonosImage.map((label) => (
                    <img src={label.src} alt="flyer" className="w-full h-auto pointer-events-none" />
                  ))}
                  </div>

                  : ''
                }
                {tiles[2] ? 
                  <div className="bg-[#0022ff35] py-4 px-4 rounded-md">
                    <p className="sm:text-lg text-base text-center">
                      <span className="font-bold text-white uppercase">Nuestros Servicios</span>
                      <ul className="mt-4 mb-2 flex flex-col flex-wrap gap-y-2">
                        {updatedServices.map((service, index) => (
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
                  {instagram.map((label) => (
                    <InstagramEmbed url={label} width="100%" />
                    ))}
                  </div>

                  : ''
                }
                {/*tiles[4] ?
                  'text5'

                  : ''
                }*/}
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
            {desc.map((label, index) => (
              <p className="text-md sm:text-lg md:text-xl mb-4 text-center text-white uppercase font-medium mt-4">
                {label}
            </p>
            ))}

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
        <h3 className="text-center text-[#0022ff] md:text-[2.5rem] text-[2rem] font-semibold mb-4">
        {congratsMessage ? '¡Mensaje Enviado!' : 'Contactanos'}
        </h3>
        {!congratsMessage ? 
        <div className="rounded-lg w-full h-full flex items-center justify-center mb-8">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg border-2 border-[#0022ff] w-full max-w-screen-md mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Nombre y apellido"
                className="px-4 py-2 border border-gray-300 rounded-lg col-span-full focus:outline-[#0022ff]"
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
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
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <textarea
              name="message"
              placeholder="Mensaje"
              className="px-4 py-2 border border-gray-300 rounded-lg w-full mt-4 h-40 focus:outline-[#0022ff]"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              disabled={state.submitting}
              className="bg-[#0022ff] hover:bg-[#3683DC] text-white font-bold uppercase py-4 px-4 rounded-lg w-full mt-4 transition-all ease-in-out"
            >
              Enviar
            </button>
          </form>
        </div>
        : ''}
        <div>
          <div className="flex flex-col gap-4 items-center justify-between m-auto w-full">
            <div className="flex flex-col md:flex-row gap-4 items-center mx-auto md:mb-0">
            {whatsapp.map((label, index) => (
              <a href={`https://api.whatsapp.com/send?phone=549${label}`} target="_blank" rel="noopener noreferrer" className="ml-2 hover:text-[#0022ff] text-sm sm:text-base flex items-center gap-1 font-medium transition-all ease-in-out"><span className="text-[#00bb2d] text-2xl"><FaWhatsapp /></span> {label}</a>
            ))}
            {gmail.map((label, index) => (
              <a href={`mailto:${label}`} target="_blank" rel="noopener noreferrer" className="ml-2 hover:text-[#0022ff] text-sm sm:text-base flex items-center gap-1 font-medium transition-all ease-in-out"><span className="text-red-500 text-2xl" ><FaEnvelope /></span> {label}</a>
            ))}
            </div>
            {maps.map(map => (
              <a href={map.url} target="_blank" rel="noopener noreferrer" className="ml-2 hover:text-[#0022ff] text-sm sm:text-base sm:text-start text-center flex items-center gap-1 font-medium transition-all ease-in-out"><span className="text-[#0022FF] text-2xl"><FaMapMarkerAlt /></span> {map.text}</a>
            ))}
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