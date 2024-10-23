import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
interface Movies{
 
    poster_path:string 
    original_title:string
    id:number
    
  }
  type movieTypes = Partial<Movies>

interface PropType{
    limit:{
        start:number,
        end:number
    }
}

export default function CarosulComponent(props:PropType) {
    
const [movieList, setMovieList]= useState <movieTypes[]>([])


useEffect(()=>{
    const fetchMovies=async()=>{
      try{
        const response = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=1a8a9c280177fef15422b2b4caee2cbc")
        const data = await response.json()
        
        setMovieList(data.results)
        console.log(data.results)
      }
      catch(error){
        console.error(error)
      }
    }
    fetchMovies();
   },[]) 
   
  return (<div className="py-2 borde border-white">
    {movieList.length!==0?<div className="flex flex-col gap-4 w-[200px] lg:w-[852px] lg:flex lg:flex-row" >
        {movieList.slice(props.limit.start,props.limit.end).map((item,index)=><Link key={index} to={`../film/${item.original_title}`} state={{id:item.id ,previousPage:'../films'}}><img  className="w-[200px] h-auto flex-shrink-0 rounded-lg border hover:border-2 hover:border-green-600 hover:-translate-y-2  hover:shadow-lg hover:shadow-green-600 border-gray-600" key={index} src= {`https://image.tmdb.org/t/p/w200/${item.poster_path}`}/></Link>)}

        </div>:<div className="flex flex-row gap-2" >
          {[...Array(4)].map((_,index)=><div key={index} className="w-[200px] bg-gray-700"></div>)}</div>}
        </div>
  
    
  )
}
