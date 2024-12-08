import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'], // Specify subsets (e.g., 'latin', 'latin-ext')
  variable: '--font-inter', // Optional: Add a CSS variable
  display: 'swap', // Optional: Set font-display property
});

import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'], // Include subsets you need
  weight: ['100', '300', '400', '500', '600', '700', '800', '900'], // Select the weights you want
  variable: '--font-poppins', // Optional: Use a CSS variable
});



const Navbar = () => {
  return (

<div className='ml-[135px] mt-[88px] w-[1170px] h-[38px] bg-violet-500 flex'>

<div className="w-[675px] h-[24px] flex">
<div className="w-[118px] h-[24px] flex text-center p-[6px]">
<p className={`${inter.className} font-semibold flex`}>Exclusive</p>
</div>
{/* end Exclusive text Div */}
<div className='flex p-[6px]'>
<ul className={`${poppins.className} ml-36 flex items-end gap-[48px] text-center text-[16px] h-[24px] w-[66px] font-[400]`}>
    <li>Home</li>
    <li>Contact</li>
    <li>About</li>
    <li>Signup</li>
</ul>
</div>
{/* end navbar div */}
</div>
{/* ending div A */}

<div>

</div>
{/* ending search bar div */}

<div>

</div>
{/* ending like and cart icon div */}
</div>
// end 2nd div in figma


  )
}

export default Navbar
