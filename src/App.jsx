import './App.css'
import { useState } from 'react'
import Tarjetas from './Componentes/tarjetas'
import perfiles from './data/perfiles.json'
import Buscador from './Componentes/Buscador'


function App() {
  
  // creamos elestado 
  const[busqueda, setBusqueda] = useState("");

  //usamos elestado para filtrar
  const perfilesFiltrados = perfiles.filter((perfil) => 
  perfil.nombre.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase())
  );


  return (
    <>
    <main className='min-h-screen bg-zinc-800'>
      <div className='text-center pt-6'>
        <h1 className='text-neutral-300 text-3xl my-10'>CARTAS DE PRESENTACIÓN</h1>
      </div>
      {/*Buscador */}
     <Buscador busqueda={busqueda} setBusqueda={setBusqueda}/>
      
      {/*Cartas de presentacion con data JSON*/}
      <Tarjetas perfiles={perfilesFiltrados}/>

    </main>
    </>
  )
}

export default App
