import React from 'react'
import Register from '../Register/Register'
import Loginpage from '../Loginpage/Loginpage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'

const Navigator = () => {
    
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Loginpage/>}></Route>
                <Route path='/signup' element={<Register/>}></Route>
                <Route path='/login' element={<Home/>}></Route>
                <Route path='/logout' element={<Loginpage/>}></Route>
                
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Navigator