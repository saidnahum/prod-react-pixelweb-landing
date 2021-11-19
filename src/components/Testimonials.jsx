import React from 'react';
import image from '../assets/img/img-05.jpg';
import imageCircle from '../assets/img/img-04.png';
import netflix from '../assets/img/logo-netflix.svg';

const Testimonials = () => {
   return (
      <div className='bg-gray-100 flex items-center justify-center'>
         <div className='flex p-20 rounded-2xl'>
            <div className='bg-white rounded-2xl h-auto overflow-hidden'>
               <div className='flex h-72'>
                  <div className='flex flex-col items-center justify-center space-x-5 p-20 space-y-10'>
                     <h2 className='text-gray-400 text-lg'>“Los cursos de PixelWeb han sido increíbles, he podido aprender a mi ritmo y adquirir el conocimiento que necesito para mi trabajo”</h2>
                     <div className='flex flex-row justify-center items-center'>
                        <img src={imageCircle} alt="imagen" className='h-14'/>
                        <div className='border-r-2 px-5 text-center'>
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
