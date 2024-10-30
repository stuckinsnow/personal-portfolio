import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import HomePage from './Pages/HomePage/HomePage';
import SnippetsPage from './Pages/SnippetsPage/SnippetsPage';
import WobbleButton from './Pages/SnippetsPage/WobbleButton/WobbleButton';

function App() {

  useEffect(() => {
    // Create a script element

    const script = document.createElement('script');

    // Set the attributes for the script
    script.src = "https://umami-gwk8480w48gk8kk4sg8goc80.132.145.22.17.sslip.io/script.js";
    script.setAttribute('data-website-id', '301beff5-254b-4479-b63b-3acee19bb949');
    script.defer = true; // Ensure it loads after the HTML is parsed

    // Append the script to the body
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures this runs only once when the component mounts


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
