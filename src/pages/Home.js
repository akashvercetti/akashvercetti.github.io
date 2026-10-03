import React from 'react';
import { Link } from 'react-router-dom';
import usePageMeta from '../usePageMeta';
import './Home.css';
import screenshot1 from '../assets/screenshot1.webp';
import screenshot2 from '../assets/screenshot2.webp';
import screenshot3 from '../assets/screenshot3.webp';
import screenshot4 from '../assets/screenshot4.webp';
import screenshot5 from '../assets/screenshot5.webp';
import screenshot6 from '../assets/screenshot6.webp';
import screenshot7 from '../assets/screenshot7.webp';
import screenshot8 from '../assets/screenshot8.webp';

const SCREENSHOTS = [
  { src: screenshot1, alt: 'Pulstral home feed combining game deals, news and Steam activity in one screen' },
  { src: screenshot2, alt: 'Steam Weekly Wrapped card in Pulstral showing achievements, games played and playtime' },
  { src: screenshot3, alt: 'Pulstral free games tracker listing current free offers with notification toggle' },
  { src: screenshot4, alt: 'Pulstral game deals screen with discounted PC games and store prices' },
  { src: screenshot5, alt: 'Pulstral library stats showing hours played, completion rate and rarest achievements' },
  { src: screenshot6, alt: 'Pulstral esports screen with live match scores across CS2, Valorant and Dota 2' },
  { src: screenshot7, alt: 'Pulstral gaming news feed with the latest stories from major outlets' },
  { src: screenshot8, alt: 'Pulstral trailers screen showing the latest official game trailers' },
];

// Intrinsic size of the exported screenshots. Set on every <img> so the gallery
// reserves its space before the images arrive.
const SHOT_W = 480;
const SHOT_H = 854;

const Home = () => {
  usePageMeta({
    title: 'Pulstral - Your Gaming Life, One Place',
    description: 'Pulstral is your all-in-one gaming companion. Track trophies and achievements across PlayStation, Xbox, Steam and RetroAchievements, plus game deals, free games, esports, news and trailers - all in one free app.',
    siteName: 'Pulstral',
    image: '/logo512.png',
    keywords: 'gaming app, trophy tracker, achievement tracker, PlayStation trophies, Xbox achievements, RetroAchievements, Steam stats, Pulstral Score, game deals, free games, esports, gaming news, game trailers, price tracker, Pulstral',
  });

  return (
    <div className="home-container">
      {/* Hero Section with Screenshots */}
      <section className="hero-section">
        <h1 className="hero-title">Pulstral - Your Gaming Life, One Place</h1>
        {/* This URL is the app's page. A visitor who arrives from a job post
            needs one clear way to reach the person who made it. */}
        <Link to="/portfolio" className="hero-byline">
          Built by <strong>Akash Malhotra</strong>
          <span className="hero-byline-arrow" aria-hidden="true">&rarr;</span>
        </Link>
        <div className="screenshot-gallery">
          {SCREENSHOTS.map((shot, i) => (
            <img
              key={shot.src}
              src={shot.src}
              alt={shot.alt}
              className="screenshot"
              width={SHOT_W}
              height={SHOT_H}
              /* The first row is above the fold on desktop, so it loads eagerly. */
              loading={i < 4 ? 'eager' : 'lazy'}
              decoding="async"
            />
          ))}
        </div>
      </section>

      {/* App Description Section */}
      <section className="description-section">
  <h2>
    Trophies, achievements, game deals, free games, news, esports, and more - all in one free app.
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
    a game hits your price. Tap any game to see its full price history chart. Plus browse
    Store Coupons - the latest working discount codes across stores.
  </p>

  <h3>Connect your platforms</h3>
  <p>
    Link Steam, PlayStation, Xbox, and RetroAchievements to unlock a full suite of personalised
    stats and tools. You only ever provide a public username - no passwords, no logins - and
    Pulstral fetches the same public data anyone can see on your profile.
  </p>
  <ul>
    <li>Achievement Hunter - search, filter by rarity, and sort achievements and trophies across every platform</li>
    <li>Achievement and Trophy Timeline - a chronological record of everything you've unlocked</li>
    <li>Progress tracker - completion percentage across your whole library at a glance</li>
    <li>Library Stats - hours played, completion rates, genre breakdown, and most played games</li>
    <li>On This Day and Recent Wins - your latest unlocks and what you earned on this date in past years</li>
  </ul>

  <h3>PlayStation trophies</h3>
  <ul>
    <li>Dashboard with trophy tier counts and avatar</li>
    <li>Road to Platinum - incomplete platinums with live progress</li>
    <li>Rarest Trophies and the Ultra Rare Wall</li>
    <li>Trophy Case - showcase your 6 best trophies and share them as a card</li>
    <li>PSN Wrapped - weekly and lifetime stats cards you can share with friends</li>
  </ul>

  <h3>Xbox achievements</h3>
  <ul>
    <li>Gamerscore dashboard and recent unlocks</li>
    <li>Achievement Hunter, Timeline, and Progress tracker</li>
    <li>Completion predictions for how close you are to 100%</li>
  </ul>

  <h3>RetroAchievements</h3>
  <ul>
    <li>Dashboard with true points, mastered games, and streak</li>
    <li>Achievement Hunter and Timeline</li>
    <li>Game mastery progress and library stats</li>
  </ul>

  <h3>Pulstral Score</h3>
  <p>
    Your personal achievement skill rating, calculated from the rarity of your unlocks across
    every linked platform. The rarer the unlock, the more it's worth. Climb 15 rank tiers, from
    Wanderer to Transcendent, and show off your rarest Crown Jewel achievements.
  </p>

  <h3>Combined Gaming</h3>
  <p>
    One profile that merges your stats from every linked platform, with your total Pulstral
    Score and a per-platform breakdown.
  </p>

  <h3>Now Playing card</h3>
  <p>
    Share what you're playing with a custom card - 8 themes, platform badges, and save to
    gallery or share anywhere.
  </p>

  <h3>Can I Run It</h3>
  <p>
    Enter your PC specs and instantly check whether a game will run - GPU, CPU, RAM, VRAM, and
    storage - with upscaling (DLSS/FSR/XeSS) and bottleneck detection.
  </p>

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
    when connected, and Finish It surfaces games you started but never finished.
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

  <h3>PS Plus and Game Pass</h3>
  <p>
    Search the PlayStation Plus catalog by tier - Essential, Extra, and Premium - with
    Time-To-Beat estimates and PS5 Pro Enhanced badges. On Xbox Game Pass, search any title to
    check availability across Game Pass Core, PC Game Pass, and Ultimate, browse new additions,
    and see which games support cloud gaming.
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
