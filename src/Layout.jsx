import React from 'react'
import { Outlet ,Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import Header from './Header';
function Layout() {
  return (
    <>
   <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
    <Sidebar />
    <div className='flex-1'>
    <div><Header/></div>
    <div className='p-4'>{<Outlet/>}</div>
          </div>
    </div>
    
    </>
  )
}

export default Layout