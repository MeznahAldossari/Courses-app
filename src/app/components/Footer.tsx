import React from 'react'
import Image from 'next/image'
import logo from '../../../public/online.png'


function Footer() {
  return (
    <div className='mt-20 lg:mt-8 max-sm:h-[12rem] h-[12rem]  lg:h-[12rem] bg-primary '>
        <div className='flex h-full items-center justify-between  lg:justify-between  max-sm:justify-between lg:pt-10 pt-6 pb-2 flex-col'>
         <Image src ={logo} alt='logo'  className='w-[50px] lg:w-[3.5rem]   max-md:w-[40px]'/>
           <ul className='flex gap-3 mt-2 text-white justify-center items-center'>
            <li className='hover:text-black cursor-pointer border-l-2  pl-2 border-white'>الرئيسية</li>
            <li className='hover:text-black cursor-pointer  border-l-2  pl-2 border-white'>الدورات</li>
            <li className='hover:text-black cursor-pointer  border-l-2 pl-2 border-white'>حول</li>
            <li className='hover:text-black cursor-pointer '>تواصل</li>
           </ul>
           <p className='text-white text-[0.8em]'>تم إنشاؤه بواسطة مزنة الدوسري</p>
         
        </div>
      
    </div>
  )
}

export default Footer
