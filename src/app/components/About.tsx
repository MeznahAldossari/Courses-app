"use client"
import React from 'react'
import Lottie from 'lottie-react';
import animationData2 from '../../../public/Animation2.json';

function about() {
  return (
    <div className='mt-12 flex px-6 lg:mt-12 lg:px-[64px] items-center max-sm:px-6 lg:py-2 overflow-hidden'>
    <div className='grid grid-cols-1 lg:grid-cols-2 lg:h-[30rem] w-full max-w-full'>
        <div className='flex justify-center items-center max-sm:mt-2'>
            <Lottie animationData={animationData2} loop={true} className='max-w-full max-h-full' />
        </div>
        <div className='flex flex-col justify-center p-4'>
            <h1 className='text-xl lg:text-2xl font-bold'>من نحن</h1>
            <p className='lg:mt-10 max-sm:mt-4 max-sm:text-justify text-sm lg:text-base'>
                توفر منصتنا دورات تعليمية عالية الجودة عبر الإنترنت يتم تدريسها من قِبَل مدربين ذوي خبرة في مجالاتهم
            </p>
            <p className='lg:mt-6 max-sm:mt-4 max-sm:text-justify text-sm lg:text-base'>
                مهمتنا هي تمكين الطلاب من المعرفة والمهارات التي يحتاجونها للنجاح في العالم الرقمي الحالي. انضم إلى منصة نابو اليوم لتحسين مهاراتك وتحقيق أهدافك في مجال التكنولوجيا
            </p>
        </div>
    </div>
</div>

  )
}

export default about
