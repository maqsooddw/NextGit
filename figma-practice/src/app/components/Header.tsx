import React from 'react'
import Link from 'next/link';
// import {FaStar} from "react-icon/fa";
// import Products from "./Products";

{/* <div>
<div className="w-[1440px] h-[48px] bg-[#000000] flex">
  <div className="w-[859px] h-[24px] text-[#ffffff] text-[14px] flex mt-[12px] relative pl-[445px]  ">
    <div className="w-[550px] h-[24px] flex">
      <p className="w-[474px] leading-[24px] text-[14px] ">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF
        50%!
      </p>
      <p className="font-semibold">ShopNow</p>
    </div>
    <div className="relative left-[231px] flex">
      <p>English</p>
      <Image src={"/DropDown.png"} alt="" width={24} height={24} />
    </div>
  </div>
</div> */}

const Header = () => {
  return (
    <div className="h-[48px] w-[1440px] bg-black flex">
    <div className="w-[859px] h-[24px] text-[#ffffff] text-[14px] flex mt-[12px] relative pl-[445px]">
      
      <div className="h-[24px] w-[550px] flex">
        <p className='w-[474px] text-[14px]'> Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! </p>
        <p className='font-semibold'>ShopNow</p>
        
        </div>
      <div className="relative left-[231px] flex">
      <p>English</p>
      <img src={"/DropDown (1).png"} alt="" width={24} height={24} className=' '/>
      </div>
      </div>
      </div>
  
      )
      }

export default Header
 
