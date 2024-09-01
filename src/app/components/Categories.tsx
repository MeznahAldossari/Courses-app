import React from 'react'
import left from '../../../public/left-chevron.png'
import Image from 'next/image';
import software from '../../../public/software.png'
import web from '../../../public/web-design.png'
import analysing from '../../../public/exploration.png'
function Categories() {
  const categoryInfo = [
    {
        name:"برمجة",
        images: software
    
    },
    {
        name:"تصميم",
        images:web
    
    },
    {
        name:"شبكات",
        images:analysing
    
    },
    {
        name:"تحليل البيانات",
        images:analysing
    
    },

]
  return (
    <div className='flex mt-6 flex-col lg:mt-14 lg:px-[64px] max-sm:px-6 px-6'>
        <div className='flex justify-between items-center max-sm:mt-14'>
            <p className='text-[1.3rem] max-sm:text-[1.2rem] text-primary font-semibold'>تصفح الأقسام</p>
            <h1 className='text-[1rem] max-sm:text-[0.9rem] text-black font-semibold flex items-center gap-3 hover:text-primary cursor-pointer'> جميع الأقسام <span className=''><Image src={left} alt='leftArrow' className='w-4 lg:w-4 lg:h-4 max-sm:w-3'></Image></span></h1>
    

        </div>
        <div className='grid mt-6 grid-cols-4 max-sm:gap-y-6 gap-4 lg:mt-10 max-sm:grid-cols-2 max-sm:mt-6'>
         {categoryInfo.map((category, index)=>(
            <div className='flex max-sm:h-[39vw] h-[20vw] flex-col gap-4 justify-center lg:h-[10vw] hover:shadow-none hover:border-2 border-gray border-[1.1px]  items-center shadow-xl rounded-lg '>
                <Image src={category.images} alt='image' className='lg:w-12 max-sm:w-[3.5rem] w-[3rem]'/>
                <p>{category.name}</p>

            </div>
         ))}


        </div>
      
    </div>
  )
}

export default Categories
