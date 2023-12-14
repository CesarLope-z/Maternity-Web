import React from 'react'

const Footer = () => {
  return (
    <div id='footer' className=' p-6 bg-morado'>
        <div className='sm:flex justify-between'>
            <div className='text-center'>
              <a href='#inicio' className='text-4xl text-left text-white font-bold' >Maternity +</a>
              
            </div>
            <div className='text-white grid'>
              <a href="#" className='underline underline-offset-4'>Sobre nosotros</a>
              <a href="#" className='underline underline-offset-4'>Contactanos</a>
            </div>
        </div>
        <div className='pt-6'>
          <div className='flex justify-center borde'>
            <p className='text-white p-4'>Todos los derechos reservados 2023</p>
          </div>
        </div>
      </div>
  )
}
export default Footer