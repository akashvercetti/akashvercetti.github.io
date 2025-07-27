import React from 'react';
import './Home.css';
import screenshot1 from '../assets/screenshot1.png'; // Path to your screenshot images
import screenshot2 from '../assets/screenshot2.png';
import screenshot3 from '../assets/screenshot3.png';
import screenshot4 from '../assets/screenshot4.png';
import screenshot5 from '../assets/screenshot5.png';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section with Screenshots */}
      <section className="hero-section">
        <h1 className="hero-title">Gaming News Shorts, Trailers and more</h1>
        <div className="screenshot-gallery">
          <img src={screenshot1} alt="GameShortsXP Screenshot 1" className="screenshot" />
          <img src={screenshot2} alt="GameShortsXP Screenshot 2" className="screenshot" />
          <img src={screenshot3} alt="GameShortsXP Screenshot 3" className="screenshot" />
          <img src={screenshot4} alt="GameShortsXP Screenshot 4" className="screenshot" />
          <img src={screenshot5} alt="GameShortsXP Screenshot 4" className="screenshot" />
        </div>
      </section>

      {/* App Description Section */}
      <section className="description-section">
        <h2>
          Get the latest gaming news shorts, trailers, and Xbox Game Pass updates.
        </h2>
          <h3>GameShortsXP is built for gamers who want fast, reliable updates. Stay informed with curated summaries, real-time trailers, and Game Pass availability checks all in a lightweight, user-friendly app.</h3>
        <p><strong>Stay Ahead with Gaming News in a Flash!</strong></p>
        <p>Get instant gaming updates, delivered in concise and engaging summaries of 100 words or less, perfect for busy gamers on the go.</p>

        <h2>
    Fast, Focused Gaming News + Game Trailers + Xbox Game Pass Updates — All in One Place.
  </h2>
  
  <p>
    Stay up to date with the latest from the gaming world. Whether it's PlayStation, Xbox, PC, Nintendo, or mobile, we cover major announcements, release dates, platform updates, and more. Every story is written in 60 to 100 words for maximum clarity and speed.
  </p>

  <h3>Latest Game Trailers</h3>
  <p>
    Watch official trailers and gameplay videos from top publishers and upcoming titles. The trailers feed is constantly updated so you never miss what’s trending.
  </p>

  <h3>Xbox Game Pass Tracker</h3>
  <p>
    Search any title and check if it's available on Xbox Game Pass (Core, PC, or Ultimate). See which games support cloud gaming and touch controls.
  </p>

  <h3>Text-to-Speech</h3>
  <p>
    Prefer listening? Use built-in voice playback to hear the news summaries while you're on the go.
  </p>

  <h3>Personalize Your Feed</h3>
  <p>
    Tailor the news and trailer feed to match your interests. Choose the platforms or genres you care about, including Xbox, PlayStation, PC, Nintendo, mobile, RPG, shooters, indies, racing games and more.
  </p>

  <h3>More Features</h3>
  <ul>
    <li>Bookmark news and trailers for later</li>
    <li>Read full articles within the app</li>
    <li>Dark mode and light mode</li>
    <li>Choose between horizontal or vertical scrolling</li>
    <li>Easy onboarding to set your preferences quickly</li>
  </ul>

  <h3>Feedback and Support</h3>
  <p>
    We’re always improving based on your feedback. Reach out with ideas or issues anytime.
  </p>
  <p>
    Email: <a href="mailto:carljohnson.akash@gmail.com">carljohnson.akash@gmail.com</a>
  </p>
      </section>
    </div>
  );
};

export default Home;
