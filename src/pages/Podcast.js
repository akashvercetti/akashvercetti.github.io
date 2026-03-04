import React, { useEffect, useState } from 'react';
import './Podcast.css';
import cfyoutube from '../assets/cfyoutube.png';
import icflogo from '../assets/icflogo.png';

// ─── CONFIG ───────────────────────────────────────────────
// Replace with your actual YouTube Channel ID.
// Find it: YouTube Studio → Customization → Basic Info → scroll to bottom
const CHANNEL_ID = 'UCgY11M2hCN53Dng3qXlRhqw';
const RSS_URL = `https://youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;
// ──────────────────────────────────────────────────────────

const VIDEO_LABELS = ['LATEST', 'NEW', 'RECENT', 'WATCH THIS'];

const CONTENT_TYPES = [
  { icon: '🛒', label: 'Sale Picks',      desc: 'Recommendations on what\'s actually worth grabbing during sales. No filler, just the good stuff.' },
  { icon: '🎮', label: 'Game Reviews',    desc: 'Honest, personal takes from someone who plays for the love of it. Not a review quota.' },
  { icon: '😤', label: 'News Reactions',  desc: 'Unfiltered reactions to gaming news, announcements & the stuff that gets gamers talking.' },
  { icon: '💜', label: 'Indie Love',      desc: 'Shining a light on indie games worth your time and money.' },
  { icon: '🎙️', label: 'Gaming Sessions', desc: 'Casual chats with friends about what we\'re playing. No script, just honest conversation.' },
  { icon: '📖', label: 'My Gaming Life',  desc: 'Commentary on personal gaming experiences, memories and what it means to game as a dad.' },
];

// Extract video ID from YouTube watch URL
const getVideoId = (url = '') => {
  const watchMatch  = url.match(/[?&]v=([^&]+)/);
  if (watchMatch) return watchMatch[1];
  const shortsMatch = url.match(/\/shorts\/([^?&/]+)/);
  if (shortsMatch) return shortsMatch[1];
  return null;
};

// Format publish date nicely
const formatDate = (dateStr) => {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric',
  });
};

// ─── Video Card ───────────────────────────────────────────
const VideoCard = ({ item, label, index }) => {
  const videoId = getVideoId(item?.link);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : '';

  return (
    <div className="icc-video-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="icc-video-frame-wrapper">
        {embedUrl ? (
          <iframe
            className="icc-video-frame"
            src={embedUrl}
            title={item.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="icc-video-placeholder">
            <div className="icc-play-icon">▶</div>
            <span>Video unavailable</span>
          </div>
        )}
      </div>
      {item?.title && (
        <div className="icc-video-info">
          <span className="icc-video-label">{label}</span>
          <p className="icc-video-title">{item.title}</p>
          {item.pubDate && (
            <span className="icc-video-date">{formatDate(item.pubDate)}</span>
          )}
        </div>
      )}
    </div>
  );
};

// ─── Skeleton loader ──────────────────────────────────────
const VideoSkeleton = ({ label }) => (
  <div className="icc-video-card icc-video-card--skeleton">
    <div className="icc-video-frame-wrapper">
      <div className="icc-skeleton-frame" />
    </div>
    <div className="icc-video-info">
      <span className="icc-video-label">{label}</span>
      <div className="icc-skeleton-line icc-skeleton-line--title" />
      <div className="icc-skeleton-line icc-skeleton-line--date" />
    </div>
  </div>
);

// ─── Main Component ───────────────────────────────────────
const InvertedControlFreak = () => {
  const [videos, setVideos]   = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res  = await fetch(API_URL);
        const data = await res.json();
        if (data.status !== 'ok') throw new Error('Feed error');
        setVideos(data.items.slice(0, 4));
      } catch (err) {
        setError('Could not load videos. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  return (
    <div className="icc-container">

      {/* Channel Banner */}
      <div className="icc-banner-wrapper">
        <img
          src={icflogo}
          alt="InvertedControlFreak channel banner"
          className="icc-banner"
        />
        <div className="icc-banner-overlay" />
      </div>

      {/* Hero */}
      <section className="icc-hero">
        <div className="icc-hero-bg-grid" />
        <div className="icc-hero-content">
          <div className="icc-avatar-wrapper">
            <img
              src={cfyoutube}
              alt="InvertedControlFreak"
              className="icc-avatar"
            />
          </div>
          <div className="icc-channel-badge">
            <span className="icc-yt-dot" />
            YOUTUBE CHANNEL
          </div>
          <h1 className="icc-title">
            Inverted<span className="icc-title-accent">Control</span>Freak
          </h1>
          <p className="icc-subtitle">
            A gamer dad sharing honest takes on games. Indie gems, sale picks,
            news reactions, reviews and sessions with friends. Real experiences,
            no corporate filter.
          </p>
          <a
            href="https://www.youtube.com/@InvertedControlFreak"
            target="_blank"
            rel="noopener noreferrer"
            className="icc-subscribe-btn"
          >
            <span className="icc-yt-icon">▶</span>
            Visit Channel
          </a>
        </div>
      </section>

      {/* Latest Videos */}
      <section className="icc-section">
        <h2 className="icc-section-title">Latest Videos</h2>
        <p className="icc-section-sub">Fresh from the channel</p>

        {error ? (
          <div className="icc-error">{error}</div>
        ) : (
          <div className="icc-video-grid">
            {loading
              ? VIDEO_LABELS.map(l => <VideoSkeleton key={l} label={l} />)
              : videos.map((v, i) => (
                  <VideoCard key={v.guid || i} item={v} label={VIDEO_LABELS[i]} index={i} />
                ))
            }
          </div>
        )}
      </section>

      {/* Content Types */}
      <section className="icc-section icc-content-types-section">
        <h2 className="icc-section-title">What's on the Channel</h2>
        <p className="icc-section-sub">Real games. Real opinions. Real life.</p>
        <div className="icc-content-grid">
          {CONTENT_TYPES.map((c, i) => (
            <div className="icc-content-card" key={i}>
              <div className="icc-content-icon">{c.icon}</div>
              <h3 className="icc-content-label">{c.label}</h3>
              <p className="icc-content-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About / CTA */}
      <section className="icc-section icc-about-section">
        <div className="icc-about-card">
          <h2 className="icc-section-title">About the Channel</h2>
          <p className="icc-about-text">
            <strong>InvertedControlFreak</strong> is a gaming channel run by a gamer dad who never
            stopped loving games. You'll find commentary on years of gaming experiences, honest
            recommendations during sales, reactions to gaming news, and the occasional session
            with friends just talking about what we're playing. There's a special place here for
            indie games, the hidden gems, the overlooked darlings, the ones that punch way above
            their budget. No review scores, no hype cycles. Just a genuine love for games and the
            people who play them.
          </p>
          <a
            href="https://www.youtube.com/@InvertedControlFreak"
            target="_blank"
            rel="noopener noreferrer"
            className="icc-subscribe-btn icc-subscribe-btn--outline"
          >
            <span className="icc-yt-icon">▶</span>
            Subscribe on YouTube
          </a>
        </div>
      </section>

    </div>
  );
};

export default InvertedControlFreak;