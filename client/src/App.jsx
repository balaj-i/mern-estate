import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signout from './pages/Signout.jsx'
import Home from './pages/Home.jsx'
import Signin from './pages/Signin.jsx'
import About from './pages/About.jsx'
import Profile from './pages/Profile'
import Header from './components/Header.jsx'

function App() {
  return (<BrowserRouter>
  <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/signup' element={<Signout />} />
      <Route path='/about' element={<About />} />
      <Route path='/profile' element={<Profile />} />
    </Routes></BrowserRouter>)
}

export default App
