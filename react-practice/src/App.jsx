import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Error from './Pages/Error'
import About from './Pages/About'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/products/:id' element={<Products/>}/>
    </Routes>
    </BrowserRouter>
        
    </>
  )
}

export default App