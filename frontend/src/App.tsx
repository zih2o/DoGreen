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
  );
}

export default App;
