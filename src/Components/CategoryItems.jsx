import { Link,useLocation } from 'react-router-dom';

const CategoryItems = ({ItemsData , selectedCategory, logoClicked}) => { 
  const location = useLocation();
  

   if(!logoClicked){
      if(!location.pathname.includes('/DataItem/') && !location.pathname.includes('/NavBar')){
    
  return (
    <>
       <h2 className='inline-block mx-[5rem] mt-16 text-2xl font-semibold'>
        Wellcome to {selectedCategory} Section ❤
        </h2>
      <div className='grid grid-cols-6 mx-[5rem]'>

       {ItemsData.map((ItemData) => {
        const {id,image,ItemName,Title,Rs,Rating } = ItemData;
        return(
          <Link to={`/DataItem/${ItemData.ItemName}`}  key={id}>
          <div className='bg-white mt-4 w-[13.5rem] h-[22rem] hover:shadow-xl'>
            <div className='image hover:shadow-xl'>
                 <img src={image} alt='Image' className='bg-white h-48' />
            </div>
            <div className='mt-4 mx-2'>
              <h1 className='text-lg font-medium'>{ItemName }</h1>
              <div className='Title text-base font-medium text-gray-500'> { Title } </div>
              <div className='Rs block mt-[0.23rem] text-orange-700 font-normal'> { Rs } </div>
              <div className='Rating pb-3'> { Rating } </div>
            </div>
          </div>
          </Link>
        )
       })

       }
       </div>
       
   </>
  )}}
      return null;
}

export default CategoryItems;
