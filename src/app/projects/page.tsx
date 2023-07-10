import React from 'react'
import Button from '../Components/Button'
import { FaAngular, FaJava, FaNodeJs, FaPython, FaReact, FaVuejs } from 'react-icons/fa'

const page = () => {
  return (
    <div className='w-full grid place-items-center'>
        <div className='px-4 py-8 grid place-items-center gap-4'>
          <div className='text-center font-semibold'>  <h2 className='text-[38px] leading-[120%] '>Projects that are deveopled</h2>
            <h2 className='text-[38px] leading-[120%]  text-gray-700'>Scale the business</h2></div>
            <p className='tablet:w-[400px] text-center'>Lorem ipsum dolor sit amet, consectetur 
            adipisicing elit. Hic, omnis. Quia at vero repudiandae numquam recusandae 
            quos officiis vel placeat?</p>
            <div className='flex gap-4'>
                <Button label='Start your journey' size={'sm'} variant={'default'} className={""}/>
                <Button label='Start your project' size={'sm'} variant={'ghost'} className={""}/>
            </div>
        </div>
        <div className='grid place-items-center gap-4'>
            <p className='text-sm'>We create the business online with :</p>
            <div className='flex gap-4 text-3xl font-semibold'><FaNodeJs/> <FaReact/> <FaJava/> <FaPython/> <FaVuejs/><FaAngular/></div>
        </div>
        </div>
  )
}

export default page