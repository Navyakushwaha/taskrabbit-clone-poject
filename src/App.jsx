import { useState } from 'react'
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Form  from './pages/Form/Form';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import Block from './pages/Services/Block/Block';
import Taskers from './Tasker/Taskers/Taskers';
import Describe from './components/common/timelined/describe/Decribe';
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
           <Route path='/block' element={<Block/>}/>
           <Route path='/taskers' element={<Taskers/>}/>
           <Route path='/describe'  element={<Describe/>}/>
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  )
}

export default App
