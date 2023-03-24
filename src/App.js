
import './App.css';
import './styles/css/login.css';
import './styles/css/register.css'
import './styles/css/violations.css'
import './styles/css/accident.css';
import './styles/css/home.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,

  Route,

} from "react-router-dom";

import { Home } from './components/Home';
import { Vehicle } from './components/Vehicle';
import { Accidents } from './components/Accidents';



import { Contact } from './components/Contact';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Navbar } from './components/Navbar';
import { Violations } from './components/Violations';

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/vehicle" element={<Vehicle />} />
        <Route exact path="/violations" element={<Violations />} />
        <Route exact path="/accidents" element={<Accidents />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>

    </Router>


  );
}


export default App;
