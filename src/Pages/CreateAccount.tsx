

export default function CreateAccount() {
  return (
    <div className=" h-screen flex justify-center items-center">
      <div className="  w-full flex flex-col gap-4 p-6  bg-gray-600 rounded-lg sm:w-2/3 md:w-1/3"   >
      <div className="flex flex-row justify-between">  
        <div>JOIN CineQuest</div>
        <div>X</div>
      </div>

      <div>
        <div>Email Address</div>
        <input className="border-2 w-full p-1"/>
      </div>
      <div>
        <div>Username</div>
        <input className="border-2 w-full  p-1"/>
     </div>
     <div>
        <div>Password</div>
        <input className="border-2 w-full  p-1"/></div>
        
      <div className="flex flex-row"> 
        <input className='mt-1' type='checkbox'/>
        <div className="pl-3 text-sm" >Im atleast 16 years old</div>
      </div>
      <div  className="flex flex-row items-start text-sm ">
      <input className='mt-1'  type='checkbox'/>
      <div className="pl-3"> I accept the Privacy policy and consent to the processing of my personal information in accordance with it.
      </div>
      </div>
       
     
      <div className="flex justify-center w-full">
         <button className="bg-green-600 text-white w-full p-2 font-medium rounded-lg ">SIGN UP</button>
      </div>
       
      </div>
        
    </div>
  )
}
