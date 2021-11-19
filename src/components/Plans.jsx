import React from 'react'
import Card from '../utils/Card'

const Plans = () => {

   const cardsPlans = [
      {
         type: "Básico",
         price: 129,
         desc: "Perfecto para estudiantes y profecionales que estén iniciando en el diseno UX/UI",
         item1: "Acceso a mas de 100 cursos",
         item2: "Mensaje directo a los instructores",
         item3: "Cursos nuevos cada mes"
      },
      {
         type: "Profesional",
         price: 349,
         desc: "Pensado para diseñadores que buscan perfeccionar sus conocimientos",
         item1: "Acceso a mas de 250 cursos",
         item2: "Mensaje directo a los instructores",
         item3: "Cursos nuevos cada mes"
      },
      {
         type: "Premium",
         price: 599,
         desc: "Diseñado para profesionales que quieran acceder a contenido exclusivo",
         item1: "Acceso a todos los cursos",
         item2: "Cursos exclusivos",
         item3: "Cursos nuevos cada mes"
      }
   ];

   return (
      <div className='bg-white p-5 lg:py-10 lg:px-32'>
         <div className='text-center space-y-5 mb-10'>
            <h1 className='text-2xl lg:text-5xl font-semibold'>Planes pensados para ti</h1>
            <p className='text-gray-500 text-lg lg:text-xl'>Eligue el plan que se adapte a tus necesidades</p>
         </div>
         <div className='lg:flex lg:space-x-10'>
            {
               cardsPlans.map((plan, index) => (
                  <Card type={plan.type} price={plan.price} desc={plan.desc} item1={plan.item1} item2={plan.item2} item3={plan.item3} key={index}/>
               ))
            }
         </div>
      </div>
   )
}

export default Plans
