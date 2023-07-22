// import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Header from './Components/Header/Header';

function App(): JSX.Element {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
