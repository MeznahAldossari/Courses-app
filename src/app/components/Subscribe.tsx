import React from 'react'

function Subscribe() {
  return (
    <div className='flex mt-16 lg:mt-4 max-sm:px-6 flex-col max-sm:mt-16 gap-6 items-center justify-center lg:py-24'>
        <h1 className='text-[2rem] max-sm:text-[1.7rem] font-semibold'>
        اشترك في النشرة الإخبارية
        
        </h1>
        <p className='lg:px-[23rem] max-sm:text-[1rem] text-center'>تابع آخر الأخبار والدورات التعليمية والعروض الحصرية  عن طريق الاشتراك في النشرة الإخبارية الخاصة بنا.</p>
        <div className='flex gap-1 lg:mt-6 max-sm:gap-2'>
            <input className='lg:w-[18rem] max-sm:w-[14rem] border-gray-300  rounded-md bg-gray py-2 pr-2' placeholder="أدخل بريدك الألكتروني"></input>
            <button className='py-2 lg:w-[8vw] font-medium text-primary border-primary hover:bg-primary hover:border-2 border-2 hover:text-white px-4 rounded-md'> اشتراك</button>

        </div>
      
    </div>
  )
}

export default Subscribe
