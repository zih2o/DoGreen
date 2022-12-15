import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyPage from './pages/MyPage';
import Home from './components/Home';
import Admin from './components/Admin';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
