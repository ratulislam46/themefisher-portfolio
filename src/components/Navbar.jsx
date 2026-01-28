import React from 'react';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="">
            <h2 className="text-2xl font-bold">Daryl <span className='text-[#F89222]'> Smith</span></h2>
            <p className='text-[#C2C2C2]'>UI/UX designer</p>
          </div>

          {/* Desktop Navigation - Static */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 font-medium">Home</a>
            <a href="#" className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium">
              Talk To Me
            </a>
          </div>

          {/* Mobile menu button - Static */}
          <div className="md:hidden text-gray-600">
            <FiMenu size={24} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;