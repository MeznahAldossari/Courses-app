import React from 'react'
import Image from 'next/image'
import logo from '../../../public/online.png'
import burger from '../../../public/burger.png'
import Link from 'next/link'

function Nav() {
  return (
    <div className=''>
      <nav className='max-sm:menu  flex justify-between lg:px-[60px] items-center h-12  shadow-md py-10 px-4'>
        <div>
       <Image src ={logo} alt='logo'  className='w-[50px] md:w-[40px]'/>
        </div>
        <div className='md:hidden'>
       <Image src ={burger} alt='burger' width={50} className='hidden max-sm:block'/>
        </div>
    
      

        <div className='max-sm:hidden  flex gap-10 max-md:gap-4'>
          <p className='cursor-pointer hover:text-primary'>الرئيسية</p>
          <p className='cursor-pointer hover:text-primary'>الدورات</p>
          <p className='cursor-pointer hover:text-primary'>حول</p>
          <p className='cursor-pointer hover:text-primary'>التواصل</p>
        </div>

        <div className='max-sm:hidden flex gap-2 box-border'>
         <button className='border-[1.9px] border-primary hover:text-white hover:bg-primary px-4 py-1 rounded-md'>دخول</button>
         <button className='text-white bg-[#7E30E1] hover:bg-white hover:text-primary hover:border-[1.9px] hover:border-primary px-4 py-1 rounded-md border-[1.9px] border-transparent'>تسجيل</button>        </div>
       
      </nav>
    </div>
  )
}

export default Nav
