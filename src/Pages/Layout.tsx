import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';


export default function Layout() {

  return (
    <div className="relative bg-no-repeat ">
      
      <Header />
      <div className='mx-5 lg:mx-24'>    
        <Outlet />
        </div>
   
    </div>
  );
}
