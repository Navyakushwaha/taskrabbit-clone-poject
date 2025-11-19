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
import Form  from './pages/Form/Form';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='form' element={<Form/>}/>
          <Route path='/login' element={<Login/>}/>
           <Route path='/signup' element={<SignUp/>}/>
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  )
}

export default App
