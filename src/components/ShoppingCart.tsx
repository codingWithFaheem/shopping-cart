import React from 'react'
import {GrClose as CloseBtn} from 'react-icons/gr' ;
import { useShoppingCart } from '../context/ShopingCartContext';
import StoreItem from '../data/item.json'
import CartItem from './CartItem';
type ShoppingCartProps =  {
  closeCart: () => void
  isCartOpen : boolean 
}
 const ShoppingCart = ({isCartOpen , closeCart}: ShoppingCartProps) => {
  const {cartItems} = useShoppingCart()
    const showCart = isCartOpen ? 'w-[400px]' : 'hidden'
  return (
    <div className={`fixed h-screen top-0 right-0 ${showCart} py-8 px-6  
     bg-[#aeebea] z-10
    `}>
      <div className='flex items-center justify-between'>
            <p className='produtct-fon text-[18px] font-bold text-gray-700'>Shopping Cart</p>
                <div onClick={closeCart} className=' cursor-pointer'>
                    <CloseBtn />
                </div>
        </div>
        {cartItems.map(item => (
           <CartItem  key={item.id} {...item}/>
           ))
        }
       <div className=' w-[90%]   absolute bottom-20 '>           
            <div className='border-2 border-[#123]h-10 flex items-center justify-between
         
        '>       
                <p className='product-font text-[22px] font-bold'>Subtotal</p>
                <p className='product-font text-[22px] font-bold'>$ {" "} {
                        cartItems.reduce((total , cartItem) => {
                          const item = StoreItem.find(i => i.id === cartItem.id)
                          return total + (item?.price  || 0 ) * cartItem.quantity
                        },0)

                } </p>
            </div>
            <button className='tracking-[0.2rem] w-full bg-[#123] h-10 mt-5 border-none text-white rounded-full'>CHEAK OUT</button>
       </div>
    </div>
  )
}
export default ShoppingCart ;