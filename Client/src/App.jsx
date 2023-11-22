
import { Route, Routes } from 'react-router-dom'

import HomePage from './Pages/HomePage.jsx'

import './App.css'

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<HomePage/>}></Route>
      </Routes>
    </>
  )
}

export default App
