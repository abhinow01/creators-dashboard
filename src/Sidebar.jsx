import React, { useState } from 'react';
import { IoIosArrowDropdownCircle } from "react-icons/io";

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`bg-slate-900 w-full sm:w-60 p-3 flex flex-col text-white ${isExpanded ? 'sm:w-60' : ''}`}>
      <div className='flex items-center gap-2 px-1 py-3'>
        {/* Placeholder for logo */}
        <div> Abhinav </div>
        <div className='flex flex-col'>
          <div className='flex flex-row items-center justify-between'>
            <div className='px-10 -translate-x-1'><IoIosArrowDropdownCircle /></div>
          </div>
        </div>
      </div>
      <div className='flex 1 py-3'>
        <ul>
          <li className='flex items-center py-2 px-4 text-gray-300'> Home </li>
          <li className='flex items-center py-2 px-4 text-gray-300'> Posts </li>
          <li className='flex items-center py-2 px-4 text-gray-300'> Analytics</li>
          {/* Add more menu items as needed */}
        </ul>
      </div>
      <div className='mt-auto bg-slate-800 flex flex-row py-2 '>
        <div className='py-2 px-2'> Wallet Icon </div>
        <div className='flex flex-col'>
          <div className='text-sm text-gray-400 font-light px-2 '> Available credits </div>
          <div className='px-2'> 222.10 </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
