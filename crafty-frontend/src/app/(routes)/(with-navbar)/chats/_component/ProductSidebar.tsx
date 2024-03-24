'use client';

import { useState } from 'react';
import { BsChevronLeft } from 'react-icons/bs';

interface ProductSidebarProps {}

const ProductSidebar = () => {
  // State to manage sidebar visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => setIsOpen(!isOpen);

  const iconStyle = {
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 0.3s ease-in-out',
  };

  return (
    <div className="flex h-full">
      {/* Overlay to close sidebar on click (when sidebar is open) */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-30" onClick={toggleSidebar}></div>
      )}

      {/* Sidebar */}
      <div
        className={`absolute bottom-0 right-0 z-50 h-[calc(100vh-64px)] w-64 transform overflow-visible border-l bg-white transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'w-[16px]'
        }`}>
        {/* Sidebar content */}
        <button
          className="absolute left-0 top-1/2 z-[500] flex -translate-x-1/2 items-center justify-center rounded-full border border-black bg-white p-1"
          onClick={toggleSidebar}>
          <BsChevronLeft style={iconStyle} />
        </button>
        {/* Add your sidebar content here */}
      </div>
    </div>
  );
};

export default ProductSidebar;
