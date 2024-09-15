import { useState, useEffect } from "react"
import { useLocation, Link } from "react-router-dom"
interface InfoType{
  poster_path:string
  title: string 
  id: number
}
type propType= Partial<InfoType>

export default function Home() {

  const path= useLocation()
  console.log(path)
  
 const [homepageMovies,setHomepageMovies ]= useState<propType[]>([])

 const backgroundImage = path.pathname === '/'
    ? `url('../public/HomeBGImg10.jpg')`
    : undefined;


 //Fetching data about upcoming movies to display them on homepage.
 useEffect(()=>{
  const fetchData=async()=>{
    try{   
      const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=1a8a9c280177fef15422b2b4caee2cbc")
      const data = await response.json()
      console.log(data)
      setHomepageMovies(data.results)
  }
  catch(error){
    console.error(error)
  }
  }
  fetchData();
 },[])
 
 //
 const movieComponent= homepageMovies.length!==0?
                    <div className="flex flex-row gap-3">{[...Array(5)].map((_,index)=><div key={index}><Link to={`/film/${homepageMovies[index].title}`} state={{id:`${homepageMovies[index].id}`}}><img className="border border-gray-600 rounded-lg" src={`https://image.tmdb.org/t/p/w200/${homepageMovies[index].poster_path}`}/></Link></div>)}</div>
                    :<div>Loading...</div>

 
  return (
    <div className="h-[1000px]">
        <div className=" h-3/4 flex flex-col justify-center items-center absolute inset-0 bg-no-repeat "
    style={{
      backgroundImage: backgroundImage 
        ? `linear-gradient(to right, rgba(24, 24, 24, 1) 0%, rgba(24, 24, 24, 0.9) 10%, rgba(24, 24, 24, 0) 30%, rgba(24, 24, 24, 0) 70%, rgba(24, 24, 24, 0.9) 90%, rgba(24, 24, 24, 1) 100%),
            linear-gradient(to bottom, rgba(24, 24, 24, 0) 70%, rgba(24, 24, 24, 0.5) 85%, #181818 100%),
            ${backgroundImage}`
        : undefined,
      backgroundSize: 'contain',
      backgroundPosition: ' center -20px ',
      backgroundRepeat: 'no-repeat',
      //backgroundAttachment:"fixed",
      zIndex: -1, // Make sure it stays behind the content
    }} ></div>
      <div className="h-96 mt-5 " >
      
      </div>
      
      <div className="flex flex-col  items-center">
      <div className="flex flex-col p-6 gap-1 items-center text-white font-bold font-serif ">
        <div className="text-3xl text-extrabold ">Track films you’ve watched.</div>
        <div className="text-3xl text-extrabold "> Save those you want to see.</div>
        <div className="text-3xl text-extrabold ">Tell your friends what’s good. </div>
      </div>
        <Link to={'./signin'}><button className="bg-green-600 w-80 text-white font-semibold rounded-lg p-2">Get Started</button></Link>
        <p className="p-4 text-gray-500 text-sm"> The social network for film lovers. </p>
        <div className="m-5 ">
           {movieComponent}
        </div>
      </div>
      
    
    </div>
   
  )
}






/* 
import { useState, useEffect } from "react"
import { useLocation, Link } from "react-router-dom"
interface InfoType{
  poster_path:string
  title: string 
  id: number
}
type propType= Partial<InfoType>

export default function Home() {

  const path= useLocation()
  console.log(path)
  
 const [homepageMovies,setHomepageMovies ]= useState<propType[]>([])

 const backgroundImage = path.pathname === '/'
    ? `url('../public/HomeBGImg10.jpg')`
    : undefined;


 //Fetching data about upcoming movies to display them on homepage.
 useEffect(()=>{
  const fetchData=async()=>{
    try{   
      const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=1a8a9c280177fef15422b2b4caee2cbc")
      const data = await response.json()
      console.log(data)
      setHomepageMovies(data.results)
  }
  catch(error){
    console.error(error)
  }
  }
  fetchData();
 },[])
 
 //
 const movieComponent= homepageMovies.length!==0?
                    <div className="flex flex-row gap-3">{[...Array(5)].map((_,index)=><div key={index}><Link to={`/film/${homepageMovies[index].title}`} state={{id:`${homepageMovies[index].id}`}}><img className="border border-gray-600 rounded-lg" src={`https://image.tmdb.org/t/p/w200/${homepageMovies[index].poster_path}`}/></Link></div>)}</div>
                    :<div>Loading...</div>

 
  return (
    <div className=" h-max flex flex-col justify-center items-center absolute inset-0 bg-no-repeat "
    style={{
      backgroundImage: backgroundImage 
        ? `linear-gradient(to right, rgba(24, 24, 24, 1) 0%, rgba(24, 24, 24, 0.9) 10%, rgba(24, 24, 24, 0) 30%, rgba(24, 24, 24, 0) 70%, rgba(24, 24, 24, 0.9) 90%, rgba(24, 24, 24, 1) 100%),
            linear-gradient(to bottom, rgba(24, 24, 24, 0) 70%, rgba(24, 24, 24, 0.5) 85%, #181818 100%),
            ${backgroundImage}`
        : undefined,
      backgroundSize: 'contain',
      backgroundPosition: ' center -20px ',
      backgroundRepeat: 'no-repeat',
      //backgroundAttachment:"fixed",
      zIndex: -1, // Make sure it stays behind the content
    }} >
      <div className="h-96 mt-10 " >
      
      </div>
      
      <div className="flex flex-col  items-center">
      <div className="flex flex-col p-6 gap-1 items-center text-white font-bold font-serif ">
        <div className="text-3xl text-extrabold ">Track films you’ve watched.</div>
        <div className="text-3xl text-extrabold "> Save those you want to see.</div>
        <div className="text-3xl text-extrabold ">Tell your friends what’s good. </div>
      </div>
        <button className="bg-green-600 w-80 text-white font-semibold rounded-lg p-2">Get Started</button>
        <p className="p-4 text-gray-500 text-sm"> The social network for film lovers. </p>
        <div className="m-5 ">
           {movieComponent}
        </div>
      </div>
      
    </div>
  )
}
 */