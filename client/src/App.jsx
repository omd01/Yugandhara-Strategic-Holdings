import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cards from './pages/Cards';
import CompanyProfile from './pages/CompanyProfile';

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Cards />} />
          <Route path="/company/:slug" element={<CompanyProfile />} />
        </Routes>
    </Router>
  )
}

export default App
