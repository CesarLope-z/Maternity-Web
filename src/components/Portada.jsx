import React from 'react'

const Portada = () => {
  return (
    <div className='md:flex justify-around'>
        <div className=' p-6 text-center'>
          <p className='font-bold'>Nuestra aplicación sobre</p>
          <p className='text-5xl md:text-8xl colorM fuenteDancing'> Lactancia</p>
          <p className='text-6xl md:text-9xl colorR fuenteDancing font-bold'>Materna</p>
          
          <div className='flex justify-center'>
            <div className='m-6 px-7 py-3 rounded-full bg-rosadoClaro w-fit'>
              <a href="#guias" className='font-bold'>Continuar</a>
            </div>
          </div>
          
          
        </div>

        <div className='flex justify-center' >
          <img className='max-w-[60%] lg:max-w-sm' src="src\assets\padres.png" alt="Maternus" />
        </div>
      </div>
  )
}
export default Portada