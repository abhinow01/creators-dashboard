import React from 'react'
import { CgProfile } from "react-icons/cg";

function Header() {
  return (
    <div className='bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200 w-full'>
        <div>
        <div className="flex items-center relative">
        <input
            type="text"
            placeholder=" Search ..... "
            className="bg-gray text-sm focus:outline-none active: outline-none h-10 w-[24rem] border border-gray-303 rounded-sm pl-11 pr-4" 
          />
          </div>
        </div>
        <div className='transform scale-125'><CgProfile /></div>
    </div>
  )
}

export default Header