import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HeroSection from './components/HeroSection'
import HomePage from './pages/HomePage'
import ExploreCoursesPage from './pages/ExploreCoursesPage'
import SingleCoursePage from './pages/SingleCoursePage'
import Login from './components/Login'
import Signup from './components/Signup'
import AdminPanel from './components/admin/AdminPanel'
import Demo from './components/Demo'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<ExploreCoursesPage />} />
        <Route path="/single" element={<SingleCoursePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </Router>
  )
}

export default App