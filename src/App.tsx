import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './Pages/HomePage/HomePage';
import HomePage from './Pages/HomePage/HomePage';
import SnippetsPage from './Pages/SnippetsPage/SnippetsPage';
import WobbleButton from './Pages/SnippetsPage/WobbleButton/WobbleButton';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/snippets" element={<SnippetsPage />} />
        <Route path="/wobble-button" element={<WobbleButton />} />
      </Routes>
    </Router>
  );
}

export default App;