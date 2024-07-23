import React from 'react';
import {Link, BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './components/page/homepage/home';

export default function App() {
  return (
    <>
    <div className="App w-full mt-10 min-w-full max-w-full">
      <Navbar />
      <div className="w-[100vw] font-gothic">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </div>
    </div>
    </>
  )
}
