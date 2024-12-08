// components/Navbar.tsx
import React from 'react';
import { Josefin_Sans } from 'next/font/google';
import Link from 'next/link';


const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

import { Lato } from 'next/font/google';
import { link } from 'fs';


const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'], // You can specify the font weights you need
});



const Navbar: React.FC = () => {
  return (
    
      <div className={`  ${josefinSans.className} w-[1177px] h-[40px] ${josefinSans.className}
       container mx-auto flex p-5 flex-col md:flex-row items-center`}>
        <a
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          href="#"
        >
       
          <span className="w-[98px] h-[34px] ml-3 text-[34px] font-[700]">Hekto</span>
        </a>
        <nav className={`${lato.className} text-[#0d0e43] flex md:ml-auto flex-wrap items-center text-base justify-center`}>
          <a href="#" className="mr-5 w-[41] h-[20] hover:text-[#fb2e86]">
            Home
          </a>
          <a href="#" className="mr-5 w-[41] h-[20] hover:text-[#fb2e86]">
            Pages
          </a>
          <a href="#" className="mr-5 w-[41] h-[20] hover:text-[#fb2e86]">
            Products
          </a>
          <a href="#" className="mr-5 w-[41] h-[20] hover:text-[#fb2e86]">
            Blog
          </a>
          <a href="#" className="mr-5 w-[41] h-[20] hover:text-[#fb2e86]">
            Shop
          </a>
          <a href="#" className="mr-5 w-[41] h-[20] hover:text-[#fb2e86]">
            Contact
          </a>
          </nav>


        <div className='w-[317px] h-[40px] flex border-2   items-center justify-end'> <input className='h-full w-full' type="text" />
        <div className='w-[51px] h-[40px] bg-[#fb2e86] flex items-center justify-center '>
      <a href='#'>
      <img src="/Vector (1).png" alt="search logo" className="w-[20px] h-[20px] justify-end"/></a>
 
        </div>
        </div>



      </div>
    
  );
};

export default Navbar;
