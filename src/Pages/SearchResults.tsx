import {useState, useEffect} from 'react'
import { useLocation, useParams } from 'react-router-dom'
import useMovieList from '../Components/useMovieList'
interface FilmInfo{
    poster_path:string 
    title:string 
    release_date:string 
    overview:string
}
type filmInfoType= Partial<FilmInfo> 


export default function SearchResults() {

const[searchResults, setSearchResults] = useState<filmInfoType[]>([])
const location = useLocation()
console.log(location)
const params= useParams()


useEffect(()=>{
  const fetchResults=async()=>{
    try{
     const response= await fetch(`https://api.themoviedb.org/3/search/movie?query=${params.filmName}&api_key=1a8a9c280177fef15422b2b4caee2cbc`)
     const data = await response.json()
     setSearchResults(data.results)
    }
    catch(error){
        console.error(error)
    }
  }
  fetchResults()
},[params.filmName])

console.log(searchResults)
  return (
   <div className='borde border-white mx-36 mt-10'>
    <div className='flex flex-col gap-0'>
    <div className='text-sm text-gray-400'>SHOWING MATCHES FOR  "{params.filmName?.toUpperCase()}"</div>
    <div className='flex justify-center text-gray-600 font-extrabold'>_____________________________________________________________________________________________________________________________________</div>
    </div>
  

    <div className="mt-4 ">
                {searchResults.length!==0?useMovieList(searchResults,`../search/${location.state.previousPage}`,"SearchResults"):<div>Loading...</div>}
            </div>
   </div>
  )
}


 {/* <div className=" ">
                {searchResults.length!==0?useMovieList(searchResults,""):<div>Loading...</div>}
            </div> */}