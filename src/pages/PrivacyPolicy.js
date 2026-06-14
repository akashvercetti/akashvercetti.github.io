import React from 'react';
import usePageMeta from '../usePageMeta';
import './Privacy.css';
import { useNavigate } from 'react-router-dom';

const Privacy = () => {
  usePageMeta(
    'Privacy Policy - Pulstral',
    'How Pulstral handles your data: no logins, no subscriptions, no selling your data.'
  );

  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact-us');
  };

  return (
    <div className="privacy-container">
      <h1>Privacy Policy for Pulstral</h1>
      <p><em>Last updated: April 2026</em></p>

      <h3>Introduction</h3>
      <p>
        Pulstral is built on a simple principle: no logins, no subscriptions, no selling
        your data. You don't create an account to use this app. This policy explains the
        limited technical data that is collected, why it's collected, and who else may
        process data as part of delivering the app's features (including ads).
      </p>

      <h3>1. No accounts. Minimal data.</h3>
      <p>
        Pulstral requires no sign-up, no email address, and no password. We do not collect
        your name, location, or contact information. The limited technical data described
        below is collected only to make specific app features work, and is never sold or
        used to build a profile about you.
      </p>

      <h3>2. Anonymous device identifier</h3>
      <p>
        On first launch, the app generates a random anonymous identifier (a UUID) and stores
        it locally on your device. To enable push notifications and personalised content
        delivery, this identifier is sent to our servers along with your Firebase push
        notification token and your selected notification topics. It is not linked to your
        name, email, or any personal account. Clearing the app's data resets it entirely.
      </p>

      <h3>3. Optional Steam profile</h3>
      <p>
        You may optionally enter your Steam ID to unlock personalised sections such as
        recently played games, achievements, and library stats. If you do:
      </p>
      <ul>
        <li>Only your public Steam profile data is fetched — the same data anyone can see on your Steam page</li>
        <li>Your Steam ID is stored locally on your device and on our servers, tied only to your anonymous device identifier — not to any personal identity</li>
        <li>You can remove it at any time from within the app</li>
      </ul>

      <h3>4. Optional HoYoverse profile</h3>
      <p>
        You may optionally enter a HoYoverse game UID (for Genshin Impact, Honkai: Star Rail,
        or Zenless Zone Zero) to view your in-game showcase. If you do:
      </p>
      <ul>
        <li>Your UID and selected game name are sent to our servers, which retrieve your public showcase data from HoYoverse's API on your behalf</li>
        <li>Only publicly visible showcase data is retrieved — the same data visible on your in-game profile</li>
        <li>Your UID is stored locally on your device for convenience and is not linked to any personal identity</li>
        <li>You can clear it at any time from within the app</li>
      </ul>

      <h3>5. Price watchlist and notifications</h3>
      <p>
        If you add games to your price watchlist, the game titles and your optional target
        prices are stored on our servers associated with your anonymous device identifier.
        This is used only to send you price drop alerts via push notification. You can
        disable notifications at any time through your device's notification settings,
        and remove watchlist items from within the app.
      </p>
      <p>
        Other optional notification features also store preferences on our servers:
      </p>
      <ul>
        <li><strong>Free games notifications</strong> — if enabled, your device identifier is stored to send you alerts when games go free</li>
        <li><strong>Esports notifications</strong> — if enabled, your selected games (e.g. CS2, Valorant) are stored against your device identifier to send match alerts</li>
        <li><strong>In-game event notifications</strong> — if enabled for a HoYoverse game, your preference is stored to send reminders about ending events</li>
        <li><strong>Redemption code notifications</strong> — if enabled for a game, your preference is stored to alert you when new codes are available</li>
      </ul>
      <p>
        All notification preferences can be changed or disabled at any time from within the app or through your device's notification settings.
      </p>

      <h3>5a. Game backlog</h3>
      <p>
        If you use the backlog feature, the game titles, platforms, and statuses you add are
        stored on our servers associated with your anonymous device identifier. This data is
        used solely to sync your backlog across app sessions. You can delete individual entries
        or clear your backlog entirely from within the app.
      </p>

      <h3>6. Advertising and consent</h3>
      <p>
        Pulstral is free and supported by ads. The app uses the following ad networks, which
        may collect and process device-level data to serve relevant advertisements:
      </p>
      <ul>
        <li>
          <strong>AdMob (Google)</strong> — may use your device's advertising identifier to
          serve personalised ads.{' '}
          <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">Google AdMob Policy</a>
        </li>
        <li>
          <strong>Meta Audience Network</strong> — may use your device's advertising identifier
          to serve personalised ads.{' '}
          <a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer">Meta Audience Network Policy</a>
        </li>
      </ul>
      <p>
        <strong>EU/EEA users:</strong> On first launch, you will be shown a consent form
        (powered by Google's User Messaging Platform) asking whether you agree to personalised
        ads. If you decline, non-personalised ads will be shown instead. You can review or
        change your choice at any time in the app's Settings screen.
      </p>
      <p>
        All users can also limit ad personalisation at any time through their device's
        settings (Settings → Privacy → Ads on Android).
      </p>

      <h3>7. Other third-party services</h3>
      <p>
        The app uses Firebase (Google) for push notification delivery. Firebase processes
        your device's push token to deliver notifications you have opted into.{' '}
        <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">Firebase Privacy Policy</a>
      </p>

      <h3>8. Gaming content and data sources</h3>
      <p>
        The app displays publicly available gaming data sourced from Steam, CheapShark,
        IGDB, Epic Games, and Microsoft. No personal information is sent to any of these
        services on your behalf.
      </p>
      <p>
        Gaming news is sourced from public RSS feeds. Every article links back to the
        original source — we summarise, we don't claim ownership.
      </p>

      <h3>9. Use of Lottie files</h3>
      <p>
        The app uses animation files from LottieFiles under the{' '}
        <a href="https://lottiefiles.com/page/license" target="_blank" rel="noopener noreferrer">Lottie Simple License</a>.
      </p>

      <h3>10. External links</h3>
      <p>
        The app links to external websites including news articles, game store pages, and
        deal URLs. Pulstral is not responsible for the privacy practices of those sites.
      </p>

      <h3>11. Changes to this policy</h3>
      <p>
        If this policy changes, the updated version will be posted here with a revised date
        at the top. The fundamental principle will not change: no accounts, no selling your
        data.
      </p>

      <h3>12. Contact us</h3>
      <p>Questions or concerns? Reach us at:</p>
      <ul>
        <li>Email: carljohnson.akash@gmail.com</li>
        <li>
          <button
            onClick={handleContactClick}
            className="privacy-contact-link"
          >
            Contact us page
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Privacy;
