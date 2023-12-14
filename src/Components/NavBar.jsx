import { useState,useEffect,useRef } from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';
import DropdownMenu2 from './DropdownMenu2';
import LogInModal from '../Modals/LogInModal';
import SignUpModal from '../Modals/SignUpModal';
import CartIcon from '../Icons-Components/CartIcon';
import SupportIcon from '../Icons-Components/SupportIcon';
import HeaderImages from './HeaderImages';


const NavBar = ({ handleLogoClick }) => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [activeContent, setActiveContent] = useState('category');
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  
  

  const navigateToHome = () => {
    
    handleLogoClick();
   
  
  };

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const openSignupModal = () => {
    setSignupModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const closeSignupModal = () => {
    setSignupModalOpen(false);
  };


  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const switchToCategory = () => {
    setActiveContent('category');
  };

  const switchToMenu = () => {
    setActiveContent('menu');
  };


  const sidebarRef = useRef(null);

  useEffect(() => {
    // Function to handle clicks outside the sidebar
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        // Click is outside the sidebar, so close it
        closeSidebar();
      }
    };

    
    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);





  return (
    <div>
      <div>
       {/* Upper Navbar  */}

       <div className='Upper-Navbar mb-3 flex'>
        <div className='ml-24 text-xs font-medium mt-3'>  
          <p>WELLCOME TO SHOPHOLIC  ||  WE DELIVER PRODUCTS ALL OVER PAKISTAN </p> 
        </div>
        <div className='flex-grow'></div>
        <div>
        <ul className='mt-3 mr-20 text-xs font-medium flex space-x-12'>
          <li><button className='hover:underline'>03472489158</button></li>
          <li>  <DropdownMenu />  </li>
          <li> <DropdownMenu2 /> </li>
          <li><button className='hover:underline' onClick={openLoginModal}>LOG IN</button></li>
          <li><button className='hover:underline' onClick={openSignupModal}>SIGN UP</button></li>
        </ul>
        </div>
       </div>


      {/* LogIn / SignUp Modals */}
       <LogInModal isOpen={isLoginModalOpen} onRequestClose={closeLoginModal} />
       <SignUpModal isOpen={isSignupModalOpen} onRequestClose={closeSignupModal} />
 

      {/* Lower Navbar  */}

      <div className='Lower-Navbar bg-white flex border-b '>
         <div className='py-3 flex ml-10'>

                {/* Sidebar Toggle Button */}

            <div className='ml-10 right-0'>
                <button className='mt-3 text-2xl font-extrabold' onClick={openSidebar}>
                  <i className="fa-solid fa-bars" style={{color:'#0f1ab3'}}></i>
                </button>
          </div>

         {/* LOGO IMAGE */}

        <Link to={`/`}  onClick={navigateToHome}>
        <button>
            <img src="/logo.png" alt="Logo Image" className='w-64 h-10  ml-4 mt-3' />
        </button>
        </Link>
     </div>

        {/* Search bar */}
         <div className='pt-5 ml-6'>
          <div className="relative">
            <input
              type="text"
              className="py-2 px-4 pr-12 w-[40rem] border-2 focus:outline-none"
              placeholder="Search For Products . . ."
            />
            <button className='bg-blue-700  py-2 px-4 rounded-r-md absolute right-0 top-0 h-full'>
              <i className="fa-solid fa-magnifying-glass text-white text-lg"></i>
            </button>
          </div>
        </div>

       {/* Media Icons */}
        <div className='ml-5'>
          <ul className='flex space-x-4'>
            <li><button className='mt-6'><i className="fa-brands fa-facebook fa-2xl " style={{color: "#0c56d4"}}></i></button></li>
            <li><button className='mt-6'><i className="fa-brands fa-youtube fa-2xl" style={{color: "#ec0914"}}></i></button></li>
            <li><button className='mt-6'><i className="fa-brands fa-instagram fa-2xl" style={{color: "#f88f16"}}></i></button></li>
            <li><button className='mt-6'><i className="fa-brands fa-square-whatsapp fa-2xl" style={{color: "#14d011"}}></i></button></li>
          </ul>
        </div>

        <div className='ml-24 mt-1'>
          <ul className='flex space-x-4'>
               <li> <CartIcon /> </li>
               <li> <SupportIcon /> </li>
          </ul>
        </div>

 
        
        {/* Sidebar */}
      
      {isSidebarOpen && (
        <>
        <div className='fixed inset-0 bg-gray-700 bg-opacity-50 z-10'></div>
        <div ref={sidebarRef} className={`bg-white z-20 h-screen w-1/5 fixed left-0 top-0 overflow-y-auto transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-700 border-r-4 border-gray-300`}>

          {/* Inside Sidebar Buttons */}

          <div className='flex'>
            <button className={`py-6 px-[2.2rem] text-lg font-bold  ${activeContent === 'category' ? 'bg-gray-200 border-b-4 border-blue-500' : 'bg-gray-100'}`}
                  onClick={switchToCategory}>
              Category
            </button>
  
            <button className={`py-6 px-[3.2rem] text-lg font-bold ${activeContent === 'menu' ? 'bg-gray-200 border-b-4 border-blue-500' : 'bg-gray-100'}`}
                  onClick={switchToMenu}
                  >
              Menu
            </button>
          </div>


          {/* Category Content */}
          {activeContent === 'category' && (
            <div className='px-4 py-2 mt-3'>
              {/* Category links */}
             
                <button className='text-lg w-full text-left font-normal text-gray-500 hover:text-black'>
                  All Category Items  
                  <i className="fa-solid fa-angle-right fa-lg mt-4 float-right"></i>
                </button>

                <button className='text-lg w-full text-left font-normal text-gray-500 hover:text-black'>
                  All Category Items  
                  <i className="fa-solid fa-angle-right fa-lg mt-4 float-right"></i>
                </button>

                <button className='text-lg w-full text-left font-normal text-gray-500 hover:text-black'>
                  All Category Items  
                  <i className="fa-solid fa-angle-right fa-lg mt-4 float-right"></i>
                </button>

                <button className='text-lg w-full text-left font-normal text-gray-500 hover:text-black'>
                  All Category Items  
                  <i className="fa-solid fa-angle-right fa-lg mt-4 float-right"></i>
                </button>
             
            </div>
          )}

          {/* Menu Content */}
          {activeContent === 'menu' && (
            <div className='px-4 py-2'>
              {/* Menu links */}
              <p>Yes Hello</p>
            </div>
          )}
        </div>
        </>
        )}     
       </div>
</div>
       <HeaderImages />
    </div>
  )
}

export default NavBar;
