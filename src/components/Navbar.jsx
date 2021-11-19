import React, { useState } from 'react';
import logo from '../assets/img/logo.svg';
import Button from '../utils/Button';
import menu from '../assets/img/menu-sharp.svg';
import closeMenu from '../assets/img/closeMenu.svg';

const Navbar = () => {

   const outline = true;
   const [showMenu, setShowMenu] = useState(false);

   const showHideMenu = () => {
      setShowMenu(!showMenu);
   }

   return (
      <nav className='py-6 px-10 lg:px-0 text-white relative'>
         <div className='container mx-auto flex items-center'>
            <div className='flex-grow'>
               <img src={logo} alt="logo" />
            </div>

            <div className='flex lg:hidden cursor-pointer' onClick={showHideMenu}>
               {
                  showMenu
                     ? (<img className='' src={closeMenu} alt="" />)
                     : (<img className='' src={menu} alt="" />)
               }
            </div>

            <div className={`${!showMenu && 'hidden'} lg:flex flex-grow justify-between items-center absolute lg:relative top-20 lg:top-0 lg:w-auto left-0 bg-gray-800 shadow-lg lg:shadow-none py-10 lg:py-0 w-full px-8 lg:px-0`}>
               <div className='lg:space-x-8 flex flex-col lg:flex-row mb-10 lg:mb-0 items-center space-y-5 lg:space-y-0 text-lg'>
                  <a href="#" className='w-full p-3 text-center hover:bg-white rounded-xl lg:hover:bg-transparent hover:text-gray-900 lg:hover:text-gray-400'>Inicio</a>
                  <a href="#" className='w-full p-3 text-center hover:bg-white rounded-xl lg:hover:bg-transparent hover:text-gray-900 lg:hover:text-gray-400'>Cursos</a>
                  <a href="#" className='w-full p-3 text-center hover:bg-white rounded-xl lg:hover:bg-transparent hover:text-gray-900 lg:hover:text-gray-400'>Blog</a>
                  <a href="#" className='w-full p-3 text-center hover:bg-white rounded-xl lg:hover:bg-transparent hover:text-gray-900 lg:hover:text-gray-400'>Compañía</a>
               </div>

               <div className='lg:space-x-5 block lg:flex-row items-center space-y-5 lg:space-y-0'>
                  <a href="#"><Button outline={outline} text='Iniciar sesión'/></a>
                  <a href="#"><Button text='Registrate'/></a>
               </div>
            </div>
         </div>
      </nav>
   )
}

export default Navbar
