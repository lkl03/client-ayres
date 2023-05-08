import { useState } from "react";
import withAuth from "../components/withAuth";
import useFirebaseData from "../hooks/useFirebaseData";

import { dash1, dash2, dash3, dash4, dash5, dash6, dash7, dash8, dash9, dash10, dash11, dash12, dash13, dash14 } from "../assets";
import { auth, app } from '../firebase'

import { getFirestore, query, addDoc, collection, deleteDoc, doc } from "firebase/firestore";

const Dashboard = () => {

    const db = getFirestore(app);

    const addCategory = async (event) => {
        event.preventDefault();
      
        const { name, description, image, servicios } = event.target.elements;
        const db = getFirestore();
      
        // Split the 'servicios' input string into an array, trimming any whitespace
        const serviciosArray = servicios.value.split(',').map((service) => {
          const [serviceName, valorM2] = service.split(':').map((item) => item.trim());
          return {
            servicio: serviceName,
            valorM2: parseFloat(valorM2),
          };
        });
      
        await addDoc(collection(db, 'cotizador'), {
          name: name.value,
          description: description.value,
          image: image.value,
          servicios: serviciosArray,
        });
      
        // Reset form
        event.target.reset();
    };

    const [cotizadorData, updateCotizadorData] = useFirebaseData("cotizador");

    // Add this function to handle deletion of documents
    const handleDelete = async (id) => {
        if (window.confirm("Seguro queres eliminar esta categoría? Esto no se puede deshacer.")) {
            await deleteDoc(doc(db, "cotizador", id));
            updateCotizadorData();
        }
    };

    const [descData, updateDescData] = useFirebaseData("desc");
    const [gmailData, updateGmailData] = useFirebaseData("gmail");
    const [instagramData, updateInstagramData] = useFirebaseData("instagram");
    const [mapsData, updateMapsData] = useFirebaseData("maps");
    const [imagesData, updateImagesData] = useFirebaseData("publicidades1");
    const [alternateImagesData, updateAlternateImagesData] = useFirebaseData("publicidades2");
    const [quienesSomosData, updateQuienesSomosData] = useFirebaseData("quienessomos");
    const [serviciosData, updateServiciosData] = useFirebaseData("servicios");
    const [textsData, updateTextsData] = useFirebaseData("texts");
    const [whatsappData, updateWhatsappData] = useFirebaseData("whatsapp");
    const [whatsappButtonData, updateWhatsappButtonData] = useFirebaseData("whatsappbutton");
    const [abonosData, updateAbonosData] = useFirebaseData("abonos");
    const [inputValues, setInputValues] = useState({});

    const handleChange = (id, field, value) => {
        setInputValues({ ...inputValues, [`${id}-${field}`]: value });
    };

    const handleSave = async (id, field, updateFn) => {
        if (inputValues[`${id}-${field}`] !== undefined) {
            await updateFn(id, { [field]: inputValues[`${id}-${field}`] });
        }
    };

    if (!cotizadorData || !descData || !gmailData || !instagramData || !mapsData || !imagesData || !alternateImagesData || !quienesSomosData || !serviciosData || !textsData || !whatsappData || !whatsappButtonData || !abonosData) {
        return <div>Loading...</div>;
    }

    const renderInputs = (data, updateFn) =>
        data.map((item) => (
            Object.entries(item).map(([field, value]) => {
                if (field === "id") return null;
                return (
                    <div key={`${item.id}-${field}`} className="mb-4">
                        <input
                            type="text"
                            placeholder={value}
                            value={inputValues[`${item.id}-${field}`] || ""}
                            onChange={(e) => handleChange(item.id, field, e.target.value)}
                            className="border-2 border-gray-300 px-3 py-2 rounded-md w-full"
                        />
                        <button
                            onClick={() => handleSave(item.id, field, updateFn)}
                            className="mt-2 block bg-blue-500 text-white px-4 py-2 rounded-md w-full"
                        >
                            Guardar Cambios
                        </button>
                    </div>
                );
            })
        ));

    const handleLogout = () => {
        auth.signOut();
    };

    return (
        <>
            <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 mx-10 my-10 rounded-md mb-8"
            >
                Cerrar Sesión
            </button>

            <div className="container mx-auto px-4 py-20">
                <h2 className="text-2xl font-semibold mb-4">Cotizador</h2>
                <h3 className="text-xl font-semibold mb-4">Agregar Categoria</h3>
                <form onSubmit={addCategory} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        className="border-2 border-gray-300 px-3 py-2 rounded-md w-full"
                        required
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Descripción"
                        className="border-2 border-gray-300 px-3 py-2 rounded-md w-full"
                        required
                    />
                    <input
                        type="text"
                        name="image"
                        placeholder="URL de la imagen"
                        className="border-2 border-gray-300 px-3 py-2 rounded-md w-full"
                        required
                    />
                    <input
                        type="text"
                        name="servicios"
                        placeholder="Servicios y valor m2 (ej: Servicio1:100, Servicio2:200)"
                        className="border-2 border-gray-300 px-3 py-2 rounded-md w-full"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
                    >
                        Agregar
                    </button>
                </form>

                {/* Add this section to list documents under 'cotizador' and allow deletion */}
                <h2 className="text-xl font-semibold mb-4 mt-8">Categorias</h2>
                <ul>
                    {cotizadorData.map((category) => (
                        <li key={category.id} className="flex items-center mb-2">
                            <span className="mr-4">{category.name}</span>
                            <button
                                onClick={() => handleDelete(category.id)}
                                className="bg-red-500 text-white px-2 py-1 rounded-md"
                            >
                                Borrar
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="container mx-auto px-4 py-20">
                <h2 className="text-xl font-semibold mb-4">Desc Data</h2>
                <img src={dash4.src} className="max-w-[200px] h-auto" />
                {renderInputs(descData, updateDescData)}

                <h2 className="text-xl font-semibold mb-4 mt-8">Gmail Data</h2>
                <img src={dash7.src} className="max-w-[200px] h-auto" />
                {renderInputs(gmailData, updateGmailData)}

                <h2 className="text-xl font-semibold mb-4 mt-8">Instagram Data</h2>
                <img src={dash14.src} className="max-w-[200px] h-auto" />
                {renderInputs(instagramData, updateInstagramData)}

                <h2 className="text-xl font-semibold mb-4 mt-8">Maps Data</h2>
                <img src={dash8.src} className="max-w-[200px] h-auto" />
                {renderInputs(mapsData, updateMapsData)}

                <h2 className="text-xl font-semibold mb-4 mt-8">Publicidad Imagenes Data</h2>
                <img src={dash2.src} className="max-w-[200px] h-auto" />
                {renderInputs(imagesData, updateImagesData)}

                <h2 className="text-xl font-semibold mb-4 mt-8">Publicidad Imagenes 2 Data</h2>
                <img src={dash3.src} className="max-w-[200px] h-auto" />
                {renderInputs(alternateImagesData, updateAlternateImagesData)}

                <h2 className="text-xl font-semibold mb-4 mt-8">Quienes Somos Data</h2>
                <img src={dash9.src} className="max-w-[200px] h-auto" />
                {renderInputs(quienesSomosData, updateQuienesSomosData)}

                <h2 className="text-xl font-semibold mb-4 mt-8">Servicios Data</h2>
                <img src={dash11.src} className="max-w-[200px] h-auto" />
                {renderInputs(serviciosData, updateServiciosData)}

                <h2 className="text-xl font-semibold mb-4 mt-8">Titulos Botones</h2>
                <img src={dash1.src} className="max-w-[200px] h-auto" />
                {renderInputs(textsData, updateTextsData)}

                <h2 className="text-xl font-semibold mb-4 mt-8">Whatsapp Data</h2>
                <img src={dash13.src} className="max-w-[200px] h-auto" />
                {renderInputs(whatsappData, updateWhatsappData)}

                <h2 className="text-xl font-semibold mb-4 mt-8">Whatsapp Button Data</h2>
                <img src={dash12.src} className="max-w-[200px] h-auto" />
                {renderInputs(whatsappButtonData, updateWhatsappButtonData)}

                <h2 className="text-xl font-semibold mb-4 mt-8">Abonos Mensuales Imagenes</h2>
                <img src={dash10.src} className="max-w-[200px] h-auto" />
                {renderInputs(abonosData, updateAbonosData)}
            </div>
        </>
    );
};

export default withAuth(Dashboard);