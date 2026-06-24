export default function Buscador({busqueda, setBusqueda}){
                 //valor actual , funcion para cambiarlo , valor inicial;

    return(
        <>
     <input
      type="text"
      value={busqueda}                              // muestra el valor actual
      onChange={(e) => setBusqueda(e.target.value)}  // actualiza el valor en App.jsx
      placeholder="Buscar por nombre..."
      className="border text-white border-white p-2 rounded w-full max-w-md mx-auto block my-6 placeholder-zinc-400"
    />
        
        </>
    )
}