import React from 'react';
import usePageMeta from '../usePageMeta';
import './Home.css';
import screenshot1 from '../assets/screenshot1.jpg';
import screenshot2 from '../assets/screenshot2.jpg';
import screenshot3 from '../assets/screenshot3.jpg';
import screenshot4 from '../assets/screenshot4.jpg';
import screenshot5 from '../assets/screenshot5.jpg';
import screenshot6 from '../assets/screenshot6.jpg';
import screenshot7 from '../assets/screenshot7.jpg';
import screenshot8 from '../assets/screenshot8.jpg';

const Home = () => {
  usePageMeta(
    'Pulstral - Your Gaming Life, One Place',
    'Pulstral is your all-in-one gaming companion. Deals, free games, Steam stats, esports scores, news, trailers, and more — all in one free app.'
  );

  return (
    <div className="home-container">
      {/* Hero Section with Screenshots */}
      <section className="hero-section">
        <h1 className="hero-title">Pulstral - Your Gaming Life, One Place</h1>
        <div className="screenshot-gallery">
          <img src={screenshot1} alt="Pulstral Screenshot 1" className="screenshot" />
          <img src={screenshot2} alt="Pulstral Screenshot 2" className="screenshot" />
          <img src={screenshot3} alt="Pulstral Screenshot 3" className="screenshot" />
          <img src={screenshot4} alt="Pulstral Screenshot 4" className="screenshot" />
          <img src={screenshot5} alt="Pulstral Screenshot 5" className="screenshot" />
          <img src={screenshot6} alt="Pulstral Screenshot 6" className="screenshot" />
          <img src={screenshot7} alt="Pulstral Screenshot 7" className="screenshot" />
          <img src={screenshot8} alt="Pulstral Screenshot 8" className="screenshot" />
        </div>
      </section>

      {/* App Description Section */}
      <section className="description-section">
  <h2>
    News, deals, free games, Steam stats, esports, and more - all in one free app.
  </h2>
  <h3>
    Pulstral is your all-in-one gaming companion. No account needed, no subscriptions,
    no in-app purchases. Just everything a gamer needs, in one place.
  </h3>

  <h2>What's inside</h2>

  <h3>Free games tracker</h3>
  <p>
    Never miss a free game again. Pulstral tracks free game offers across Epic Games Store,
    Amazon Prime Gaming, GOG, Steam, and more - updated as they go live. Enable notifications
    and get alerted the moment something goes free.
  </p>

  <h3>Game deals and price tracking</h3>
  <p>
    Browse today's top PC game deals across Steam, GOG, Humble Store, Fanatical, and more.
    Add games to your watchlist, set a target price, and get a push notification the moment
    a game hits your price. Tap any game to see its full price history chart.
  </p>

  <h3>Steam integration</h3>
  <p>
    Link your Steam profile to unlock a full suite of personalised stats and tools - all from
    your public Steam data, no password needed.
  </p>
  <ul>
    <li>Play Next - smart recommendations based on your backlog, playtime, and completion progress</li>
    <li>Achievement Hunter - track progress across every game in your library</li>
    <li>Achievement Timeline - a chronological record of every unlock</li>
    <li>Trophy Case - showcase your 6 rarest achievements and share them</li>
    <li>Library Stats - total hours, completion rates, achievements unlocked, and more</li>
    <li>Wrapped - weekly and lifetime stats cards you can share with friends</li>
  </ul>

  <h3>Gaming news</h3>
  <p>
    A fast-moving feed of the latest gaming news from top outlets including IGN, Eurogamer,
    Gamespot, Kotaku, Rock Paper Shotgun, and more. Tap any story to read the full article
    in-app or share it directly.
  </p>

  <h3>Esports</h3>
  <p>
    Follow live match scores, upcoming tournaments, and streams across CS2, Dota 2, League of
    Legends, Valorant, BGMI, Mobile Legends, and more. Enable notifications for your favourite
    games so you never miss a match.
  </p>

  <h3>HoYo Showcase</h3>
  <p>
    Show off your Genshin Impact, Honkai: Star Rail, or Zenless Zone Zero characters and stats.
    Generate a shareable card to post with friends.
  </p>

  <h3>Game backlog manager</h3>
  <p>
    Keep track of games you want to play, are currently playing, and have completed. Search the
    IGDB database to add any game. Your backlog syncs with your Steam library automatically
    when connected.
  </p>

  <h3>Free-to-play redemption codes</h3>
  <p>
    Browse and copy the latest active redemption codes for popular games. Never miss free
    in-game rewards.
  </p>

  <h3>Game trailers</h3>
  <p>
    Watch the latest official trailers and gameplay reveals from top publishers, constantly
    updated so you never miss what's dropping next.
  </p>

  <h3>Upcoming releases and calendar</h3>
  <p>
    Track upcoming game releases, set reminders, and browse a full gaming event calendar so
    you're never caught off guard by a launch or showcase.
  </p>

  <h3>Xbox Game Pass tracker</h3>
  <p>
    Search any title to check availability across Game Pass Core, PC Game Pass, and Ultimate.
    Browse new additions and see which games support cloud gaming.
  </p>

  <h3>More features</h3>
  <ul>
    <li>Home screen widgets for news, deals, free games, and Steam activity</li>
    <li>Dark mode and light mode with accent colour customisation</li>
    <li>Read articles and store pages within the app</li>
    <li>Share news, deals, trailers, and stats with one tap</li>
    <li>No account required - works from day one</li>
    <li>Completely free, no in-app purchases</li>
  </ul>

  <h3>Feedback and support</h3>
  <p>
    We're always improving based on your feedback. Reach out with ideas or issues anytime.
  </p>
  <p>
    Email: <a href="mailto:carljohnson.akash@gmail.com">carljohnson.akash@gmail.com</a>
  </p>
</section>

    </div>
  );
};

export default Home;
