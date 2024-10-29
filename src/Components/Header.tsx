
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



import { useState } from 'react';
import Sidebar from './Sidebar';

export default function Header() {
  const path= useLocation()
  

  const [searchInput, setSearchInput]= useState<string>("")
  return (
    <div className=''>
      <div  className={` flex flex-row justify-around p-0 text-xs items-center text-white font-sans font-semibold lg: hover:bg-[#31323460] ${path.pathname==='/' || path.state!==null?"bg-[#2c282883]":"bg-[#4b5563a6] "} '}`} > {/* hover:bg-[#31323460] ${path.pathname==='/' || path.state!==null?"bg-[#2c282883]":"bg-[#4b5563a6] "} */}
      <Sidebar/>
      <div className='  flex flex-row rounded-lg items-center overflow-hidden'>
         <Link to={'/'} className=' rounded-lg w-10 lg:w-16'><img className='' src='/CineQuestLogo2.png'/></Link>
         <Link to={'/'} className=' rounded-lg '><div className='-ml-3 text-lg  font-extrabold rounded-lg p-2 lg:text-3xl'>CineQuest</div></Link>
         </div>
      <div className='hidden sm:flex flex-row gap-5 text-md lg:text-lg'>
        <Link to='/signin' className='' >SIGN IN</Link>
        <Link to='/createAccount' >CREATE ACCOUNT</Link>
        <Link to='/films'>FILMS</Link>
       
      </div>
      <div className='w-[20%] relative lg:w-[20%] flex items-center '>
      <input className='rounded-lg p-1 w-[100%]   text-gray-700 lg:p-2 ' placeholder='Search...' value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} />
      <Link to={searchInput && `/search/${searchInput}`} state={{previousPage:searchInput}}><FontAwesomeIcon  icon={faSearch} className="text-gray-500 -ml-5 text-sm  lg:text-lg " /></Link>
      </div>
       
        
       
    </div>

     
    </div>
    
  )
}
