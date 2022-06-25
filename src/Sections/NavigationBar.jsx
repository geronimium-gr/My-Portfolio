import React from 'react';
import logo from '../images/logo.png';

const NavigationBar = () => {
  return (
    // Navigation Bar
    <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="pt-2 flex items-center justify-between">
            <img className='w-20' src={logo} alt=""/>
            <h2 className="text-whitish pl-2 text-2xl font-semibold">Geronimo</h2>
          </div>
          <div className="hidden space-x-6 md:flex ">
            <a href="http://" className="text-whitish text-lg font-medium hover:text-dark">Portfolio</a>
            <a href="http://" className="text-whitish text-lg font-medium hover:text-dark">About Me</a>
            <a href="http://" className="text-whitish text-lg font-medium hover:text-dark">Contacts</a>
          </div>
        </div>
    </nav>
  )
}

export default NavigationBar;