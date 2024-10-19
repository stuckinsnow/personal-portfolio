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
    script.src = "https://umami-wwows8g84w0g40gc0k88cgwg.184.73.178.248.sslip.io/script.js";
    script.setAttribute('data-website-id', '0ecf9fe8-7745-4391-910f-c815185f208b');
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