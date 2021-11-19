import React from 'react';
import linkedin from '../assets/img/logo-linkedin.svg';
import facebook from '../assets/img/logo-facebook.svg';
import microsoft from '../assets/img/logo-microsoft.svg';
import amazon from '../assets/img/logo-amazon.svg';
import google from '../assets/img/logo-google.svg';

const Clients = () => {
   return (
      <div className='flex flex-col flex-wrap items-center space-y-10 my-16'>
         <div className='text-center px-5 text-gray-500'>
            <p className='lg:text-lg'>Empresas que confían en nosotros para capacitar a su equipo</p>
         </div>

         <div className='lg:flex'>
            <img src={linkedin} alt="" />
            <img src={facebook} alt="" />
            <img src={microsoft} alt="" />
            <img src={amazon} alt="" />
            <img src={google} alt="" />
         </div>
      </div>
   )
}

export default Clients
