
import { useLocation } from "react-router-dom"
import {useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


interface FilmInfo{
    poster_path:string 
    title:string 
    release_date:string 
    tagline:string 
    runtime: number 
    overview:string
    vote_average:number
    id: number
}

interface MovieCast{
  name:string 
  character: string
  job:string
}



type movieCasttype = Partial<MovieCast>

type filmInfoType= Partial<FilmInfo> 


export default function FilmDetails() {

    const movie= useLocation()
    const [image,setImage]= useState<string|null>(null) // remove null if any bug is found here 
    const [filmInfo, setFilmInfo] = useState<filmInfoType>({})
    const [cast,setCast]= useState<movieCasttype[]>([])
    useEffect(()=>{
       const fetchDetails=async()=>{
            try{
              const resposne = await fetch(`https://api.themoviedb.org/3/movie/${movie.state.id}?api_key=1a8a9c280177fef15422b2b4caee2cbc`)
              const data:filmInfoType = await resposne.json() 
              setFilmInfo(data)
             
            }
            catch(error){
                console.error(error)
            }
        } 
            const fetchImages=async()=>{
                try{
                  const resposne = await fetch(`https://api.themoviedb.org/3/movie/${movie.state.id}/images?api_key=1a8a9c280177fef15422b2b4caee2cbc`)
                  const data = await resposne.json() 
                  console.log(data)
                  setImage(data.backdrops[0].file_path)
                }
                catch(error){
                    console.error(error)
                }
            }
            const fetchCast=async()=>{
              try{
             const resposne = await fetch(`https://api.themoviedb.org/3/movie/${movie.state.id}/credits?api_key=1a8a9c280177fef15422b2b4caee2cbc`)
             const data= await resposne.json()
             setCast(data.cast)
            
             
      
             
  
              }
              catch(error){
                  console.error(error)
              }
  
          }
            fetchImages()
            fetchDetails()
            fetchCast()  //Too heavey fetch request0,
      
    },[])

    

console.log( "this is film Details page",movie)
  
  return (
    <div className="h-[1200px] flex place-items-center ">
      <div className="text-3xl mb-96 "><Link  to={`../../${movie.state.previousPage}`} state={{previousPage:movie.state.previousPage}} ><FontAwesomeIcon icon={faArrowLeft}/></Link></div> 
      
         <div className="h-1/2 flex flex-col absolute inset-0 bg-no-repeat "
     style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/original/${image})`
        ? `linear-gradient(to right, rgba(24, 24, 24, 1) 0%, rgba(24, 24, 24, 1) 10%,rgba(24, 24, 24, 1) 15%,rgba(24, 24, 24, .7) 20%, rgba(24, 24, 24, 0) 30%,rgba(24, 24, 24, 0) 50%, rgba(24, 24, 24, 0) 70%,rgba(24, 24, 24, 1) 85%, rgba(24, 24, 24, 1) 90%, rgba(24, 24, 24, 1) 100%),
            linear-gradient(to bottom, rgba(24, 24, 24, 0) 70%,rgba(24, 24, 24, .7) 90%, rgba(24, 24, 24, 1)  100%),
            ${`url(https://image.tmdb.org/t/p/original/${image})`}`
        : undefined,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment:'',
      zIndex: -1,
    }}  > 
     
    </div>
   
    
   {filmInfo? 
   <div className="flex flex-row borde border-white mx-36 w-full h-[50%] ">
        <div className="flex justify-center border-0 border-white h-full w-1/3">
        <div className="border-0 border-white mt-28 w-[80%] h-[60%] overflow-hidde">
        <img className="border-2 border-gray-600  object-cover " src={`https://image.tmdb.org/t/p/w500/${filmInfo.poster_path}`}/>
        <div className="py-4 flex justify-center text-gray-400 font-medium"><span>RATING:<span className="text-2xl text-gray-200"> {filmInfo.vote_average?.toFixed(1)}</span>/10</span></div>
        </div>
        </div>
        <div className="flex justify-center items-center border-0  border-white h-full w-2/3">
            <div className="border-0 mt-40 border-white w-[90%] h-[90%]">
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-6" >{}
                 <div className="text-5xl font-medium font-seri">{filmInfo.title}</div>
                 <div className="text-2xl flex place-items-end">{filmInfo.release_date?.split('-')[0]}</div>
               </div>
         <div className=" ">{filmInfo.tagline?.toUpperCase()}</div>
         <div className="text-lg  text-gray-400 ">{filmInfo.overview}</div>
         <div>
          <div>
            <div className="text-gray-400 font-semibold">CAST</div>
           
            <div>
            <div>{cast?<div className=''>
        {cast.slice(0,15).map((item,index)=><div key={index} className='border border-gray-500 inline-block p-1 mr-2 my-2 bg-gray-700 rounded-md'>{item.name}</div>)}
        </div>
        :
        <div>Loading</div>}
     
    </div>
            </div>
          </div>
         </div>
         
         
 
         </div>
            </div>
        </div>

    </div>:<div>Loading</div>}
    </div>
   
  )
}



  