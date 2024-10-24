import { Link } from "react-router-dom"

export default function SignIn() {
  return (
    <div className=" h-screen flex justify-center items-center">
      <div className=" flex flex-col gap-3 w-full p-4 bg-gray-600 rounded-lg sm:w-2/3 md:w-1/3">
        <div>
          <div>Username</div>
          <input type ='text' className="border-2 w-full p-1"/>
        </div>
        <div>
        <div className="flex flex-row justify-between">
          <div>Password</div>
          <div className="flex flex-row gap-1"> 
            <input type='checkbox'/>
            <div>Remember me?</div>
            </div>
         
        </div>
        <input type ='text' className="border-2 w-full p-1"/>
        </div> 
        <div className="flex justify-center mt-5"><button className="bg-green-600 text-white w-full p-2 rounded-lg font-medium">Sign In</button></div>
        <div className="flex flex-row gap-2 justify-center">
        <div className="text-xs">Don't have an account?</div>
        <div className="text-xs text-blue-600"><Link to={'../createAccount'}>Create one now!</Link></div>
        </div>
       
     
      </div>
        
    </div>
  )
}
