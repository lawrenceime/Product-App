import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa6";

const HeroSection = () => {
  return (

       <div className=  'hidden md:block lg:block relative w-[90vw]  h-[350px] mx-auto mt-[24px] rounded-[12px] ' >

    <div className='  rounded-[12px] overflow-hidden'>
        <Image src='https://images.pexels.com/photos/1670766/pexels-photo-1670766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' fill className='object-cover object-center opacity-[60%]' alt='White sneakers'/>
        <div className='absolute max-w-[30%] p-[16px] top-[20%] left-10 '>
        <p className='font-bold text-black text-[32px] '>Step out to see our physical stores near you</p>
        <div className='flex items-center justify-center w-[80px] h-[80px] rounded-[100px] bg-[#23A6F0] mt-[8px] cursor-pointer'>
        <FaArrowRight style={{width:'40px', height:'40px'}}/>
        </div>
        
        </div>

    </div>
       </div> 
  
  )
}
// Cycle through images if there are more products than images
export default HeroSection