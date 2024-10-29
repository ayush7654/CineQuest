
import { useState,useEffect } from 'react';
import useMovieList from '../Components/useMovieList';
import { useParams , useLocation} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

interface Movies{
    poster_path:string
}
type MovieType= Partial<Movies>
export default function FilmCategory() {
    const[movieList,setMovieList]= useState<MovieType[]>([])
    
    const {category}= useParams()
    console.log(category)
    useEffect(()=>{
        const fetchMovies=async()=>{
          try{
            const response = await fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=1a8a9c280177fef15422b2b4caee2cbc`)
            const data = await response.json()
            console.log(data.results)
            setMovieList(data.results)
          }
          catch(error){
            console.error(error)
          }
        }
        fetchMovies();
       },[]) 
       const location= useLocation()
       console.log(location)
  return (
    <div className=' flex justify-center mx-5'>
        <div className="flex flex-col justify-center w-full mt-10">
            <div className="flex flex-row gap-4">{/* first */}
              <div><Link to={'../films'}><FontAwesomeIcon icon={faArrowLeft}/></Link> </div>
             <div>FILMS</div>
            </div>
            <div className='mt-5 mb-10 border border-gray-400 '>{/* Third */}
      
      </div>
            <div className="flex justify-center  bg-[#516e7892]  p-2 ">{/* second */}
               {category && category.toUpperCase()}
            </div>
            <div className="mt-5 flex justify-center ">
                {movieList.length!==0?useMovieList(movieList,location.pathname,"FilmCategory"):<div>Loading...</div>}
            </div>
        </div>
    </div>
  )
}
