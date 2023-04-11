import React, {FC} from 'react'
import { StoreItem } from '../components';
import { useShoppingCart } from '../context/ShopingCartContext';


const Store:FC = () =>  {
 const {storeItems , isCartOpen} = useShoppingCart()
  const cartState = isCartOpen ? 'blur-sm' :''
  return (
    <div className={`${cartState} lg:w-[1240px] h-[120vh] 
     flex flex-wrap justify-center items-start gap-7 
     m-auto mt-[7rem] px-6 py-20 
      bg-gradient-to-r from-[#e4fdf2] to-[#e7e8e8]
    `}>
    {storeItems.map(item => { 
      return <div>
            <StoreItem  key={item.id} {...item} />


        
        </div>
})} 
    </div>
  )
}

export default  Store ;