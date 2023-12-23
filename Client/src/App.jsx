
import './App.css'

import { Route, Routes } from 'react-router-dom'

import AboutUs from './Pages/AboutUs.jsx'
import Contact from './Pages/Contact.jsx'
import CourseDescripition from './Pages/Course/CourseDescription.jsx'
import CourseList from './Pages/Course/CourseList.jsx'
import Denied from './Pages/Denied.jsx'
import HomePage from './Pages/HomePage.jsx'
import Login from './Pages/Login.jsx'
import NotFound from './Pages/NotFound.jsx'
import Signup from './Pages/Signup.jsx'

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/about' element={<AboutUs/>}></Route>
          <Route path='/courses' element={<CourseList/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/denied' element={<Denied/>}></Route>

          <Route path='/course/description' element={<CourseDescripition/>}></Route>

          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          
          <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </>
  )
}

export default App
