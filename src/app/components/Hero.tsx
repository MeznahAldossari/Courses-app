"use client"

import React from 'react'
import Lottie from 'lottie-react';
import animationData from '../../../public/Animation1.json';


function Hero() {
  return (
    <div className='flex py-4 px-6 lg:px-[64px] items-center lg:py-10 '>
      <div className='grid grid-cols-2 w-full  max-sm:flex max-sm:flex-col '>
        <div className='py-6 text-third flex flex-col justify-center'>
            <h1 className='text-[2.6em]  max-sm:text-[1.5em] max-sm:leading-[3rem] leading-[4.5rem] font-bold w-[32vw] max-sm:w-[90%]'>تعلم مهارات جديدة
            كل يوم, اي وقت و اي مكان</h1>

            <p className='font-medium py-8 text-[1em]'>نزودك بأحدث نظام ومواد تعليمية عبر الإنترنت تساعدك في التعلم و زيادة معرفتك.</p>
           <div className='flex gap-2 max-sm:gap-4'>
           <button className='text-white py-2 lg:w-[8rem] font-medium bg-[#7E30E1] hover:bg-white hover:border-primary hover:border-2 border-2 hover:text-primary px-4 rounded-md'>انشاء حساب</button>
           <button className='text-[#8385e1] font-medium lg:w-[8rem]'>تصفح الدورات </button>

           </div>
        </div>
        <div className="flex flex-col justify-center">
        <Lottie animationData={animationData} loop={true} />
       </div>

        </div>

     
    </div>
  )
}

export default Hero
