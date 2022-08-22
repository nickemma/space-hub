import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Mission from './Components/Mission';
import MyProfile from './Components/MyProfile';
import Rockets from './Components/Rockets';
import NavBar from './Components/Nav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Mission" element={<Mission />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
