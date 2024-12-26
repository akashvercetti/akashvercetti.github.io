import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../assets/icon.png'; // Adjust this path to your logo image
import googlePlayBadge from '../assets/google-play-badge.png'; // Path to your Google Play badge

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="App Logo" className="logo" />
      </Link>
      <h1 className="app-title">GameShortsXP</h1> {/* Centered app title */}
      <a href="https://play.google.com/store/apps/details?id=com.akashvercetti.gameshortsxp">
        <img
          src={googlePlayBadge}
          alt="Get it on Google Play"
          className="google-play-badge"
        />
      </a>
    </header>
  );
};

export default Header;
