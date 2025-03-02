import React from 'react'
import Logo from "../assets/vameet-logo.png"

function Navbar() {
  return (
   <div><header className="pb-6 bg-white lg:pb-0" x-data="{expanded: false}">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
       {/* lg+  */}
      <nav className="flex items-center justify-between h-16 lg:h-22">
        <div className="flex-shrink-0">
          <a href="#" title="" className="flex">
            <img className="w-auto h-10 lg:h-16 " src={Logo} alt="" />
          </a>
        </div>

        <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
          <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Features </a>
  
          <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Solutions </a>
  
          <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Resources </a>
  
          <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Pricing </a>
        </div>
  
        <a href="#" title="" className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700" role="button"> Get started </a>
      </nav>
  
       {/* xs to lg */}
      <nav x-show="expanded" className="hidden pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
        <div className="flow-root">
          <div className="flex flex-col px-6 -my-2 space-y-1">
            <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Features </a>
  
            <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Solutions </a>
  
            <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Resources </a>
  
            <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Pricing </a>
          </div>
        </div>
  
        <div className="px-6 mt-6">
          <a href="#" title="" className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md tems-center hover:bg-blue-700 focus:bg-blue-700" role="button"> Get started </a>
        </div>
      </nav>
    </div>
  </header>
  </div>
  )
}

export default Navbar