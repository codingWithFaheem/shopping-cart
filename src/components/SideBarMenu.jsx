import {TfiClose} from 'react-icons/tfi'
import { useShoppingCart } from '../context/ShopingCartContext'
import { Link } from 'react-router-dom'


export const SideBarMenu = () => {
    const {closeMenu , isMenuBarOpen} = useShoppingCart()
  return (
    <div> {
            isMenuBarOpen &&  <div className={`z-20 h-[118vh]  bg-[#123] lg:hidden  w-full absolute  left-0 top-20

            p-5
          `}>
              
                        <div  onClick={closeMenu}>
                          <TfiClose className= 'text-white text-[24px] cursor-pointer'/>
                        </div> 
                       
          
            <div className='bg-primary px-4 py2 mt-4 rounded-2xl h-[370px] flex
             flex-col items-center justify-evenly text-[#4dcfb5] text-[22px] tracking-[4px]
            '>
                                    <p className=' cursor-pointer'onClick={closeMenu} ><Link to='/' >Home </Link></p>
                    <p className=' cursor-pointer' onClick={closeMenu}><Link to='/store'> Store </Link></p>
                    <p className='cursor-pointer' onClick={closeMenu}> <Link to='/about' >About</Link></p>
                    <p className=' cursor-pointer' onClick={closeMenu}><Link to='/contact' >Contact </Link></p>
                    <p className=' cursor-pointer' onClick={closeMenu}>Blogs</p>
             
                  </div>
                  </div>
        }
   
    

    </div>
  )
}