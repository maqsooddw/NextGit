import React from 'react';
import { Josefin_Sans } from 'next/font/google';

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Header() {
  return (
    <div>
      {/* Header container */}
      <div className="w-[1920] h-[44px] bg-[#7e33e0] grid grid-cols-[1fr,1fr]  text-[#ffffff]">
        {/* Left Section: Email and Phone */}
        <div className="grid grid-cols-[377px,171px,16px,171px] gap-3">
          {/* Email Icon */}
          <div className='grid justify-end'>
            <img
              src="/uil_envelope-alt.png"
              alt="email logo"
              className="w-[16] h-[16] mt-[12px]"
            />
          </div>
          {/* Email Text */}
          <div
            className={`${josefinSans.className} w-[171] h-[16] font-semibold mt-[8px]`}
          >
            mhhasanul@gmail.com
          </div>
          {/* Phone Icon */}
          <div className="mt-[12px]">
            <img src="/bx_bx-phone-call.png" alt="phone logo" />
          </div>
          {/* Phone Number */}
          <div className="w-[97] h-[16] font-semibold mt-[10px]">
            (12345)67890
          </div>
        </div>

        {/* Right Section: Dropdowns and Links */}
        <div
          className={`grid grid-cols-[54px,16px,67px,16px,77px,16px,92px,49px,16px] justify-center ${josefinSans.className} font-[600] text-[16px] mt-[14px]`}
        >
          {/* Language */}
          <div className="w-[54] h-[16px] ">English</div>
          <div className='w-[16px] h-[16px] mt-[5px] '><img src="akar-icons_chevron-down.png" alt="drop down logo" /></div>
          {/* Currency */}
          <div className='w-[34px] h-[16px] pl-[33px]'>USD</div>
          <div className='w-[16px] h-[16px] mt-[5px]'><img src="akar-icons_chevron-down.png" alt="drop down logo" /></div>
          {/* Login */}
          <div className='w-[43px] h-[16px] pl-[33px]'>Login</div>
          <div className='w-[16px] h-[16px] mt-[5px]'><img src="carbon_user.png" alt="drop down logo" /></div>
          {/* Wishlist */}
          <div className='w-[58px] h-[16px] pl-[33px]'>Wishlist</div>
          <div className='w-[16px] h-[16px] pl-[0px] mt-[5px]'><img src="uil_heart-alt.png" alt="drop down logo" /></div>
          {/* Cart */}
          <div className='w-[24px] h-[24px] mt-[0px]'><img src="fluent_cart-24-regular.png" alt="drop down logo" /></div>
        </div>
      </div>
    </div>
  );
}
