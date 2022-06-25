import React from 'react';
import logo from './images/logo.png';

const NavigationBar = () => {
  return (
    // Navigation Bar
    <nav className='relative container mx-auto p-6'>
        <div className='flex items-center justify-between'>
          <div className="pt-2">
            <img className='rounded' src={logo} alt=""/>
          </div>
          <div className="hidden space-x-6 md:flex ">
            <a href="http://" className="hover:text-dark">Portfolio</a>
          </div>
        </div>
    </nav>
  )
}

export default NavigationBar;