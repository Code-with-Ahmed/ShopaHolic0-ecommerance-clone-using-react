import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeDropdown = (e) => {
      if (isOpen && !e.target.closest('.relative')) {
        setIsOpen(false);
      }
    };
  
    document.addEventListener('click', closeDropdown);
  
    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, [isOpen]);



  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <div className="relative z-30 inline-block text-left">
      <button
        onClick={toggleDropdown}
        onMouseEnter={toggleDropdown}
        className="hover:underline"
      >
        CUSTOM CARE
      </button>
      {isOpen && (
        <div className="absolute -right-10 mt-2 w-40 bg-white border border-gray-200 divide-y divide-gray-100  shadow-lg flex flex-col justify-center">
          <button className="block px-4 py-2 text-black hover:bg-gray-100 focus:outline-none">
            <Link to="/ContactUs" >CONTACT US</Link>
          </button>
          <button className="block px-4 py-2 text-black hover:bg-gray-100 focus:outline-none">
          <Link to="/FAQs"> FAQ`s </Link> 
          </button>
        </div>
      )}
    </div>

    
  );
};

export default DropdownMenu;
