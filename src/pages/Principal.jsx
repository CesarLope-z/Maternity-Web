import React from 'react'
import Portada from "../components/Portada";
import Enlaces from "../components/Enlaces";
import Footer from "../components/Footer";
function Principal() {
  return (
    <>
    
        <Enlaces/>

        <Portada/>

        <div  className='m-6'>
        <div id='guias' className='sm: mt-32'>
            <h1 className='text-4xl colorR font-bold text-center' >Recomendaciones</h1>
        </div>


        <div className='grid sm:flex justify-around m-4'>
            <div className='mx md:max-w-[15%] p-6 m-4 bg-rosado text-white borde1'>
            <h2 className='text-xl font-bold'>Postura de mi bebé</h2>
            <p>Asegúrate de que el bebé esté bien posicionado. 
                Su boca debe estar bien abierta, 
                con el labio inferior hacia afuera y su nariz tocando el pecho. </p>
            </div>
            <div className='mx md:max-w-[15%] p-6 m-4 bg-rosado text-white borde3'>
            <h2 className='text-xl font-bold'>Descanso</h2>
            <p>Intenta descansar cuando el bebé duerma para recuperarte y 
                tener más energía para la lactancia.</p>
            </div>
            <div className='mx md:max-w-[15%] p-6 m-4 bg-rosado text-white borde2'>
            <h2 className='text-xl font-bold'>chupetes y biberones</h2>
            <p>Evita chupetes y biberones al principio, 
                debido a que puede confundir al bebé y 
                dificultar el agarre adecuado del pecho.</p>
            </div>

        </div>
        <div className='flex justify-end'>
            <div className='sm:m-6 px-7 py-3 rounded-full bg-rosadoClaro w-fit sm:mb-32'>
            <a href="#" className='font-bold'>Leer más...</a>
            </div>
        </div>
            
        </div>

        <div className='mb-20'>

        <div id='almacenamiento' className='sm: mt-32 m-20'>
            <h1 className='text-4xl colorR font-bold text-center' >Almacenamiento de leche materna</h1>
        </div>

        <div>
            <div className='flex justify-center'>
            <div className=' text-center items-center max-w-[25%] bg-rosadoClaro rounded-2xl p-4 m-8 '>
                <p className='text-3xl'>Para mantener en buen estado el alimento para 
                nuestro bebé es necesario diferentes cuidados:</p>
            </div>
            <div >
                <img className=' max-w-[70%]' src="src\assets\biberon.png" alt="Leche materna" />
            </div>
            </div>
            <div className='flex justify-center'>
            <div className='sm:m-6 px-7 py-3 rounded-full bg-rosadoClaro w-fit sm:mb-32'>
                <a href="#" className='font-bold'>Leer más...</a>
            </div>
            </div>
        </div>


        </div>


        <div>

        <div>
            <div id='leyes' className='sm: mt-32 m-6'>
            <h1 className='text-4xl colorR font-bold text-center' >Leyes</h1>
            </div>
        </div>

        <div>
            <div className='sm:flex justify-around items-center m-4 grid place-items-center'>
            <div className='md:max-w-[40%] text-xl'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod
                condimentum ligula, eu dignissim lorem mattis ultricies. Aenean a metus turpis.</p>
            </div>
            <div className='max-w-[40%]'>
                <img className='w-[80%]' src="src\assets\leyesGobierno.webp" alt="Ministerio de trabajo" />
            </div>
            </div>

            <div className='sm:flex justify-around items-center m-4 grid place-items-center'>
            <div className='max-w-[40%]'>
                <img className='w-[80%]' src="src\assets\leyesNombre01.png " alt="Ministerio de trabajo" />
                </div>
                <div className='md:max-w-[40%] text-xl'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod
                    condimentum ligula, eu dignissim lorem mattis ultricies. Aenean a metus turpis.</p>
                </div>
                
            </div>

            <div className='sm:flex justify-around items-center m-4 grid place-items-center'>
            <div className='md:max-w-[50%] text-xl'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod
                condimentum ligula, eu dignissim lorem mattis ultricies. Aenean a metus turpis.</p>
            </div>
            <div className='max-w-[40%]'>
                <img src="src\assets\leyesNombre2.png" alt="Ministerio de trabajo" />
            </div>
            </div>

            <div className='flex justify-center'>
            <div className='sm:m-6 px-7 py-3 rounded-full bg-rosadoClaro w-fit sm:mb-32'>
                <a href="#" className='font-bold'>Leer más...</a>
            </div>
            </div>

        </div>

        </div>


        <div id='foro'>

        <div className='grid sm:flex justify-center '>

            <div className='bg-rosadoClaro sm:w-[30%] rounded-3xl m-4 p-10'>
            <p className='text-3xl font-bold'>“Un muy buen proyecto aplicado para la sociedad”</p>
            <div className='imagen flex justify-center'>
                <img src="src\assets\estrellas.webp" alt="✰✰✰✰✰" />
            </div>
            <div className='flex justify-end'><p className='text-xl'>-Cesar Lopez</p></div>
            </div>
            <div className='m-4'>

            <div className='bg-rosadoClaro rounded-md '>
                <p className='text-3xl font-bold p-2 m-2'>Foro</p>
            </div>
            <div className='bg-rosadoClaro rounded-md '>
                <p className='text-3xl font-bold p-2 m-2'>Testimonios</p>
            </div>
            <div className='bg-rosadoClaro rounded-md '>
                <p className='text-3xl font-bold p-2 m-2'>Preguntas</p>
            </div>
            

            </div>

        </div>

        <div className='flex justify-center'>
            <div className='sm:m-6 px-7 py-3 rounded-full bg-rosadoClaro w-fit sm:mb-32'>
                <a href="#" className='font-bold'>Ver más...</a>
            </div>
            </div>

        </div>

        <Footer/>

    </>
  )
}

export default Principal