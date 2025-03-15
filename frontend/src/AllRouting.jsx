import React from 'react'
import {Route,Routes} from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Products from './components/Products';

const AllRouting = () => {
  return (
    <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path = '/signup' element={<Signup/>}/> 
    </Routes>
  )
}

export default AllRouting