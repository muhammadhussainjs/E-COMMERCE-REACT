import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../../screens/Home/Home.jsx'
import About from '../../screens/About/About'
import Contact from '../../screens/Contact/Contact'
import Product from '../../screens/products/Product'
import Navbar from '../../components/Navbar'
import Singleproduct from '../../screens/Singleproduct.jsx'

const Routers = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='contact' element={<Contact />} />
    <Route path='product' element={<Product />} />
    <Route path='product/:id' element={<Singleproduct />} />

    </Routes>

    </BrowserRouter>
  )
}

export default Routers