import React from 'react'
import { useEffect, useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import Success from './pages/Success';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>
    </Router>
  )
}

export default App
