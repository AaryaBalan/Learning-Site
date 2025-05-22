import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HeroSection from './components/HeroSection'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
    </Router>
  )
}

export default App