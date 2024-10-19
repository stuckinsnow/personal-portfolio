import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import umami from '@umami/node';

import HomePage from './Pages/HomePage/HomePage';
import SnippetsPage from './Pages/SnippetsPage/SnippetsPage';
import WobbleButton from './Pages/SnippetsPage/WobbleButton/WobbleButton';

umami.init({
  websiteId: '0ecf9fe8-7745-4391-910f-c815185f208b',
  hostUrl: 'https://umami-wwows8g84w0g40gc0k88cgwg.184.73.178.248.sslip.io/'
});

umami.track({ url: 'https://app.polymuse.tech/embed?id=20241009152627' });

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