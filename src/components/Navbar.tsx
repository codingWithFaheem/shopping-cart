import React  from 'react'
import {BiShoppingBag} from 'react-icons/bi'
import { useShoppingCart } from '../context/ShopingCartContext'
import {Link} from 'react-router-dom'
import {CiMenuBurger} from 'react-icons/ci';
import {CiMenuFries} from 'react-icons/ci';


const Navbar = () => {
    const {cartQuantity, isMenuBarOpen, openMenu  , openCart } = useShoppingCart()
  return (
    <div className='bg-[#123]'>
            <nav className=' sticky top-0 m-auto bg-[#123] flex justify-between items-center h-20 lg:w-[1024px] px-4'>
                <div className='blok lg:hidden p-4' onClick={openMenu}>
                        { isMenuBarOpen ?  
                          <CiMenuFries  className='text-[#4dcfb5]  text-[32px]'/>

                          :
                        <CiMenuBurger  className='text-[#4dcfb5]  text-[32px]'/>

                    }
                </div>
              <p className='product-font text-[#4dcfb5] text-[24px] font-bold'>homCee</p>
                <ul className='  w-[22rem] hidden lg:flex justify-around item-center text-[#4dcfb5] font-bold'>
                    <li className=' cursor-pointer'><Link to='/' >Home </Link></li>
                    <li className=' cursor-pointer'><Link to='/store'> Store </Link></li>
                    <li className=' cursor-pointer'><Link to='/contact' >Contact </Link></li>
                    <li className=' cursor-pointer'>Blogs</li>

                </ul>
               { cartQuantity > 0 &&
                <div className=' w-[64px] h-[64px] rounded-full relative cursor-pointer'
                    onClick={openCart}
                >
                    <BiShoppingBag className='text-white mt-3 ml-4 text-[28px] cursor-pointer'/>
                    <span className='bg-[#375a57] text-green-300 text-[16px]  absolute bottom-[0.1rem] left-[2rem] px-[7px] rounded-full '>{cartQuantity}</span>
                </div>
                }
            </nav>
      </div>
  )
}   
export default Navbar ; 