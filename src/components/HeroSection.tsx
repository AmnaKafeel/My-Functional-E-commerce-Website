import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
   <main className='w-full h-full md:h-[500px] flex flex-col md:flex-row justify-between items-start bg-[#f2f0f1]'>
    {/* leftside */}
    <div className='w-full md:w-[500px] mt-3 md:mt-10 md:ml-10 pl-3'>
        <h1 className='text-2xl md:text-5xl font-extrabold'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p className='text-sm md:mt-3'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
        <button className='bg-black py-2 px-8 text-sm text-white mt-4 rounded-[16px]'>Shop Now</button>
    </div>
    {/* rightside */}
    <div className='relative'>
        <Image src="/hero1.jpg" alt="Hero" className='w-[500px] mr-4 ' width={200} height={200}></Image>

        {/* star1 */}
        <Image src="/vector 2.png" alt="Star" className='w-[50px] md:w-[100px] absolute top-[100px] left-10 md:top-[300px] md:left-[-100px] ' width={200} height={200}></Image>
        <Image src="/vector1.png" alt="Star" className='w-[60px] md:w-[100px] absolute top-[10px] right-[50px] md:top-[50px] md:right-[30px] ' width={200} height={200}></Image>
    </div>
   </main>
  )
}

export default HeroSection
