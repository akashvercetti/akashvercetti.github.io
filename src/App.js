import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Home from './pages/Home';
import Podcast from './pages/Podcast'; // Add this import
import './App.css';

function App() {
  return (
    <Router>
      <div id="root">
        <Header />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contact-us" element={<ContactUs />} />
            <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route exact path="/podcast" element={<Podcast />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
