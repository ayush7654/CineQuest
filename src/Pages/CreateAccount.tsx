

export default function CreateAccount() {
  return (
    <div className=" h-screen flex justify-center items-center">
      <div className=" h-2/3 w-1/3 flex flex-col gap-4 p-6  bg-gray-600 rounded-lg" >
      <div className="flex flex-row gap-10">  
        <div>JOIN (SITE NAME)</div>
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
        <input type='checkbox'/>
        <div className="pl-3" >Im atleast 16 years old</div>
      </div>
      <div  className="flex flex-row ">
      <input type='checkbox'/>
      <div className="pl-3"> I accept the Privacy policy and consent to the processing of my personal information in accordance with it.
      </div>
      </div>
       
     
      <div className="flex justify-center">
         <button className="bg-green-600 text-white w-1/2 p-2 font-medium rounded-lg ">SIGN UP</button>
      </div>
       
      </div>
        
    </div>
  )
}
