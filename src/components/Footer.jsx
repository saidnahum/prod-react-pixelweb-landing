import React from 'react';
import logo from '../assets/img/logo.svg';
import playStore from '../assets/img/playstore.svg';
import appleStore from '../assets/img/appstore.svg';
import instagram from '../assets/img/icon-instagram.svg';
import youtube from '../assets/img/icon-youtube.svg';
import linkedin from '../assets/img/icon-linkedin.svg';

const Footer = () => {
   return (
      <div className='px-5 lg:px-20 py-10'>
         <div className='flex flex-col lg:flex-row items-center justify-around'>
            <div className='space-y-4'>
               <img src={logo} alt="logo"/>
               <p className='text-gray-500'>Descubre la nueva forma de aprender</p>
               <div className='space-x-4'>
                  <button><img src={playStore} /></button>
                  <button><img src={appleStore} /></button>
               </div>
            </div>
   
            <div className='flex flex-col lg:flex-row items-start lg:space-x-20 my-5 lg:my-0'>
               <div className='space-y-2 lg:space-y-5 m-5'>
                  <h3 className='text-white font-bold text-lg'>Prodcutos</h3>
                  <p className='cursor-pointer text-gray-500'>Cursos</p>
                  <p className='cursor-pointer text-gray-500'>Tutoriales</p>
               </div>

               <div className='space-y-2 lg:space-y-5 m-5'>
                  <h3 className='text-white font-bold text-lg'>Compañía</h3>
                  <p className='cursor-pointer text-gray-500'>Acerca de PixelWeb</p>
                  <p className='cursor-pointer text-gray-500'>Blog</p>
                  <p className='cursor-pointer text-gray-500'>Quiero ser instructor</p>
               </div>

               <div className='space-y-2 lg:space-y-5 m-5'>
                  <h3 className='text-white font-bold text-lg'>Soporte</h3>
                  <p className='cursor-pointer text-gray-500'>Chat en línea</p>
                  <p className='cursor-pointer text-gray-500'>Hablar con un asesor</p>
               </div>
            </div>
         </div>

         <div className='flex flex-col lg:flex-row justify-between border-t border-gray-600 pt-10'>
            <p className='text-gray-500 text-center lg:text-left mb-5 lg:mb-0'>PiwelWeb ® 2021 | Todos los derechos reservados</p>
            <div className='flex justify-center lg:justify-start'>
               <p className='text-gray-500 mr-5'>Siguenos en: </p>
               <div className='flex space-x-3'>
                  <img src={instagram} alt="instagram" />
                  <img src={youtube} alt="youtube" />
                  <img src={linkedin} alt="linkedin" />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Footer
