import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import WebDevelopment from './services/WebDevelopment';
import MobileDevelopment from './services/MobileDevelopment';
import Consulting from './services/Consulting';

function ServicesPage() {
  return (
    <div>
      <h2>Our Services</h2>
      <ul>
        <li><Link to="web-development">Web Development</Link></li>
        <li><Link to="mobile-development">Mobile Development</Link></li>
        <li><Link to="consulting">Consulting</Link></li>
      </ul>
      <Routes>
        <Route path="web-development" element={<WebDevelopment />} />
        <Route path="mobile-development" element={<MobileDevelopment />} />
        <Route path="consulting" element={<Consulting />} />
      </Routes>
    </div>
  );
}

export default ServicesPage;
