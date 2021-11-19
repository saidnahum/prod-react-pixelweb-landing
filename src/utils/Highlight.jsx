import React from 'react';
import { AiFillPlayCircle as PlayIcon } from 'react-icons/ai';
import image1 from '../assets/img/img-02.png';

const Highlight = ({ order, image, title, desc }) => {
   return (
      <div className='flex flex-col lg:flex-row px-10 lg:px-32 mb-10 lg:mb-0'>
         <div className={`mb-10 lg:mb-0 flex flex-col items-start justify-center space-y-5 max-w-5xl ${order ? 'order-1' : 'order-2'}`}>
            <h1 className='text-3xl lg:text-5xl font-bold'>{title}</h1>
            <p className='text-gray-500 text-lg'>{desc}</p>
            <div className='flex items-center'>
               <p className='font-bold mr-2'>Ver cursos</p>
               <PlayIcon className='text-blue-400 w-6 h-6'/>
            </div>
         </div>

         <div className={`lg:w-10/12 flex items-center justify-center ${order ? 'order-2' : 'lg:order-1 order-2'}`}>
            <img className='h-5/6' src={image} alt="" />
         </div>
      </div>
   )
}

export default Highlight
