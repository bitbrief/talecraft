import Link from 'next/link'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

function Navbar() {
  return (
    <div className='bg-black w-3/4 pt-8'>
        <div className='flex justify-between text-white items-end'>
            <Link href="/">
            <span className='text-3xl font-semibold'>
                talecraft
            </span>
            </Link>
            <span className='hover:underline hover:cursor-pointer border-2 px-2 rounded-md py-1 hover:border-slate-800 flex items-center'>
                Try it out <span className='ml-1'><FiArrowUpRight /></span>
            </span>
        </div>
    </div>
  )
}

export default Navbar