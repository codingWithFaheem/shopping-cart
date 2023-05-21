import React  from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineHeart} from 'react-icons/ai'
import {SlLike} from 'react-icons/sl'
import {SlStar} from 'react-icons/sl'
import { useShoppingCart } from '../context/ShopingCartContext'


const Home =  () =>  {
  const {isCartOpen , closeCart} = useShoppingCart()
  const cartState = isCartOpen ? 'blur-sm' :''
  return (
    <div className={`bg-gradient-to-r from-[#65c498] to-[#7cd7ee]   h-[129vh] lg:h-screen pt-20  ${cartState} `}>
          <div className=' lg:w-[1200px] h-full2
          
          lg:h-[63vh] w-full m-auto
          flex flex-col items-center lg:flex-row
          px-6
          ' onClick={closeCart}>
              <div className="w-[89%]
                    flex flex-col  items-center  lg:items-start lg:justify-start gap-y-10">
                  <p className=' leading-[4.2rem] lg:leading-[5.5rem] font-bold lg:pr-8 lg:mt-12 heroFont text-center lg:text-start  text-[3.5rem] lg:text-[4.5rem] text-[#123]'>We create home more asthetic</p>
                  <p className='  text-[18px] text-[#123] lg:w-[49%] pl-5'>Enjoy new Luxurious sitting chairs every time you move  and feel the castle house of  your dream</p>
                      <button className='tracking-[0.2rem] w-[14rem] py-4 bg-[#123]  text-[#93edcf] lg:ml-4 '><Link to='/store'>VISIT OUR STORE </Link></button>
              </div>
               <div className="relative  lg:h-[44rem]  mt-8 lg:mt-20">
                      <div className="z-0 rounded-t-full md:rounded-t-[0] lg:ml-[7rem] lg:mt-6 w-[20rem] lg:w-[23rem] h-[34.5rem] bg-[#123] "></div>
                      <img src="./imgs/heroImg.png" alt=""  className=' z-10 object-contain h-[24rem] lg:h-[31rem] absolute left-5 top-[3rem] lg:top-0'/>
                     <div className=" px-2 lg:px-4 h-[11rem]  w-full lg:w-[76%] lg:ml-28
                      flex justify-center   lg:justify-between items-center  absolute  top-[24rem] lg:top-[35rem]
                      ">
                         <div className="  w-[6rem] lg:w-[7rem] h-[6rem] flex flex-col  justify-between  items-center lg:items-start">
                          <AiOutlineHeart  className=' text-[24px]  text-[#4dcfb5] lg:text-[32px] lg:text-[#1f4c27]' />
                          <p className="heroFont text-[#4dcfb5] lg:text-[#123] text-[17px] lg:text-[19px] font-bold">921</p>
                          <p className=' leading-6 font-bold text-[8px]  md:text-[12px] text-[#4dcfb5] lg:text-[#123] product-fon'>Home Furniture </p>
                           </div>
                       <div className="  w-[7rem] h-[6rem] flex flex-col  justify-between  items-center lg:items-start">
                          <SlLike className='text-[18px]  text-[#4dcfb5] ;g:text-[22px] font-bold lg:text-[#1f4c27]'/>
                          <p className="heroFont text-[#4dcfb5] lg:text-[#123] text-[19px] font-bold">512</p>
                          <p className='leading-6 font-bold text-[12px] text-[#4dcfb5] lg:text-[#123] product-fon'>Fresh Design  </p>
                           </div>
                        <div className="  w-[7rem] h-[6rem] flex flex-col  justify-between  items-center lg:items-start">
                          <SlStar  className='text-[24px]  text-[#4dcfb5] lg:text-[27px] font-bold lg:text-[#1f4c27]'/>
                          <p className="heroFont text-[#4dcfb5] lg:text-[#123] text-[25px] font-bold">162</p>
                          <p className='leading-6 font-bold text-[12px] text-[#4dcfb5] lg:text-[#123] product-fon'>Custamize theme </p>
                           </div>
                          
                      </div> 
               </div> 
          </div>

    </div>
  )
}

export default  Home ;