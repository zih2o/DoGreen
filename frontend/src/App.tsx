<<<<<<< HEAD
import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Admin from './components/Admin';
import Home from './components/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/admin" element={<Admin/>}/>
    </Routes>
=======
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyPage from './pages/MyPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
>>>>>>> fb06eac2bcf6192be1c2adc014a9806691bfff48
  );
}

export default App;
