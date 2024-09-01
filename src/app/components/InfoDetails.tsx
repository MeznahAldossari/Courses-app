import React from 'react'
import Image from 'next/image'
import graduation from '../../../public/graduation-hat.png'
import team from '../../../public/team.png'
import videos from '../../../public/video-player.png'
import gril from '../../../public/girl.png'

function infobar() {
  return (
    <div className='lg:mt-20 max-sm:px-6 lg:px-[64px]  max-sm:mt-4 bg-gray px-6'>
        <div className='flex max-sm:gap-4 lg:h-16 justify-between items-center '>
            <div className='flex lg:gap-4 max-sm:gap-1 gap-3 items-center'>
                <Image src={graduation} alt='graduation' className=' w-12 h-12 lg:w-10 lg:h-9 max-sm:w-7 max-sm:h-7'></Image>
                <div className='flex flex-col max-sm:text-[0.8em]'>
                 <p>+300</p>
                 <p>مدرب</p>
                </div>
            </div>

            <div className='flex lg:gap-4 max-sm:gap-1 gap-3 items-center'>
                <Image src={gril} alt='graduation' className=' w-12 h-12 lg:w-10 lg:h-9  max-sm:w-7 max-sm:h-7'></Image>
                <div className='flex flex-col max-sm:text-[0.8em]'>
                 <p>+15.000</p>
                 <p>طالب</p>
                </div>
            </div>


            <div className='flex max-sm:gap-1 lg:gap-4 gap-3 items-center'>
                <Image src={videos} alt='graduation' className='w-12 h-12 lg:w-10 lg:h-9  max-sm:w-7 max-sm:h-7'></Image>
                <div className='flex flex-col max-sm:text-[0.8em]'>
                 <p>+5.000</p>
                 <p>فيديو</p>
                </div>
            </div>

            <div className='flex max-sm:gap-1 lg:gap-4 gap-3 items-center'>
                <Image src={team} alt='graduation' className='lg:w-10 lg:h-10  max-sm:w-7 max-sm:h-7 w-12 h-12'></Image>
                <div className='flex flex-col max-sm:text-[0.8em]'>
                 <p>+150.000</p>
                 <p>مستخدم</p>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default infobar
