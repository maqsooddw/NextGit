import React from "react";
import { Josefin_Sans } from "next/font/google";
import { Lato } from "next/font/google";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Footer: React.FC = () => {
  return (
    // footer container
    <footer className="text-gray-600 body-font lg:w-[1920px] h-[532px]">
      {/* footer 1st container */}
      <div className="lg:w-[1920px] lg:h-[479px] container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className={`${josefinSans.className} ml-3 text-xl`}>Hekto</span>
          </a>

          {/* Search Bar */}
          <div className="w-full lg:w-[100px] flex mt-4 lg:mt-0">
            <input
              className="flex-grow border-2 p-2 rounded-l-md"
              type="text"
              placeholder="Search..."
            />
            <div className="bg-[#fb2e86] text-white flex items-center">
              <a href="#">
         <h3>Singup</h3>
              </a>
            </div>
          </div>
          <p className={`${lato.className} mt-2 flex text-[16px] text-gray-500`}>
          Contact Info <br />17 Princess Road, London, Greater London NW1 8JR, UK</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  CATEGORIES
                </h2>
                <nav className="list-none mb-10">
                  {["Laptops & Computers", "Cameras & Photography", "Third Smart Phones & Tablets", "Video Games & Consoles", "Waterproof Headphones"].map((link, i) => (
                    <li key={i}>
                      <a className="text-gray-600 hover:text-gray-800">{link}</a>
                    </li>
                  ))}
                </nav>
              </div>
            ))}
        </div>
      </div>
      <div className="bg-gray-100">
        {/* footer 2nd container */}
        <div className="lg:w-[1920px] h-[53px] container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2020 Tailblocks —
            <a
              href="https://twitter.com"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @knyttneve
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            {[
              {
                path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
              },
              {
                path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
              },
              {
                path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01",
                rect: { width: 20, height: 20, x: 2, y: 2, rx: 5, ry: 5 },
              },
              {
                path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z",
                circle: { cx: 4, cy: 4, r: 2 },
              },
            ].map((icon, idx) => (
              <a key={idx} className="ml-3 text-gray-500">
                <svg
                  fill={icon.rect ? "none" : "currentColor"}
                  stroke={icon.rect ? "currentColor" : "none"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={icon.rect ? "2" : "0"}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  {icon.rect && <rect {...icon.rect} />}
                  <path d={icon.path}></path>
                  {icon.circle && <circle {...icon.circle}></circle>}
                </svg>
              </a>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
