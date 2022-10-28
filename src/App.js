import './css/App.css';
import { useState } from 'react';
import {Routes , Route} from 'react-router-dom'
import SharedLayout from './components/SharedLayout';
import Home from './components/Home';
import Crew from './components/Crew';
import Technology from './components/Technology';
import Destination from './components/Destination';

function App() {

  const [showMobileMenu,setShowMobileMenu] = useState(false)


  function toggleMobileMenu(){
    setShowMobileMenu(prev => !prev)
  }


  return (
    <Routes>
      <Route path='/' element={<SharedLayout showMobileMenu={showMobileMenu} toggleMobileMenu={toggleMobileMenu}/>}>
      <Route index element={<Home/>} />
      <Route path='/crew' element={<Crew />} />
      <Route path='/destination' element={<Destination />} />
      <Route path='/technology' element={<Technology />} />
      </Route>
    </Routes>
  );
}

export default App;
