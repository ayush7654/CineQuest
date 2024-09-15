
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


import { useState } from 'react';

export default function Header() {
  const path= useLocation()
  

  const [searchInput, setSearchInput]= useState<string>("")
  return (
    <div className=''>
      <div className={` flex flex-row justify-around p-0 text-lg items-center text-white font-sans font-semibold hover:bg-[#31323460] ${path.pathname==='/' || path.state!==null?"bg-[#2c282883]":"bg-[#4b5563a6] "} '}`}>
      <div className='  flex flex-row rounded-lg items-center overflow-hidden'>
         <Link to={'/'} className=' rounded-lg'><img className='' src='./public/Logo4-Photoroom.png' width='80px'/></Link>
         <Link to={'/'} className=' rounded-lg'><div className='text-2xl font-extrabold rounded-lg p-2 bg-gradient-to-r from-[#2726265e] via-[#2b2a2a48]  to-transparent '>CINEQuest</div></Link>
         </div>
      <div className='flex flex-row gap-7 '><Link to='/signin' className='' >SIGN IN</Link>
        <Link to='/createAccount' >CREATE ACCOUNT</Link>
        <Link to='/films' >FILMS</Link>
        <Link to='/members' >MEMBERS</Link>
      </div>
      <div>
      <input className='rounded-lg p-2 text-gray-700 ' placeholder='seachbox' value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} />
      <Link to={`/search/${searchInput}`} state={{previousPage:searchInput}}><FontAwesomeIcon  icon={faSearch} className="text-gray-500 absolute text-xl right-32 top-8" /></Link>
      </div>
       
        
       
    </div>
    </div>
    
  )
}
  //path.pathname==='/'||'/film/'
{/* <div className={`${path.pathname==='/'?"relative p-10":""}` }>
      <div className={`flex flex-row justify-around p-4 text-lg items-center text-white font-sans font-semibold ${path.pathname==='/'?'  p-7 absolute inset-0 bg-gradient-to-r from-[#443b3b42] via-transparent to-[#443b3b42] backdrop-blur-lg':' bg-[#516e7892]  p-6 '}`}>
      <div> <Link to={'/'} className=''>Logo and title</Link></div>
      <div className='flex flex-row gap-7'><Link to='/signin' >SIGN IN</Link>
        <Link to='/createAccount' >CREATE ACCOUNT</Link>
        <Link to='/films' >FILMS</Link>
        <Link to='/members' >MEMBERS</Link>
      </div>
      <div>
      <input  className='rounded-full p-2 text-gray-700' placeholder='seachbox'/>
      </div>
       
        
       
    </div>
    </div> */}