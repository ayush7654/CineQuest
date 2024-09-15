

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
    <div className='mx-36 '>
    <div className='flex flex-col w-full'>
      <div className='flex flex-row justify-between mt-10 p-2' > {/* first line div */}
        <div className='flex flex-row gap-2' >
            <div className='flex items-center font-medium'>Browse by</div>
            <div className='flex flex-row gap-10 p-2 px-8 borde border-gray-500 bg-gradient-to-r from-[#4b556360] via-[#4b5563a6] to-[#4b556360] backdrop-blur-lg'>
             <div className=''><Link to='/films/popular'>Popular</Link></div>
             <div><Link to='/films/now_playing'>Now Playing</Link></div>
             <div><Link to='/films/top_rated'>Top Rated</Link></div>
             <div><Link to='/films/upcoming'>Upcoming</Link></div>
            </div>
        </div>
        <div className='flex flex-row gap-4'>
            <div className='flex items-center font-medium'>Find a film</div>
            <input className='text-gray-700 p-1 font-medium rounded-lg ' placeholder='search'/>
        </div>
      </div>
      <div className='flex flex-row justify-between mt-10 text-gray-400'  >{/* Second */}
       <div>POPULAR FILSM THIS WEEK</div>
       <p>MORE</p>
      </div>
      <div className='mb-10  text-gray-400'>{/* Third */}
        _________________________________________________________________________________________________________________________________________________
      </div>
      <div className='flex flex-row justify-center w-full gap-6'> {/* Forth */}
      <button className=''   id='left-arrow' onClick={handleClick} ><FontAwesomeIcon icon={faArrowLeft} className='size-7
      ' /></button>
      <div className='overflow-hidden w-[852px]   '>
       <div className=' flex flex-row  transition-transform ease-in-out duration-500 ' style={{transform:`translateX(-${currentMovies*100}%)`}} >
       <CarosulComponent limit={{start:0,end:4}} /> 
       <CarosulComponent limit={{start:4,end:8}} /> 
       <CarosulComponent limit={{start:8,end:12}} /> 
       <CarosulComponent limit={{start:12,end:16}} /> 
       <CarosulComponent limit={{start:16,end:20}} />   
       </div>
       </div>
      
      <button className='' id='right-arrow' onClick={handleClick}><FontAwesomeIcon icon={faArrowRight} className='size-7' /></button>
      </div>
     
    </div>
    </div>
  )
}
