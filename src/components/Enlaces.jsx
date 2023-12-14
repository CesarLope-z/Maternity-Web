import React from 'react'

 const Enlaces = () => {
  return (
    <nav className='hidden sm:grid gridT md:flex justify-around text-center p-4 m-8 bg-rosadoClaro rounded-full'>
        <a className='text-black text-2xl font-bold' href="#guias">Guías</a>
        <a className='text-black text-2xl font-bold' href="#leyes">Leyes</a>
        <a className='text-black text-2xl font-bold' href="#almacenamiento">Almacenamiento</a>
        <a className='text-black text-2xl font-bold' href="#foro">Foro</a>
      </nav>
  )
}
export default Enlaces
