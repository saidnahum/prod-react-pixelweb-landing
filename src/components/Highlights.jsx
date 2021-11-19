import React from 'react';
import Highlight from '../utils/Highlight';
import image1 from '../assets/img/img-02.png';
import image2 from '../assets/img/img-03.png';

const Highlights = () => {

   const textImageOrder = true;

   return (
      <div className='bg-gray-100 py-10 lg:py-0'>
         <Highlight 
            order={textImageOrder} 
            image={image1}
            title='Mejora tu carrera profesional con nuestros cursos'
            desc='Tendrás acceso a cursos básicos para reforzar los conceptos generales y a cursos avanzados para adquirir experiencia de casos reales'
         />
         <Highlight 
            image={image2}
            title='Forma parte de la comunidad mas grande UX/UI'
            desc='Nuestra comunidad sigue creciendo cada mes, tu también puedes unirte para aprender de nuestro contenido o compartiendo tu experiencia'
         />
      </div>
   )
}

export default Highlights
