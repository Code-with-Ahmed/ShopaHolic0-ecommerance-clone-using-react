import {useState} from 'react';
import { Link,useLocation } from 'react-router-dom';
import { Items,Categories } from '../Context/ItemsAPI';
import CategoryItems from './CategoryItems';


const CategoryList = ({ logoClicked,handleLogoToFalseAgain}) => {
  const [isCategory,setIsCategory]= useState(Categories);
  const [ItemsData , setItemsData] = useState(Items);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const isCategorySelected = selectedCategory !== null;
  const location = useLocation();

  const filterItemsByCategory = (CategoryNames) => {
    const updatedList = Items.filter((item) => item.Category === CategoryNames);
    setItemsData(updatedList);
    setSelectedCategory(CategoryNames); 

  };

  const MakeLogoClickFalse = () =>{
    handleLogoToFalseAgain();
  }

  

  if (!location.pathname.includes('/Category/') && !location.pathname.includes('/DataItem/') && !location.pathname.includes('/ContactUs')  && !location.pathname.includes('/FAQs')) {
  return (
    <>
   
     <div className='flex mt-14 space-x-10 justify-center'>
        {isCategory.map((List) => {

          const {id ,CategoryNames,image } = List;
          return(
           <Link to={`/Categoryy/${CategoryNames}`} key={id}>
            <button
                 className=' flex w-48  h-12 py-2 px-3 bg-white rounded-full hover:shadow-xl hover:text-green-500'
                 key={id}
                 onClick={() => {filterItemsByCategory(CategoryNames), MakeLogoClickFalse()}}
                 >   
              <span 
                      key={id} 
                      className='flex-grow text-left flex text-lg font-normal'> 
                      { image }   
                      {CategoryNames}  
               </span>
              
                <i className="fa-solid fa-angle-right fa-lg mt-4"></i>

            </button>
            </Link>
            )
          })}  
      </div>
      {isCategorySelected && <CategoryItems ItemsData={ItemsData} selectedCategory={selectedCategory} logoClicked={logoClicked}  />}
    </>
  )}
  return null;
}

export default CategoryList;
