import React from 'react';
import './Home.css';
import screenshot1 from '../assets/screenshot1.png'; // Path to your screenshot images
import screenshot2 from '../assets/screenshot2.png';
import screenshot3 from '../assets/screenshot3.png';
import screenshot4 from '../assets/screenshot4.png';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section with Screenshots */}
      <section className="hero-section">
        <h1 className="hero-title">Gaming News in 60-100 words</h1>
        <div className="screenshot-gallery">
          <img src={screenshot1} alt="GameShortsXP Screenshot 1" className="screenshot" />
          <img src={screenshot2} alt="GameShortsXP Screenshot 2" className="screenshot" />
          <img src={screenshot3} alt="GameShortsXP Screenshot 3" className="screenshot" />
          <img src={screenshot4} alt="GameShortsXP Screenshot 4" className="screenshot" />
        </div>
      </section>

      {/* App Description Section */}
      <section className="description-section">
        <h2>GameShortsXP is a lightweight app designed to deliver gaming news quickly and efficiently, ensuring a smooth user experience.</h2>
        <p><strong>Stay Ahead with Gaming News in a Flash!</strong></p>
        <p>Get instant gaming updates, delivered in concise and engaging summaries of 100 words or less, perfect for busy gamers on the go.</p>

        <h3>What Can You Expect?</h3>
        <ul>
          <li><strong>Efficient Design:</strong> Built to deliver a seamless and responsive experience, even on devices with limited resources.</li>
          <li><strong>Quick Reads:</strong> Summaries in just 60–100 words, so you get the news quickly and precisely.</li>
          <li><strong>Daily Updates:</strong> Fresh gaming news handpicked from reliable sources every single day.</li>
        </ul>

        <h4>Interactive Features:</h4>
        <ul>
          <li><strong>In-App Browser:</strong> Read full articles without leaving the app.</li>
          <li><strong>Bookmark Favorites:</strong> Save news articles to revisit later.</li>
          <li><strong>Customizable Scrolling:</strong> Switch between horizontal or vertical scrolling to suit your reading style.</li>
          <li><strong>Dark/Light Mode:</strong> Tailor the app to your visual preference.</li>
        </ul>

        <h3>Your Feedback Matters:</h3>
        <p>Love the app? Have suggestions? Your reviews and ratings help shape the future of this app.</p>

        <h3>Contact Support:</h3>
        <p>For questions or suggestions, email me at <a href="mailto:carljohnson.akash@gmail.com">carljohnson.akash@gmail.com</a>.</p>
      </section>
    </div>
  );
};

export default Home;
