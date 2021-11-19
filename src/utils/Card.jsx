import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai'
import Button from './Button';

const Card = ({ type, price, desc, item1, item2, item3 }) => {
   return (
      <div className='p-5 flex flex-col border rounded-xl my-5'>
         <div className='flex flex-col space-y-5'>
            <h1 className='font-bold text-3xl'>{type}</h1>
            <div className='flex items-center'>
               <h2 className='text-3xl font-bold'>${price}</h2>
               <p className='text-gray-500'>/Mensual</p>
            </div>
   
            <p className='text-gray-500 text-base'>{desc}</p>
   
            <div>
               <div className='flex items-center space-x-2 space-y-3'>
                  <AiOutlineCheck className='text-blue-500 mt-2 w-4 h-4'/>
                  <p>{item1}</p>
               </div>
   
               <div className='flex items-center space-x-2 space-y-3'>
                  <AiOutlineCheck className='text-blue-500 mt-2 w-4 h-4'/>
                  <p>{item2}</p>
               </div>
   
               <div className='flex items-center space-x-2 space-y-3'>
                  <AiOutlineCheck className='text-blue-500 mt-2 w-4 h-4'/>
                  <p>{item3}</p>
               </div>
            </div>
            <Button text='Comprar suscripción'/>
            <a href="#" className='text-center text-blue-400'>Comienza una prueba de 14 días</a>
         </div>
      </div>
   )
}

export default Card
