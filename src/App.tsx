import {Routes,Route} from 'react-router-dom'
import About from './Pages/About'
import Layout from './Pages/Layout'
import SignIn from './Pages/SignIn'
import CreateAccount from './Pages/CreateAccount'
import Films from './Pages/Films'

import Home from './Pages/Home'
import FilmCategory from './Pages/FilmCategory'
import FilmDetails from './Pages/FilmDetails'
import SearchResults from './Pages/SearchResults'

function App() {


  return (
  <Routes>
    
  <Route element={<Layout/>}> 
  <Route path='/' element={<Home/>}/> 
  <Route path='/about' element={<About/>}/> 
  <Route path='/signin' element={<SignIn/>}/> 
  <Route path='/createAccount' element={<CreateAccount/>}/> 
  <Route path='/films' element={<Films/>}/>
  <Route path='/films/:category' element={<FilmCategory/>}/> 
 
  <Route path='/film/:filmName' element={<FilmDetails/>}/>
  <Route path='search/:filmName' element={<SearchResults/>}/>
  </Route>
  <Route path={'*'} element={<h1>Page not found! </h1>}/>
  </Routes> 

  )
  
   
}

export default App
