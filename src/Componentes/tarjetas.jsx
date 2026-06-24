import { useMemo } from "react";

export default function Tarjetas({perfiles}){

    function obtenerIniciales(nombre){
        return nombre
            .split(" ")
            .map((palabra) => palabra[0])
            .join("")
            .toUpperCase()
            .slice(0,2);
    }

    const colores = [
        'bg-red-500',
        'bg-blue-500',
        'bg-green-500',
        'bg-purple-500',
        'bg-yellow-500',
        'bg-pink-500',
        'bg-orange-300',
        'bg-teal-500'
    ]

    // funcion para escoger el color aleatorio
    function colorAleatorio(){
        return colores[Math.floor(Math.random() * colores.length)];
    }

    //color de las habilidades 
    const coloresHabilidades = useMemo(() => {
        return perfiles.map((perfil) => perfil.habilidades.map(() => colorAleatorio()));
    } , []);

    //genera un color por perfil
    const coloresImagenes = useMemo(() => {
        return perfiles.map(() => colorAleatorio());
    }, []);


    return(
        <>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-10 mx-2 sm:mx-4'>
        {perfiles.map((perfil, perfilIndex) => (
            /*perfiles */
          <div className='p-8 text-center rounded-lg bg-zinc-700 ' key={perfil.id}>
            {/*Imagenes de perfil */}
            {perfil.imagen ? (
               <img
                src={perfil.imagen}
                alt={perfil.nombre}
                className='w-24 h-24 object-cover mx-auto rounded-full mb-4'
               />
            ) : (
              <div className={`w-24 h-24 mx-auto rounded-full ${coloresImagenes[perfilIndex]} text-white text-xl mb-4 flex items-center justify-center font-bold `}>
                {obtenerIniciales(perfil.nombre)}
                </div>
            )}

            {/*Nombre, rol*/}
            <h2 className='text-white text-xl my-2'>{perfil.nombre}</h2>
            <p className='text-white'>{perfil.rol}</p>

            {/*Habilidades */}
            <div className="flex flex-wrap gap-2 justify-center mt-5 mb-5">
            {perfil.habilidades.map((habilidad, index) => 
        <span key={index} className={`${coloresHabilidades[perfilIndex][index]} text-amber-100 text-[15px] px-2 py-2 rounded-full`}>
                {habilidad}
            </span>
            
            )}
            </div>
            <div className="w-full h-px bg-zinc-500 my-4"></div>

            {/*proyectos, seguidores, experiencia */}
            <div className="flex gap-4 sm:gap-6 items-center justify-center my-4 text-zinc-300">
            <div className="">
                <p>{perfil.proyectos}</p>
                <p>proyectos</p>
            </div>
            <div className="">
                <p>{perfil.seguidores}</p>
                <p>seguidores</p>
            </div>
            <div className="">
                <p>{perfil.experiencia} años</p>
                <p>experiencia</p>
            </div>

            </div>


          </div>
        ))}
    </div>
    </>
    )
}