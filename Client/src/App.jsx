
import { Route, Routes } from 'react-router-dom'

import AboutUs from './Pages/AboutUs.jsx'
import HomePage from './Pages/HomePage.jsx'
import NotFound from './Pages/NotFound.jsx'
import Singup from './Pages/Singup.jsx'

import './App.css'

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/about' element={<AboutUs/>}></Route>

          <Route path='/singup' element={<Singup/>}></Route>

          <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </>
  )
}

export default App
