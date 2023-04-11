import React from 'react'
import { useShoppingCart } from '../context/ShopingCartContext';
import { ImBin } from 'react-icons/im';
import { FaTruck } from 'react-icons/fa';
type CartItemProps = {
   id: number ;  
   quantity: number 
}

const CartItem = ({id, quantity}: CartItemProps) => {
    const {removeFromCart , storeItems } = useShoppingCart()
    const  item = storeItems.find(i => i.id === id)
        if(item == null) return null     
       
  return (
    <div className='mt-4 h-[9rem]  flex '>
        <img src={item?.imgUrl} 
        className='w-[9.5rem]  h-[8.6rem]'
        alt="" />
        <div className="h-[8.6rem] w-[57%] px-4 py-2 bg-[#112a23] flex flex-col justify-evnly">
                 <p className=' product-font text-[#7bfff0] text-[19px]'>{item.name}
                 {quantity > 1 && (
                 <span className=' text-[13px] text-[#c7ffff]'> x {quantity}</span> ) 
                 }
                 </p>
                 <p className=" text-[#a1fbf2] text-[13px]">Lorem ipsum dolor sit ..</p>
                <p className=' text-[16px] text-[#7bfff0] font-bold'>$ {item.price} </p>
            <div className=' h-8 flex items-end justify-between gap-4 mt-4'>
                <div className='flex'>
                    <ImBin className=' text-[#70f7e7] text-[21px] cursor-pointer' onClick={() => removeFromCart(item.id)}/>
                    <FaTruck className=' text-[#70f7e7] text-[22px] ml-3 cursor-pointer' />
                </div>
                <div>
                    <p className=' text-[12px] text-[#7bfff0] ml-3 '>Total</p>
                 <p className=' text-[17px] font-bold text-[#7bfff0] leading-4'>$ {item.price * quantity}</p>
                </div>
            </div>
       </div>
      
  </div>
  )
}
export default CartItem ;