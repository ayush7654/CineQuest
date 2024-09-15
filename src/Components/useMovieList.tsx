import { Link } from "react-router-dom"
interface Movies{
    poster_path:string
    title:string
    id:number
    overview:string 
    release_date:string 

}
type MovieType= Partial<Movies>

export default function useMovieList(list:MovieType[],previousPage:string,forPage:string) {
  return (<>{forPage!=="SearchResults"?
    <div className="flex justify-center">
    <div className="grid grid-cols-4 gap-4">
       {list.map((movie, index) => (
         <div
           className="p-2 rounded-xl"
           key={index}
         ><Link to={`../film/${movie.title}`} state={{id:movie.id ,previousPage:previousPage}}>
            <img
             className="rounded-xl border border-gray-600 hover:shadow-md hover:shadow-green-500"
             src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            
           />
         </Link>
        
         </div>
       ))}
     </div>
   </div>:<div>
           <div className="borde border-white   w-full flex flex-col">
        {list.map((movie,index)=>(
          <div  key={index} className="flex flex-col border-b-2  py-2 my-2 border-gray-600 items-center  h-[200px] ">
            <div className="borde border-white">
            <div  className="borde border-white w-full flex flex-row gap-10 h-full">
            <div className="borde border-white w-[120px] rounded-sm  overflow-hidden hover:border-gray-600 hover:shadow-md hover:shadow-green-500 ">
              <Link to={`/film/${movie.title}`} state={{id:movie.id , previousPage:previousPage}}>
              <img  className="rounded-sm border object-cover border-gray-600 hover:shadow-md hover:shadow-green-500" src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}/>
              </Link>
              
            </div>
            <div className="bord w-[80%]">
              <div className="flex flex-row gap-5">
                <div className="text-2xl font-medium font-serif hover:text-blue-500"><Link to={`/film/${movie.title}`} state={{id:movie.id,previousPage:previousPage}}>{movie.title}</Link></div>
                <div className="flex justify-center items-center text-gray-400">{movie.release_date?.split("-")[0]}</div>
              </div>
              <div className="text-gray-400 line-clamp-5" >{movie.overview}</div>
            </div>
            </div>
            </div>
           
          {/*   <div className="text-gray-600 font-extrabold flex justify-center items-center h-[5%]">________________________________________________________________________________________________________________________________________</div> */}
            
          </div>
        ))}
           </div>
    
    </div>}</>

  


  )
}
