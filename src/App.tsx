import React , {useState}  from 'react';
import './App.css';
import {Routes , Route ,Navigate } from 'react-router-dom';
import {Home , Store ,About , Contact} from './pages'
import {Navbar, ShoppingCart} from './components';
import { ShoppingCartProvider } from './context/ShopingCartContext';

function App() {
  const [isCartOpen , setCartOpen] = useState(false);
  const closeCart = () => setCartOpen(false); 
  const openCart = () => setCartOpen(true); 

  return (
    <div className="app h-screen z-0">
      <ShoppingCartProvider>
          <Navbar openCart={openCart} />
          <ShoppingCart  isCartOpen={isCartOpen} closeCart = {closeCart} />
          
          <Routes>
            <Route path='/' element = {<Home isCartOpen = {isCartOpen}/>} />
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
