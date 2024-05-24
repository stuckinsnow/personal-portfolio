import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './Pages/HomePage/HomePage';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;