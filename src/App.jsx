import { useState } from 'react'
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Header from './pages/Header/Header';
import Footer from './components/Footer/Footer';
import Logo from './pages/Logo/Logo';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />

        </Routes>

       
        <Footer />
      </Router>
    </>
  )
}

export default App
