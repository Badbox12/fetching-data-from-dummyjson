import React from 'react'
import logo from '../Images/logo.jpg'
import {BiSearchAlt} from 'react-icons/bi'
const Header = () => {
  return (
   <div className='bg-red-500 w-full '>
         <div className='mx-auto w-[90%] flex flex-col'>
        <div className=' flex justify-between items-center bg-[#097AF5] '>
        <div className='w-[100px]'>
            <img src={logo} alt="logo science" />
        </div>
        <div className='flex items-center'>
            {/* SEARCH BAR */}
            <div className="relative">
                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <BiSearchAlt className='w-5 h-5 text-gray-500 dark:text-gray-400' />
                </div>
            
            <input type="text" placeholder='Search' className='block w-[500px] p-4 pl-10 
            text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 
            focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 
            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
            dark:focus:ring-blue-500 dark:focus:border-blue-500' />
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
           </div>
        </div>
        </div>
        
        <ul className='flex gap-10 justify-center'>
            <li>Laptop</li>
            <li>DeskTop</li>
            <li>Gaming</li>
            <li>Peripheral</li>
            <li>PC Builder</li>
        </ul>
    </div>
   </div>
  )
}

export default Header