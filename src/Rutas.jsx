import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './components/Login'

const Rutas = () => {
  return (
    <Routes>
    <Route path="/login" element={<Login />}/>
   {/*<Route path="/register" element={<SignUp />}/> */}
  {/* <Route element={<ProtectedRoutes />}> */}
  <Route path="/" element={<Home />}/>
  {/* <Route path="/create" element={<Create />}/>
  <Route path="/edit/:id" element={<Update />}/> */}
  {/* </Route> */}

{/* <Route path="/edit/:id" element={<Create />}/> */}
  </Routes>
  )
}

export default Rutas