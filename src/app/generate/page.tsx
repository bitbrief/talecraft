import Navbar from '@/components/navbar'
import React from 'react'

function Generate() {
  return (
    <div className='flex min-h-screen flex-col items-center bg-black text-white font-sans'>
        <Navbar />
        <div className="w-full bg-slate-800 h-1 mt-2"></div>
        <div className="bg-purple-600 w-full h-6 flex justify-center font-semibold"> We currently have a limit of 5000 characters </div>
    </div>
  )
}

export default Generate