import React from 'react'
import { Josefin_Sans } from 'next/font/google';
// import '../styles/globals.css'; // Import global styles

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Header() {
  return (
    <div>
        {/* below div for header */}
      <div className='w-[1920] h-[44px] bg-[#7e33e0] flex gap-2'>
        <div className='' id="emailandlogo flex ">
        
        <img src="/uil_envelope-alt.png" alt="email logo" className='w-[16] h-[16] flex mt-[12px] pl-[377px]'/>
        </div> 
{/* div for email text */}
    <div className={`${josefinSans.className} w-[171] h-[16] font-semibold flex mt-[8px]`}>
    mhhasanul@gmail.com
  </div> 
{/* below div for log phoneno */}
  <div className='mt-[12px]'> 
    <img src='/bx_bx-phone-call.png'/>
    </div>
{/* below div for phone no */}
<div className='w-[97] h-[16] font-semibold mt-[10px] '>
(12345)67890
</div>
{/* below div contain english usd login wishlist cart and and all logos */}
<div className={`grid grid-cols-7 ${josefinSans.className}w-[171] h-[16] font-semibold flex mt-[8px]`}>
<div>
English
</div>
<div>
    image dropdown
</div>
<div>
USD
</div>
<div>
    image dropdown
</div>
<div>
Login
</div>
<div>
    image dropdown
</div>
<div>
Wishlist
</div>
<div>
    image dropdown
</div>
<div>
Cart image   
</div>
</div>
        
        </div>

      </div>


   
  )
}
