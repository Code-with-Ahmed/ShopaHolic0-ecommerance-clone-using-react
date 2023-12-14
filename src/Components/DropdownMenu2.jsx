import  { useState,useEffect } from 'react';


const DropdownMenu2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

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

  return (
    <div className="relative z-30  inline-block text-left">
      <button
        onClick={toggleDropdown}
        onMouseEnter={toggleDropdown}
        className="hover:underline"
      >
        TRACK ORDER
      </button>
      {isOpen && (
        <div className="absolute mt-2 -left-20 w-60 bg-white border border-gray-200 divide-y divide-gray-100  shadow-lg p-4">
          <h3 className="text-md text-center font-normal">TRACK YOUR ORDER</h3>
          <div className="mt-4">
            <label htmlFor="orderNumber" className="block text-sm font-medium">
              Order Number
            </label>
            <input
              type="text"
              id="orderNumber"
              name="orderNumber"
              className="mt-2 px-2 text-gray-700 py-[0.15rem] block w-full border-2 border-gray-300 shadow-sm  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
              placeholder='No...'
            />
          </div>
          <div className="mt-4">
            <label htmlFor="phoneNumber" className="block text-sm font-medium">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              className="mt-2 px-2 text-gray-700 py-[0.15rem] block w-full border-2 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
              placeholder='Cell...'
            />
          </div>
          <div className="mt-6">
            <button
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              TRACK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu2;
