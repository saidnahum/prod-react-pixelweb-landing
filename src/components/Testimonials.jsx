import React from 'react';
import image from '../assets/img/img-05.jpg';
import imageCircle from '../assets/img/img-04.png';
import netflix from '../assets/img/logo-netflix.svg';

const Testimonials = () => {
   return (
      <div className='bg-gray-100 flex items-center justify-center'>
         <div className='flex px-8 lg:p-20 rounded-2xl mb-10'>
            <div className='bg-white rounded-2xl p-2 lg:p-0 h-auto overflow-hidden'>
               <div className='flex h-full lg:h-72'>
                  <div className='flex flex-col items-center justify-center space-x-5 p-5 lg:p-20 space-y-10'>
                     <h2 className='text-gray-400 text-base lg:text-lg text-center lg:text-left'>“Los cursos de PixelWeb han sido increíbles, he podido aprender a mi ritmo y adquirir el conocimiento que necesito para mi trabajo”</h2>
                     <div className='flex flex-col lg:flex-row  justify-center items-center space-y-3'>
                        <img src={imageCircle} alt="imagen" className='h-14'/>
                        <div className='lg:border-r-2 px-5 text-center'>
                           <p className='font-bold'>Adriana Campos</p>
                           <p className='text-gray-400'>Diseñadora UX</p>
                        </div>
                        <div className='ml-5'>
                           <img src={netflix} alt="" />
                        </div>
                     </div>
                  </div>
   
                  <div className='h-full hidden lg:block'>
                     <img src={image} alt="image" className='h-auto object-cover'/>
                  </div>
               </div>
            </div>
   
            
         </div>
      </div>
   )
}

export default Testimonials
