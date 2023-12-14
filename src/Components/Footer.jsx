import React from 'react';
import { Link,useLocation } from 'react-router-dom';

const Footer = ({ handleLogoClick }) => {
  const location = useLocation();

  const navigateToHome = () => {
    handleLogoClick();
  };
  if (!location.pathname.includes('/Categoryy/') && !location.pathname.includes('/DataItem/') && !location.pathname.includes('/ContactUs')  && !location.pathname.includes('/FAQs')) {
  return (
    <>
    <div className='flex mt-14 mb-8'>
      {/* Logo and Address section */}
      <div className='Logo ml-36'>
      <Link to={`/`}  onClick={navigateToHome}>
        <img src="/logo.png" alt="Logo-image" className='w-72'/>
      </Link>
        <div className='mt-3'>
          <span className='flex text-sm'>Call  Us At Timing: <p className='font-bold text-base ml-1'> 11:30 AM to 10:00 PM</p></span>
          <h1 className='text-lg mt-1 inline-block ml-16 hover:underline'>021-322332-786</h1>

          <span className='flex mt-10 text-lg w-[28rem] hover:underline'> 
                <p className='text-lg font-bold'>Address:</p>
                Shop No. B 12, Basement, Amma Tower, Saddar, Karachi, Pakistan.
          </span>
        </div>
      </div>

       {/*QuickLine Section  */}
       <div className='flex space-x-16'>
        <div>
        <h1 className='text-xl font-bold'>Quick Lines</h1>
          <ul className='leading-loose text-sm w-36'>
            <li className='hover:underline'>About Us</li>
            <li className='hover:underline'>Reveiw</li>
            <li className='hover:underline'>Blogs</li>
            <li className='hover:underline '>Terms & Conditions</li>
            <li className='hover:underline'>Privacy Policy</li>
            <li className='hover:underline'>Return Policy</li>
            <li className='hover:underline'>Refund Policy</li>
            <li className='hover:underline'>Shipping Policy</li>
            <li className='hover:underline'>Track Your Order</li>
            <li className='hover:underline'>Contact Us</li>
            <li className='hover:underline'>FAQ's</li>
  
          </ul>
        </div>

        <div>
        <h1 className='text-xl font-bold'>CATEGORIES</h1>
          <ul className='leading-loose text-sm w-36'>
            <li className='hover:underline'>limon Pakistan</li>
            <li className='hover:underline'>Shop</li>
            <li className='hover:underline'>Sale Sale</li>
            <li className='hover:underline'>Under Rs.500/-</li>
            <li className='hover:underline'>Kitchen Accessories</li>
            <li className='hover:underline'>Bathroom Accessories</li>
            <li className='hover:underline'>Home & Decor</li>
            <li className='hover:underline'>Beauty Products</li>
            <li className='hover:underline'>Gifts & Toys</li>
            <li className='hover:underline'>Health & Fitness</li>
  
          </ul>
        </div>
       </div>

   {/* Media Section */}
   <div className='ml-24'>
          <ul className='flex space-x-4 '>
            <li><button  className='text-gray-500 hover:text-blue-700'><i className="fa-brands fa-facebook fa-2xl "></i></button></li>
            <li><button  className='text-gray-500 hover:text-blue-700'><i className="fa-brands fa-twitter fa-2xl "></i></button></li>
            <li><button  className='text-gray-500 hover:text-red-600'><i className="fa-brands fa-youtube fa-2xl" ></i></button></li>
            <li><button  className='text-gray-500 hover:text-orange-600'><i className="fa-brands fa-instagram fa-2xl" ></i></button></li>
            <li><button  className='text-gray-500 hover:text-green-600'><i className="fa-brands fa-square-whatsapp fa-2xl"></i></button></li>
            <li><button  className='text-gray-500 hover:text-black'><i className="fa-brands fa-tiktok fa-2xl" ></i></button></li>
          </ul>
        <h1 className='text-lg font-bold mt-4 mb-8'>FIND US ON</h1>

        <form>
          <div className='relative'>
          <label className='text-lg font-bold'>SIGN UP YOUR NUMBER FOR UPDATES</label>
          <input
              type="text"
              className="py-3 px-4  w-[25rem] border-2 focus:outline-none"
              placeholder="Enter Your Mobile Number"
            />
            <button className='bg-blue-700 py-[0.30rem] px-4  right-20 absolute  '>
              <i className="fa-solid fa-arrow-right text-white text-lg mt-2 pb-1"></i>
            </button>
            </div>
        </form>

        <div>
          <img src="/PayFast.png" alt="PayFastLogo"  className='w-[26rem]'/>
        </div>
        </div>
  
    </div>

    <hr className='border-2'/>
    <div className='my-5 flex'>
      <span className='text-sm font-semibold mt-2 ml-36'>Copyright © 2023 shopaholic.pk  All Rights Reserved</span>
      <div className='flex ml-auto mr-24'>
         <p className='mt-1 text-sm font-medium'>Powered by:</p>
         <img src="/mimcartLogo.svg" alt="Mimcart Logo" className='w-24' />
      </div>    
    </div>
    </>
  )}
  return null;
}

export default Footer;
