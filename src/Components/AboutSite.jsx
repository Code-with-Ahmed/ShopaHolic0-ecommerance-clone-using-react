import React, { useState }from 'react';
import { AboutWebApi } from '../Context/ItemsAPI';
import { useLocation } from 'react-router-dom';

const AboutSite = () => {
  const [AboutSiteData , setAboutsiteData] = useState(AboutWebApi);
  const [visibleData, setVisibleData] = useState(1);
  const [showLess, setShowLess] = useState(false);
  const location = useLocation();

  const loadMore = () => {
    setVisibleData((prevVisibleItems) => prevVisibleItems + 2); 
    setShowLess(true);
  };

  const loadLess = () => {
    setVisibleData(1); 
    setShowLess(false); 
  };

  if (!location.pathname.includes('/Categoryy/') && !location.pathname.includes('/DataItem/') && !location.pathname.includes('/ContactUs')  && !location.pathname.includes('/FAQs')) {
  return (
    <div className='bg-white border-b-2'>
    <div className='bg-white'>
      {AboutSiteData.slice(0, visibleData).map((Sitedata) => {
        const {id,head, bodyPara01,bodyPara02,bodyPara03} = Sitedata;
        return(
        <div className='mx-20 pt-14' key={id}>
      <div className='Heading' key={id}>

        <h1 className='text-2xl font-bold'>{head}</h1>

        <div className='paragraph-0 mr-10 text-sm'>
          <p className='mb-4 mt-6'>{bodyPara01}</p>
          <p className='mb-4'>{bodyPara02}</p>
          <p>{bodyPara03}</p>
        </div>
      </div>
    </div>
      )})}
      

    </div>
      {/* Load More Button */}

      {visibleData < AboutWebApi.length && (
        <div className='mt-10 text-center'>
          <button
             className='py-2 px-4 text-base font-semibold  border-2 border-blue-600 text-blue-600  hover:bg-blue-600 hover:text-white mb-6'
             onClick={loadMore}
          >
            Read More

          </button>

        </div> 
     )}

{showLess && (
          <div className='mt-10 text-center'>
            <button
             className='py-2 px-4 text-base font-semibold  border-2 border-blue-600 text-blue-600  hover:bg-blue-600 hover:text-white mb-6'
              onClick={loadLess}
            >
              Read Less
              
            </button>
          </div>
        )}

        <div className='flex mt-5  justify-center ml-20 mb-7 pb-5'>
          <div className='mr-28 hover:text-blue-600 text-lg font-normal'>
            <img src="/SiteLogo1.svg" alt="Logo-Image " className='w-16 mx-auto' />
            <h1>Genuine Products</h1>
          </div>

          <div className='hover:text-blue-600 text-lg font-normal'>
            <img src="/SiteLogo2.svg" alt="Logo-Image " className='w-16 mx-auto' />
            <h1>Easy And Secure Payment</h1>
          </div>

          <div className='ml-28 hover:text-blue-600 text-lg font-normal'>
            <img src="/SiteLogo3.svg" alt="Logo-Image " className='w-16 mx-auto' />
            <h1>15 Days Return/Refund Policy</h1>
          </div>

        </div>
     </div>
  )}

  return null;
}

export default AboutSite;
