import React  from 'react';
import './App.css';
import {Routes , Route ,Navigate } from 'react-router-dom';
import {Home , Store ,About , Contact} from './pages'
import {Navbar, ShoppingCart} from './components';
import { ShoppingCartProvider } from './context/ShopingCartContext';

function App() {
 

  return (
    <div className="app h-screen z-0">
      <ShoppingCartProvider>
          <Navbar />
          <ShoppingCart/>   
          <Routes>
            <Route path='/' element = {<Home />} />
            <Route path='/store' element = {<Store />} />
            <Route path='/about' element = {<About />} />
            <Route path='/contact' element = {<Contact/>} />
            <Route path="*" element ={<Navigate to ="/"/>}  />
          </Routes>

      </ShoppingCartProvider>
    </div>
  );
}

export default App;
