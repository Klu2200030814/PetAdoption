import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Adopte from './components/Adopt';
import Adoption from './components/Adoption';
import Thank from './components/Thank';
import Details from './components/Details';
import Accessories from './components/Accessories';
import Help from './components/Help.js';
import Contactus from './components/Contactus.js';
import Main from './components/Main.js';
import Donate from './components/Donate.js'
function App() {
  return <React.Fragment>
    <header>
    </header>
    <main>
      <Routes>
        <Route path='/' element={<Main/>} exact/>
         <Route path="/login" element={<Signin/>} exact />
        <Route path="/signup" element={<Signup/>} exact/>
        <Route path="/signin" element={<Signin/>} exact/>
        <Route path="/home" element={<Home/>} exact/>
        <Route path="/adopt" element={<Adopte/>} exact/>
        <Route path="/adoption" element={<Adoption/>} exact/>
        <Route path="/thank" element={<Thank/>} exact/>
        <Route path="/details" element={<Details/>} exact/>
        <Route path="/accessories" element={<Accessories/>} exact/>
        <Route path="/help" element={<Help/>} exact/>
        <Route path="/contact" element={<Contactus/>} exact/>
        <Route path="/donate" element={<Donate/>} exact/>

      </Routes>
    </main>
  </React.Fragment>
}

export default App;
