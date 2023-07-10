import React from 'react'
import Button from '../Components/Button'
import { FaAngular, FaChevronRight, FaJava, FaNodeJs, FaPython, FaReact, FaVuejs, FaDatabase, FaUserLock, FaSyncAlt, FaNetworkWired, FaFile, FaCode } from 'react-icons/fa'

const page = () => {
    

const projectArray = [
  {
    title: "Database",
    des: "Every project is a full Postgres database, the world's most trusted relational database.",
    icons: <FaDatabase />
  },
  {
    title: "Authentication",
    des: "Provides secure user authentication and authorization functionalities.",
    icons: <FaUserLock />
  },
  {
    title: "Functions",
    des: "Supports vector-based data structures and operations for advanced analytics.",
    icons: <FaCode />
  },
  {
    title: "Storage Functions",
    des: "Includes powerful storage functions for efficient data management and retrieval.",
    icons: <FaFile />
  },
  {
    title: "Real-time Capabilities",
    des: "Enables real-time updates and communication for instant data synchronization.",
    icons: <FaSyncAlt />
  },
  {
    title: "Vectors",
    des: "Supports vector-based data structures and operations for advanced analytics.",
    icons: <FaNetworkWired />
  }
];


  return (
    <div className='w-full grid place-items-center py-16 gap-8 overflow-hidden'>
        <div className='px-4 py-8 grid place-items-center gap-4 '>
          <div className='text-center font-semibold'>  <h2 className='text-[38px] leading-[120%] '>Projects that are deveopled</h2>
            <h2 className='text-[38px] leading-[120%]  text-gray-500'>Scale the business</h2></div>
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
        <div className='lg:w-fit grid place-items-center gap-4 p-4 '>
            <div className='font-semibold'>Build faster and focus on your business</div>
            <div className='w-full laptop:flex grid tablet:grid-cols-3 gap-4 overflow-hidden'>
               {projectArray.map((items)=> <div className='laptop:w-[200px] grid gap-4 p-4 bg-gray-100' key={items.title}>
                    <div className='flex items-center gap-2'><div className='p-2 rounded bg-black text-white hover:animate-pulse '>{items.icons}</div> {items.title}</div>
                    <div>{items.des}</div>
                    <span className='text-sm flex gap-2 items-center'>View <FaChevronRight/> </span>
                </div>)}
            </div>
        </div>
        <div  className='bg-gray-700 h-[1px] w-full skew-y-[-2deg] m-8 '></div>
        </div>
  )
}

export default page