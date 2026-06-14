import React from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import pulstralLogo from '../assets/icon.png';
import googlePlayBadge from '../assets/google-play-badge.png';
import channelLogo from '../assets/cfyoutube.png';
import teesLogo from '../assets/tees-logo.jpg';

// Default branding (home + app support pages: contact, privacy).
const DEFAULT_HEADER = {
  logo: pulstralLogo,
  logoAlt: 'Pulstral logo',
  title: 'Pulstral',
  badge: {
    src: googlePlayBadge,
    alt: 'Get it on Google Play',
    href: 'https://play.google.com/store/apps/details?id=com.akashvercetti.gameshortsxp',
  },
};

// Per-route branding overrides.
const HEADER_BY_PATH = {
  '/invertedcontrolfreak': {
    logo: channelLogo,
    logoAlt: 'InvertedControlFreak YouTube channel logo',
    title: 'InvertedControlFreak',
    cta: { label: 'Visit Channel', href: 'https://www.youtube.com/@InvertedControlFreak' },
  },
  '/tees': {
    logo: teesLogo,
    logoAlt: 'Funny Tees',
    title: 'Funny Tees',
    logoHref: 'https://www.franklywearing.com/creator/akashmalhotra',
    // No storefront URL yet — add `cta: { label, href }` here when you have one.
  },
};

const Header = () => {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/+$/, '') || '/';
  const cfg = HEADER_BY_PATH[path] || DEFAULT_HEADER;

  return (
    <header className="header">
      {cfg.logoHref ? (
        <a href={cfg.logoHref} target="_blank" rel="noopener noreferrer">
          <img src={cfg.logo} alt={cfg.logoAlt} className="logo" />
        </a>
      ) : (
        <Link to="/" aria-label="Home">
          <img src={cfg.logo} alt={cfg.logoAlt} className="logo" />
        </Link>
      )}

      <span className="app-title">{cfg.title}</span>

      {cfg.badge ? (
        <a href={cfg.badge.href} target="_blank" rel="noopener noreferrer">
          <img src={cfg.badge.src} alt={cfg.badge.alt} className="google-play-badge" />
        </a>
      ) : cfg.cta ? (
        <a
          href={cfg.cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="header-cta"
        >
          {cfg.cta.label}
        </a>
      ) : (
        <span className="header-spacer" aria-hidden="true" />
      )}
    </header>
  );
};

export default Header;
