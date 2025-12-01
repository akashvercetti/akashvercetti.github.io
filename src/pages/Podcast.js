import React from 'react';
import './Podcast.css';

// Import podcast platform badges
import spotifyBadge from '../assets/spotify-badge.png'; 
import youtubeLogo from '../assets/youtube-logo.png'; 
import appleIcon from '../assets/apple-podcasts-icon.png'; 
import jiosaavnLogo from '../assets/jiosaavn-logo.png'; 
import iheartLogo from '../assets/iheart-logo.png'; 
import amazonLogo from '../assets/amazon-music-logo.png'; 

const Podcast = () => {
  return (
    <div className="podcast-container">
      {/* Hero Section */}
      <section className="podcast-hero">
        <div className="podcast-badge">PODCAST</div>
        <h1 className="podcast-title">The NightHawk & Vercetti Show</h1>
        <div className="podcast-tagline">Late Night Gaming Talk • Nostalgia • Chill Vibes</div>
      </section>

      {/* About Section */}
      <section className="podcast-about">
        <h2 className="section-title">About the Show</h2>
        <div className="about-content">
          <p>
            Two Indian lifelong gamers in their late 30s, <strong>NightHawk</strong> and <strong>Vercetti</strong>, 
            who should probably be sleeping, parenting, or working, but instead talk about video games. 
            Welcome to the NightHawk & Vercetti Show, where we have honest conversations about gaming news 
            with a touch of nonsense and nostalgia.
          </p>
          <p className="hindi-description">
            Ghar, office, biwi, bacche aur zindagi ek taraf aur video games ek taraf. 
            Do Indian gamers jo 8 bit se leke aaj tak almost sab khel chuke hain. 
            Presenting The NightHawk & Vercetti Show with gaming news, boomer level ka humor, 
            dad jokes, and nostalgia and most importantly, <strong>faltu ki bakwaas</strong>.
          </p>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="podcast-features">
        <h2 className="section-title">What to Expect</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎮</div>
            <h3>Gaming News</h3>
            <p>Latest updates from the gaming world with our unique take</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🕹️</div>
            <h3>Nostalgia Trip</h3>
            <p>From 8-bit classics to modern masterpieces</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">😂</div>
            <h3>Gaming Rants/Rambles</h3>
            <p>Faltu ki bakwaas guaranteed</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">☕</div>
            <h3>Late Night Vibes</h3>
            <p>When the kids are asleep and controllers come out</p>
          </div>
        </div>
      </section>

      {/* Listen Section */}
      <section className="podcast-listen">
        <h2 className="section-title">Listen Now</h2>
        <div className="platform-links">
          <a href="https://open.spotify.com/show/47tI9YeX9u038sbwRnrukO" target="_blank" rel="noopener noreferrer" className="platform-link">
            <img src={spotifyBadge} alt="Listen on Spotify" className="platform-badge spotify-badge" />
          </a>
          <a href="https://www.youtube.com/@NightHawkVercettiPodcast" target="_blank" rel="noopener noreferrer" className="platform-link">
            <img src={youtubeLogo} alt="Listen on YouTube" className="platform-badge youtube-badge" />
          </a>
          <a href="https://podcasts.apple.com/us/podcast/the-nighthawk-vercetti-show/id1856629089" target="_blank" rel="noopener noreferrer" className="platform-link">
            <img src={appleIcon} alt="Listen on Apple Podcasts" className="platform-badge apple-badge" />
          </a>
          <a href="https://www.jiosaavn.com/shows/the-nighthawk--vercetti-show/1/sBspxMinImE_" target="_blank" rel="noopener noreferrer" className="platform-link">
            <img src={jiosaavnLogo} alt="Listen on JioSaavn" className="platform-badge jiosaavn-badge" />
          </a>
          <a href="https://www.iheart.com/podcast/269-the-nighthawk-vercetti-sho-309669802/" target="_blank" rel="noopener noreferrer" className="platform-link">
            <img src={iheartLogo} alt="Listen on iHeartRadio" className="platform-badge iheart-badge" />
          </a>
          <a href="https://music.amazon.com/podcasts/2f391fef-e636-44a6-9c53-406c5280a7dd/the-nighthawk-vercetti-show" target="_blank" rel="noopener noreferrer" className="platform-link">
            <img src={amazonLogo} alt="Listen on Amazon Music" className="platform-badge amazon-badge" />
          </a>
        </div>
        <p className="coming-soon">New episodes every week! Subscribe or follow us to never miss an episode.</p>
      </section>

      {/* Connect Section */}
      <section className="podcast-connect">
        <h2 className="section-title">Connect With Us</h2>
        <p>Contact us for collaborations, business enquiries or general feedback.</p>
        <a href="mailto:nighthawkvercettipodcast@gmail.com" className="contact-link">
          nighthawkvercettipodcast@gmail.com
        </a>
      </section>
    </div>
  );
};

export default Podcast;