

import {useState } from 'react';
import { Link } from 'react-router-dom';
import CarosulComponent from '../Components/CarosulComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router-dom';
export default function Films() {
 
  const path= useLocation()
  console.log(path)

const [currentMovies,setCurrentMovies]= useState<number>(0)



const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  const buttonId = event.currentTarget.id; // Use currentTarget to get the button ID
  if (buttonId === "left-arrow" && currentMovies > 0) {
    setCurrentMovies((prev) => prev - 1);
  } else if (buttonId === "right-arrow" && currentMovies < 4) {
    setCurrentMovies((prev) => prev + 1);
  }
};



  return (
    <div className='borde border-2-white overflow-x-hidden'>
    <div className='flex flex-col w-full'>
      <div className='flex flex-row w-full mt-5 sm:mt-10 ' > {/* first line div */}
        <div className='flex justify-center w-full' >
            <div className='w-full text-xs flex flex-row justify-around p-2 borde border-gray-500 bg-gradient-to-r from-[#4b556360] via-[#4b5563a6] to-[#4b556360] backdrop-blur-lg sm:text-base '>
             <div><Link to='/films/popular'>Popular</Link></div>
             <div><Link to='/films/now_playing'>Now Playing</Link></div>
             <div><Link to='/films/top_rated'>Top Rated</Link></div>
             <div><Link to='/films/upcoming'>Upcoming</Link></div>
            </div>
        </div> 
     
      </div>
      <div className='flex flex-row text-sm justify-between mt-10 text-gray-400 sm:text-base'  >{/* Second */}
       <div>POPULAR FILSM THIS WEEK</div>
       <Link to='/films/popular'>MORE</Link>
      </div>
      <div className='mt-5 mb-10 border border-gray-400 '>{/* Third */}
      
      </div>
     <div className='flex flex-row justify-center w-full gap-0 sm:gap-6 lg:mt-10'>
      <button className='hidden lg:flex lg:justify-center lg:h-[300px] items-center'   id='left-arrow' onClick={handleClick} ><FontAwesomeIcon icon={faArrowLeft} className='size-7
      ' /></button>
      <div className='overflow-hidden w-[852px]   '>
       <div className=' flex flex-row justify-center gap-4 lg:justify-start lg:gap-0  transition-transform ease-in-out duration-500 ' style={{transform:`translateX(-${currentMovies*100}%)`}} >
       <div className='flex'><CarosulComponent limit={{start:0,end:4}} /> </div>
      <div className='hidden md:flex'><CarosulComponent  limit={{start:4,end:8}} /> </div>
        <div className='hidden lg:flex'><CarosulComponent limit={{start:8,end:12}} /></div> 
       <div className='hidden lg:flex'><CarosulComponent limit={{start:12,end:16}} /></div>  
       <div className='hidden lg:flex'><CarosulComponent limit={{start:16,end:20}} /></div>  
       </div>
       </div>
      
      <button className='hidden lg:flex lg:h-[300px] items-center' id='right-arrow' onClick={handleClick}><FontAwesomeIcon icon={faArrowRight} className='size-7' /></button>
      </div> 
     
    </div>
    </div>
  )
}
