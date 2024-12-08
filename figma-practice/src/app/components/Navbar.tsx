import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'], // Specify subsets (e.g., 'latin', 'latin-ext')
  variable: '--font-inter', // Optional: Add a CSS variable
  display: 'swap', // Optional: Set font-display property
});



const Navbar = () => {
  return (

<div className='ml-[135px] mt-[88px] w-[1170px] h-[38px] bg-violet-500'>

<div className="w-[675px] h-[24px]">
<div className="w-[118px] h-[24px]">
<p className={`${inter.className} font-semibold`}>Exclusive</p>
</div>
{/* end Exclusive text Div */}
<div>
<ul>
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
