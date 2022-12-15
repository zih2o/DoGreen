import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyPage from './pages/MyPage';
import MySubscribe from './components/MySubscribe';
import MyChallenge from './components/MyChallenge';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MyPage />} />
          <Route path="/subscribe" element={<MySubscribe />} />
          <Route path="/challenge" element={<MyChallenge />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
