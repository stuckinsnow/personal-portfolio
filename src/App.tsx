// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './Components/Header/Header';
// import HomePage from './Pages/HomePage/HomePage';
import Calculator from './Pages/Calculator/Calculator';
// import Footer from './Components/Footer/Footer';
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<ProjectsPage />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;