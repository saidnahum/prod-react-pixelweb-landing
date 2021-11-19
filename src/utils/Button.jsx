import React from 'react'

const Button = ({ outline, text }) => {
   return (
      <button 
         className={`text-white w-full mb-5 lg:mb-0 lg:w-auto px-5 py-2 border rounded-md ${outline ? 'hover:bg-white hover:text-gray-900 transition-all duration-700' : 'bg-blue-500 border-none hover:bg-blue-700 transition-all duration-400'}`}
      >
         { text }
      </button>
   )
}

export default Button
