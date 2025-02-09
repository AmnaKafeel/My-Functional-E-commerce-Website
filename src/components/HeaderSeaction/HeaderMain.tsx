import React from 'react'
import Link from 'next/link'
import { FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { NavigationMenuDemo } from '@/components/NavMenu';
import { SheetSide } from '@/components/ui/Sheets';


const HeaderMain = () => {
  return (
    <header className='flex justify-between items-center w-full h-[60px]'>
      {/* leftside */}
      <div className='flex justify-center items-center'>
      <SheetSide  />

        <h1 className='text-xl sm:trsct-3xl font-bold pl-2'>SHOP.CO</h1>
      </div>

      {/* navbar */}
      <ul className='hidden md:block'>
        <li className='space-x-5 flex items-center'>
          <Link href='#'>
          <NavigationMenuDemo/>
          </Link>
          <Link href='/products'>Products</Link>
          <Link href='/wishlist'>Wishlist</Link>
          <Link href='/checkout'>Checkout</Link>
          
        </li>
      </ul>

      {/* searchbar */}

      
      <div className='flex items-center mr-8  space-x-4'>
        {/* searchicon for mobile screen */}
        {/* <FaSearch className='text-xl ml-2 md:hidden'/> */}

         {/* Cart icon */}
         <Link href={"/cart"}>
         <FiShoppingCart className='text-2xl' />
         </Link>

         {/* profile icon */}
         <Link href={"/profile"}>
         <CgProfile className='text-2xl' />
         </Link>

         <Link href={"/login"}>
         <h3 className='border-2 p-1 bg-[#2222229d] rounded-md text-white'>
          Login
          </h3>
         </Link>
      </div>
    </header>
  )
}

export default HeaderMain
