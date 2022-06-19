import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Shared from './Shared'

const Routing = () => {
  return (
      <Routes>
        
       <Route path='/' element={<Shared/>} >
       <Route index element={<Home/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/login' element={<Login/>}/>
        </Route>
      </Routes>
  )
}

export default Routing
