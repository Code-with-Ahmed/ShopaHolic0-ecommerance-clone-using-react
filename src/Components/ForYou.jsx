import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Items } from '../Context/ItemsAPI';

const ForYou = () => {
  const [ItemsData, setItemData] = useState(Items);
  const [visibleItems, setVisibleItems] = useState(18);
  const [showLess, setShowLess] = useState(false);
  const location = useLocation();

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6);
    setShowLess(true); 
  };

  const loadLess = () => {
    setVisibleItems(18); 
    setShowLess(false); 
  };

  if (!location.pathname.includes('/DataItem/') && !location.pathname.includes('/Categoryy/') && !location.pathname.includes('/ContactUs')  && !location.pathname.includes('/FAQs')) {
    return (
      <>
        <h2 className='inline-block mx-[5rem] mt-16 text-2xl font-semibold'>Just For You</h2>
        <div className='grid grid-cols-6  gap-4 mx-[5rem]'>

          {ItemsData.slice(0, visibleItems).map((ItemData) => {
            const { id, image, ItemName, Title, Rs, Rating } = ItemData;
            return (
              <Link to={`/DataItem/${ItemName}`} key={id}>
                <div className='bg-white mt-4 w-[13.5rem] h-[22rem] hover:shadow-xl' key={id}>
                  <div className='image hover:shadow-xl'>
                    <img src={image} alt='Image' className=' h-48 bg-white' />
                  </div>
                  <div className='mt-4 mx-2'>
                    <h1 className='text-lg font-medium'>{ItemName}</h1>
                    <div className='Title text-base font-medium text-gray-500'> {Title} </div>
                    <div className='Rs block mt-[0.23rem] text-orange-700 font-normal'> {Rs} </div>
                    <div className='Rating pb-2'> {Rating} </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Load More / Show Less Button */}
        {(visibleItems < Items.length && !showLess) && (
          <div className='mt-14 text-center'>
            <button
              className='py-1 text-base font-semibold px-36 border-2 hover:text-white border-orange-500 hover:bg-orange-500 mb-10'
              onClick={loadMore}
            >
              LOAD MORE
            </button>
          </div>
        )}

        {showLess && (
          <div className='mt-14 text-center'>
            <button
              className='py-1 text-base font-semibold px-36 border-2 hover:text-white border-orange-500 hover:bg-orange-500 mb-10'
              onClick={loadLess}
            >
              SHOW LESS
            </button>
          </div>
        )}
      </>
    )
  }
  return null;
}

export default ForYou;
