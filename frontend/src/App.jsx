import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Products from './components/Products'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Login/>
      <Signup/>
      <Products/>
    </>
  )
}

export default App
