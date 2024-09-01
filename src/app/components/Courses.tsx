import React from 'react'
import left from '../../../public/left-chevron.png'
import Image from 'next/image';
import star from '../../../public/star.png'
function courses() {
  const coursesDetails = [
    {
        "image": 'https://i.pinimg.com/564x/fc/49/7e/fc497ec8e6990c6a615eb61c05e670ec.jpg',
        "name": "web design",
        "title": "Learn UI/UX Design"
    },
    {
        "image": 'https://i.pinimg.com/564x/e6/ec/86/e6ec86d140147e8dc72514dbd2af546f.jpg',
        "name": "cybersecurity",
        "title": "Master CyberSecurity Advanced Level"
    },
    {
        "image": 'https://i.pinimg.com/564x/e8/62/0d/e8620d5364138fe60785cadcc95d7270.jpg',
        "name": "software enginering",
        "title": "Learn Software Enginering for all Level"
    },
    {
        "image": 'https://images.pexels.com/photos/270632/pexels-photo-270632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        "name": "web development",
        "title": "Learn Advance Web Development Level"
    }

  ]
  return (
    <div className='lg:px-[64px] mt-12 max-sm:mt-6 max-sm:px-6 px-6'>
        <div className='flex flex-col gap-4'>
            <div className='flex justify-between items-center'>
             <h1 className='lg:text-[1.3rem] max-sm:text-[1.2rem] text-primary font-semibold '>الدورات الشائعة</h1>
             <h1 className='lg:text-[1rem] max-sm:text-[0.9rem] text-black font-semibold flex items-center gap-3 hover:text-primary cursor-pointer'> جميع الدورات <span className=''><Image src={left} alt='leftArrow' className='lg:w-4 lg:h-4 max-sm:w-3 w-4'></Image></span></h1>

            </div>

            <div className='flex max-sm:flex-col mt-4 max-sm:mt-2 lg:gap-4 gap-2 max-sm:gap-2 lg:mt-6 justify-center'>
                {coursesDetails.map((course,index)=>(
                    <div className='lg:w-[21vw] w-[22vw] h-auto max-sm:mt-2  max-sm:w-full  lg:h-auto shadow-lg border-[1.5px]  border-gray  rounded-md'>
                        <div className='relative lg:h-[10rem]  max-sm:h-[10rem] h-[7rem]'>                        
                            <Image src={course.image} alt='course-image' layout='fill' className='object-fit w-full h-[40rem] absolute rounded-t-md'/>
                        </div>
                        <div className='flex h-[4vh] max-sm:py-2 px-2 py-1 justify-between items-center lg:mt-4 lg:px-2 max-sm:px-2'>
                            <div className='rounded-full text-center max-sm:px-1 text-[0.8em] w-auto h-auto bg-green lg:px-1 max-ms:px-1  text-white'>{course.name}</div>
                            <div className='flex  gap-1 justify-end flex-wrap items-center '>
                            <Image src={star} alt='course-image'  className='w-3 h-3'/>
                            <Image src={star} alt='course-image'  className='w-3 h-3'/>
                            <Image src={star} alt='course-image'  className='w-3 h-3'/>
                            <Image src={star} alt='course-image'  className='w-3 h-3'/>
                            <Image src={star} alt='course-image' className='w-3 h-3'/>
 
                            </div>

                        </div>
                        <div className='lg:mt-4 px-2 mt-2 max-sm:px-2 flex justify-between items-center flex-col'>
                            <div className='mb-4 h-[4vh] w-full lg:h-[3rem]'>                             
                              <p className='text-left  lg:px-2  font-medium'>{course.title}</p>
                            
                            </div>
                            <button className='text-primary mt-4 w-full max-sm:w-full py-2 lg:w-[95%] mb-2 font-medium border-primary hover:bg-primary hover:border-[1.6px] border-[1.6px] hover:text-white px-4 rounded-md'>
                                 انضمام
                            </button>
                        </div>
     

                        
                    </div>
                ))}

            </div>
        </div>
      
    </div>
  )
}

export default courses
