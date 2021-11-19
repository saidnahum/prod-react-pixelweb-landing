import React from 'react';
import Button from '../utils/Button';
import ipad from '../assets/img/img-01.png';

const Hero = () => {
   const outline = true;

   return (
      <div className='flex flex-col items-center justify-center my-10 lg:my-24 space-y-10 lg:space-y-20 px-8 lg:px-0'>
         <div className='flex flex-col items-center justify-center max-w-3xl space-y-10'>
            <h1 className='text-3xl lg:text-5xl text-white text-center font-medium'>La mejor plataforma para impulsar tu carrera de UX/UI</h1>
            <p className='text-gray-500 lg:text-lg text-center'>Contamos con la comunidad más grande de expertos en UX/UI para brindarte el contenido ideal para tu aprendizaje</p>
            <div className='lg:space-x-5'>
               <Button text='Prueba gratis 7 días' outline={outline}/>
               <Button text='Comienza tu carrera'/>
            </div>
         </div>

         <div>
            <img src={ipad} alt="ipad" />
         </div>
      </div>
   )
}

export default Hero
