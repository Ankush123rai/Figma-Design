import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Services from './pages/services/Services'
import AboutUs from './pages/aboutus/AboutUs'
import ExtraSale from './pages/extraSale/ExtraSale'
import FreeGuide from './pages/freeGuide/FreeGuide'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/extrasale" element={<ExtraSale/>} />
        <Route path="/freeguide" element={<FreeGuide/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App