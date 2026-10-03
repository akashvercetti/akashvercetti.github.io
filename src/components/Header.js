import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link, NavLink, useLocation } from 'react-router-dom';
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

// The site is four separate things made by one person. The first item carries
// the name, so every page says who this belongs to. Privacy Policy is left out
// on purpose. It is legal boilerplate and it belongs in the footer.
const NAV_ITEMS = [
  { to: '/portfolio', label: 'Akash Malhotra', wordmark: true },
  { to: '/', label: 'Pulstral' },
  { to: '/invertedcontrolfreak', label: 'YouTube' },
  { to: '/tees', label: 'Tees' },
  { to: '/contact-us', label: 'Contact' },
];

// A scroll must pass this many pixels before the bar reacts. Smaller moves are
// usually a trackpad wobble. Reacting to those makes the bar flicker.
const SCROLL_DELTA = 8;
// The bar stays put near the top of the page. There is no space problem there.
const HIDE_AFTER = 120;

// Returns true while the visitor scrolls down the page. The nav bar slides out
// of sight then. It comes back as soon as the visitor scrolls up.
const useHideOnScrollDown = (pathname) => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let queued = false;

    const read = () => {
      queued = false;
      const y = window.scrollY;
      const delta = y - lastY;
      if (Math.abs(delta) < SCROLL_DELTA) return;
      lastY = y;
      setHidden(delta > 0 && y > HIDE_AFTER);
    };

    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(read);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // A new page starts at the top, so the bar must start visible.
  useEffect(() => { setHidden(false); }, [pathname]);

  return hidden;
};

const Header = () => {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/+$/, '') || '/';
  const cfg = HEADER_BY_PATH[path] || DEFAULT_HEADER;
  const hidden = useHideOnScrollDown(pathname);

  return (
    <>
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

      {/* Sits below the branding bar and sticks to the top of the window once
          that bar has scrolled away. Its height never changes, so sliding it
          out of sight moves nothing else on the page. */}
      <div className={`site-nav${hidden ? ' site-nav--hidden' : ''}`}>
        <nav className="site-nav-inner" aria-label="Site">
          {NAV_ITEMS.map(({ to, label, wordmark }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                'site-nav-link' +
                (wordmark ? ' site-nav-link--wordmark' : '') +
                (isActive ? ' is-active' : '')
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
