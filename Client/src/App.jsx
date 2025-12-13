import React from 'react'
import { Route,Routes } from 'react-router-dom'
import BuyCreadit from './Pages/BuyCreadit'
import Home from './Pages/Home'
import Result from './Pages/Result'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div className=' min-h-screen bg-slate-50'>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/result' element={<Result/>} />
        <Route path='/credit' element={<BuyCreadit/>}/>
    </Routes>
    <Footer />
    </div>
  )
}

export default App