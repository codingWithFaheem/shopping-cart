import React  from 'react'
import {BiShoppingBag} from 'react-icons/bi'
import { useShoppingCart } from '../context/ShopingCartContext'
import {Link} from 'react-router-dom'


const Navbar = () => {
    const {cartQuantity, openCart } = useShoppingCart()
  return (
    <div className='bg-[#123]'>
            <nav className=' sticky top-0 m-auto bg-[#123] flex justify-between items-center h-20 lg:w-[1240px] px-2'>
                <ul className='  w-[22rem] flex justify-around item-center text-[#4dcfb5] font-bold'>
                    <li className=' cursor-pointer'><Link to='/' >Home </Link></li>
                    <li className=' cursor-pointer'><Link to='/store'> Store </Link></li>
                    <li className='cursor-pointer'> <Link to='/about' >About</Link></li>
                    <li className=' cursor-pointer'><Link to='/contact' >Contact </Link></li>
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