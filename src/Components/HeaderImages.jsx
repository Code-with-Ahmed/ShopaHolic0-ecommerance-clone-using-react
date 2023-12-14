import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useLocation } from 'react-router-dom';

const HeaderImages = () => {

  const location = useLocation();

  if (!location.pathname.includes('/Categoryy/') && !location.pathname.includes('/DataItem/') && !location.pathname.includes('/ContactUs')  && !location.pathname.includes('/FAQs')) {
    return (
      <div className='bg-white'>
         <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        showArrows={false}
        showIndicators={false}
        autoPlay={true}
        interval={4000} // Change slide every 3 seconds
        className=''
      >
        <div className='mx-14'>
          <button className='w-full'>
            <img 
                src="/Header-1.jpg" 
                alt="Header-Image-1"
          /></button>
        </div>
  
        <div  className='mx-14'>
           <button className='w-full'>
              <img 
                  src="/Header-2.jpg" 
                  alt="Header-Image-2"
            /></button>
        </div>
      </Carousel>
      </div>
    )
  }

  return null;

}

export default HeaderImages;
