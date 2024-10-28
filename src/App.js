import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import other components
const HomePage = lazy(() => import('./HomePage'));
const AboutPage = lazy(() => import('./AboutPage'));
const DataViewerPage = lazy(() => import('./DataViewerPage'));
const ServicesPage = lazy(() => import('./ServicesPage')); // Make sure this is imported

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/viewer">Data Viewer</Link></li>
          <li><Link to="/services">Services</Link></li> {/* Link to ServicesPage */}
        </ul>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/viewer" element={<DataViewerPage />} />
          <Route path="/services/*" element={<ServicesPage />} /> {/* Route for ServicesPage */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
