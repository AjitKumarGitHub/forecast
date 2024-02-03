import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
        <div className='bg-slate-500 text-center grid grid-cols-1 text-2xl md:text-3xl font-bold font-serif sm:flex sm:flex-row sm:flex-wrap space-x-6  p-6 m-0 space-y-2'>
            <Link to='/' className='border-4 mx-6 bg-green-700 rounded-lg'>Today</Link>
            <Link to='/5days' className='border-4 mr-4 pr-4 bg-green-700 rounded-lg '>Week</Link>
        </div>
    </div>
  )
}

export default Header;
