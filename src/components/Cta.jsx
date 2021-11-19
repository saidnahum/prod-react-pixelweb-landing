import React from 'react';
import iphone from '../assets/img/img-06.png';
import Button from '../utils/Button';

const Cta = () => {
   return (
      <div className='grid lg:grid-cols-2 pt-10 lg:pt-24 px-8 border-b border-gray-600'>
         <div className='flex justify-center lg:mx-32 flex-col lg:my-10 mb-10 lg:mb-24 max-w-xl space-y-5'>
            <h1 className='text-3xl text-center lg:text-left lg:text-5xl text-white font-bold'>Comienza tu carrerra profesional ahora</h1>
            <p className='text-gray-500 text-center lg:text-left'>Cientos de cursos de los mejores instructores para impulsar tu crecimiento como desarrollador UX/UI</p>
            <div className='lg:space-x-3'>
               <Button outline={true} text='Prueba gratis 7 días'/>
               <Button text='Comienza tu carrera'/>
            </div>
         </div>

         <div className='flex justify-center relative'>
            <img src={iphone} alt="iphone" className='lg:absolute bottom-0' />
         </div>
      </div>
   )
}

export default Cta
