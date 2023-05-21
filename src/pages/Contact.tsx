import React, {FC} from 'react'
import {CiLocationOn} from 'react-icons/ci'
import {FiMail} from 'react-icons/fi'
import {BsTelephone} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi' ;
import {FiFacebook} from 'react-icons/fi' ;
import {AiOutlineGithub} from 'react-icons/ai' ;
import {FiLinkedin} from 'react-icons/fi' ;

const Contact:FC = () =>  {
  return (
    <div className="w-full lg:h-screen bg-[#a1f3dc]  lg:pt-28 p-5">
         <div className=" m-auto   w-full md:w-[756px] lg:w-[1024px] xl:w-[1240px] flex flex-col lg:flex-row justify-start lg:items-start lg:justify-center lg:gap-x-20 items-start gap-x-20 ">
                <div className=' w-full  lg:w-[29rem]  px-2 lg:py-5 mt-10'>
            <p className=' product-font font-bold text-center text-[3rem] md:text-[3.8rem] lg:text-[5rem] lg:leading-[6rem]'>Get Started <br /> to fix</p>
              <div className='s mt-6 m-auto w-[100%] lg:w-[74%] '>
                        <div className="  w-full flex items-center justify-between">
                        <BsTelephone className='text-[#123] text-[22px] lg:text-[30px]' />
                          <p className="font-bold text-[#123] text-[19px] lg:text-[24px]">+952314123</p>
                        </div>
                        <div className="mt-8 w-full  flex items-center  justify-between">
                              <FiMail className=' text-[#123] text-[22px] lg:text-[30px]' />
                              <p className=" text-[#123] text-[14px] lg:text-[16px]">homceefurnitur@gmail.com</p>
                        </div>
                        <div className="mt-8 w-full flex items-center justify-between">
                         <CiLocationOn className='text-[#123] text-[22px] lg:text-[34px]' />
                          <p className="text-[#123] text-[12px] lg:text-[14px] text-end">Royal apartment shell street 2066 Chicago Avenue Fresno California USA    </p>
                        </div>
                        <div className=" bg-[#123]
                          w-full mt-12
                           h-[4rem]   px-4 md:py-4  rounded-[13px]
                         hidden lg:flex justify-center items-center gap-x-8
                          
            ">
              <FiInstagram className=' cursor-pointer text-[28px]  md:text-[34px] md:text-[] text-[#4cdfb5]' />
              <FiFacebook className=' cursor-pointer text-[28px] md:text-[34px] md:text-[] text-[#4cdfb5]' />
              <AiOutlineGithub className=' cursor-pointer text-[28px] md:text-[34px] md:text-[] text-[#4cdfb5]' />
              <FiLinkedin className=' cursor-pointer text-[28px] md:text-[34px]  text-[#4cdfb5]' />
            </div>
                       
                       
              </div>
                </div>
            <form className=" mt-6 flex flex-col">
                            <div className="border- relative  borde-2 rem] py-6">

                            <label htmlFor="name"
                            className=" font-1 font-bold text-[#123]  text-[16px] md:text-[18px]
                            py-[0.6rem] px-[1.5rem] m
                          absolute top-0 bg-[#a1f3dc] left-6
                            "
                            >Name</label>
                            <input type="text"  placeholder="Ex : Jame Mordan" className="
                          h-[4rem] w-[22rem] sm:w-[26rem] md:w-[]  px-4 rounded-[13px]
                            placeholder:text-[#123] font-1  text-[16px]
                            text-[#123] 
                          border-2 border-[#123]
                          outline-none bg-[#a1f3dc] 
                          "/>

                            </div>
                            <div className=" relative  borde-2 py-6">

                                    <label htmlFor="name"
                                    className=" font-1 font-bold text-[#123]  text-[16px] md:text-[18px]
                                    py-[0.6rem]  px-[1.5rem] 
                                    absolute top-0 bg-[#a1f3dc] left-6 
                                    "
                                    >Email</label>
                                    <input type="text"  placeholder="Ex : jameMordan10@gmail.com" className="
                                    h-[4rem] w-[22rem] sm:w-[26rem] md:w-[]   px-4 rounded-[13px] text-[#123]
                                    placeholder:text-[#123] font-1  text-[16px]
                                    border-2 border-[#123]
                                    outline-none bg-[#a1f3dc] 
                                    "/>

                            </div>   
                            <div className=" relative    py-6">
                            <label htmlFor="name"
                                    className=" font-1 font-bold text-[#123]  text-[16px] md:text-[18px]
                                    py-[0.6rem] px-[1.5rem] 
                                    absolute top-0 bg-[#a1f3dc] left-6
                                    "
                                    >Messge</label>
                                    <textarea className="
                                     h-[14rem] w-[22rem] sm:w-[26rem] md:w-[]   px-4 pt-10 rounded-[13px]
                                     font-1  text-[16px] text-[#123]
                                     border-2 border-[#123]
                                     outline-none bg-[#a1f3dc] 
                                     ">
                                        
                                    </textarea>
                          </div>                                                                                           
               </form>
               <div className=" bg-[#123]
                          w-full md:w-[64%] lg:w-[28%] xl:w-[22%]
                           h-[4rem]   px-4 md:py-4  rounded-[13px]
                         lg:hidden flex justify-center items-center gap-x-8
                          
            ">
              <FiInstagram className=' cursor-pointer text-[28px]  md:text-[34px] md:text-[] text-[#4cdfb5]' />
              <FiFacebook className=' cursor-pointer text-[28px] md:text-[34px] md:text-[] text-[#4cdfb5]' />
              <AiOutlineGithub className=' cursor-pointer text-[28px] md:text-[34px] md:text-[] text-[#4cdfb5]' />
              <FiLinkedin className=' cursor-pointer text-[28px] md:text-[34px]  text-[#4cdfb5]' />
            </div>
        </div>

    
    </div>
  )
}

export default  Contact ;