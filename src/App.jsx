import React from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Hotel } from './components/pages/Hotel'
import { Packages } from './components/pages/Packages'
import { Flight } from './components/pages/Flight'
import { Register } from './components/pages/Register'
import { Login } from './components/pages/Login'
import { Home } from './components/pages/Home'
import { ErrorPage } from './components/pages/ErrorPage'

function App() {

  return (
    <div className="App">
      <h2><Navbar/></h2>
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Flight' element={<Flight/>}></Route>
        <Route path='/Hotel' element={<Hotel/>}></Route>
        <Route path='/Packages' element={<Packages/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/*' element={<ErrorPage/>}></Route>
        
        <Route path="/" exact component={Home} />
        <Route path="/error" component={ErrorPage} />
    
      </Routes>
    </div>
  )
}

export default App
