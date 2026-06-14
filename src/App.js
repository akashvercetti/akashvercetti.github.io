import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Home from './pages/Home';
import Podcast from './pages/Podcast';
import Portfolio from './pages/Portfolio';
import Tees from './pages/Tees';
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
            <Route exact path="/invertedcontrolfreak" element={<Podcast />} />
            <Route exact path="/portfolio" element={<Portfolio />} />
            <Route exact path="/tees" element={<Tees />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
