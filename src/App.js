import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HeroSection from './components/HeroSection'
import HomePage from './pages/HomePage'
import ExploreCoursesPage from './pages/ExploreCoursesPage'
import SingleCoursePage from './pages/SingleCoursePage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<ExploreCoursesPage />} />
        <Route path="/single" element={<SingleCoursePage />} />
      </Routes>
    </Router>
  )
}

export default App