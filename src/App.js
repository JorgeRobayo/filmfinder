import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Main from './pages/Main'
import Movies from './pages/Movies'
import MoviesInfo from './pages/MoviesInfo'
import Nav from './components/Nav'

function App() {
  return (
    <div className='App'> 
    <Nav/>

    <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/movies' element={<Movies/>}></Route>
        <Route path='/movies-info/:imdbID' element={<MoviesInfo/>}></Route>
    </Routes>

    </div>
  )
}

export default App