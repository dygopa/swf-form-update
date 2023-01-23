import React from 'react'
import { FiCheckCircle } from 'react-icons/fi'

function Success() {
  return (
    <div className='bg-white w-full h-screen'>
        <div className="w-full h-full gap-5 flex flex-col justify-center items-center text-center">
            <div className="text-green-600 text-[5rem]">
                <FiCheckCircle/>
            </div>
            <p className='text-green-600 font-semibold text-4xl'>Exitos</p>
            <p className='text-slate-900 font-normal text-lg'>La informacion se actualizo exitosamente</p>
        </div>
    </div>
  )
}

export default Success