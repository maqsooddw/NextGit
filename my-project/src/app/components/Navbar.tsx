import React from 'react';
import { Josefin_Sans } from 'next/font/google';
import { Lato } from 'next/font/google';
import Link from 'next/link';

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Navbar: React.FC = () => {
  return (
    <div
      className={`${josefinSans.className} container mx-auto p-5 flex flex-wrap items-center justify-between`}
    >
      {/* Navbar Content */}
      <div
        className={`w-full lg:w-[1177px] h-auto mx-auto flex flex-wrap items-center`}
      >
        {/* Logo */}
        <a
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          href="#"
        >
          <span className="text-[34px] font-bold hidden sm:block">Hekto</span>
        </a>

        {/* Navigation Links */}
        <div
          className={`${lato.className} text-[#0d0e43] flex flex-wrap items-center justify-center lg:ml-auto`}
        >
          <ul className="flex flex-wrap">
            <li>
              <a
                href="/"
                className="mr-5 hover:text-[#fb2e86] text-sm sm:text-base"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/Pages"
                className="mr-5 hover:text-[#fb2e86] text-sm sm:text-base"
              >
                Pages
              </a>
            </li>
            <li>
              <a
                href="/Product"
                className="mr-5 hover:text-[#fb2e86] text-sm sm:text-base"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="/Blog"
                className="mr-5 hover:text-[#fb2e86] text-sm sm:text-base"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/Shop"
                className="mr-5 hover:text-[#fb2e86] text-sm sm:text-base"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="/Contact"
                className="mr-5 hover:text-[#fb2e86] text-sm sm:text-base"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Search Bar */}
        <div className="w-full lg:w-auto flex mt-4 lg:mt-0">
          <input
            className="flex-grow border-2 p-2 rounded-l-md"
            type="text"
            placeholder="Search..."
          />
          <div className="bg-[#fb2e86] p-2 rounded-r-md flex items-center">
            <a href="#">
              <img
                src="/Vector (1).png"
                alt="search logo"
                className="w-5 h-5"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
