import NavBar from './Components/NavBar';
import { useState } from 'react';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import ContactUs from './Components/ContactUs';
import FAQs from './Components/FAQs';
import CategoryList from './Components/CategoryList';
import ItemDetail from './Category-Pages/ItemDetail';
import ForYou from './Components/ForYou';
import AboutSite from './Components/AboutSite';
import Footer from './Components/Footer';


const App =() => {
  const [logoClicked, setLogoClicked] = useState(false);
  
  const handleLogoClick = () => {
    // Handle logo click, for example:
    setLogoClicked(true);
  };
  const handleLogoToFalseAgain = () => {
    setLogoClicked(false);
  }
  
  return (
    <BrowserRouter>    
             <NavBar handleLogoClick={handleLogoClick}  /> 
      <Routes>
            <Route path='/NavBar' element={<NavBar /> } />
            <Route path='/NavBar' element={<ForYou /> } />
            <Route path='/Categoryy/:CategoryNames' element={''} />

            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/FAQs" element={<FAQs />} />
            <Route path='/DataItem/:ItemName' element={<ItemDetail />} />
            <Route path='/Categoryy/:CategoryNames' element={''} />
        </Routes>
           <CategoryList logoClicked={logoClicked} handleLogoToFalseAgain={handleLogoToFalseAgain}  />
           <ForYou />
           <AboutSite />
           <Footer  handleLogoClick={handleLogoClick}   />
         
    </BrowserRouter>
      )
}

export default App;
