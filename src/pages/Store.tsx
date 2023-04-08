import React, {FC} from 'react'
import productItem from '../data/item.json';
import { StoreItem } from '../components';

const Store:FC = () =>  {
  return (
    <div className='lg:w-[1240px] h-[120vh] 
     flex flex-wrap justify-center items-start gap-7 
     m-auto mt-[7rem] px-6 py-20 
      bg-gradient-to-r from-[#e4fdf2] to-[#e7e8e8]
    '>
    {productItem.map(item => { 
      return <div>
            <StoreItem  key={item.id} {...item} />


        
        </div>
})} 
    </div>
  )
}

export default  Store ;