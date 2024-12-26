import React from 'react';
import './Privacy.css'; // Optional for styling
import { useNavigate } from 'react-router-dom';

const Privacy = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact-us'); // replace '/contact' with your actual Contact Us route
  };

  return (
    <div className="privacy-container">
      <h1>Privacy Policy for GameShortsXP</h1>

      <h3>Introduction</h3>
      <p>
        Welcome to GameShortsXP.
        This Privacy Policy explains how GameShortsXP collect, use, and safeguard your information when
        you use our mobile application (the "App") and any related services.
        By using the App, you consent to the collection and use of information as outlined in this policy.
      </p>

      <h3>1. Information GameShortsXP Collect</h3>
      <p>GameShortsXP do not collect personal data such as names, emails, or contact details. The App operates
        without requiring users to log in or provide any personal identifying information.</p>
      
      <h3>Automatically Collected Information</h3>
      <p>When you use the App, GameShortsXP may collect non-personal information automatically, such as:</p>
      <ul>
        <li>Device type, OS version, and device identifiers (for app functionality and optimization purposes)</li>
        <li>App usage data (e.g., session duration or frequency of use) for internal analytics</li>
      </ul>

      <h3>2. Content Attribution and Usage</h3>
      <p>
        Our App uses publicly available RSS feeds from gaming websites to curate and summarize gaming news articles.
        Each article summary includes attribution to the original source, and users have options to:
      </p>
      <ul>
        <li>Open the full article in a browser via an "Open in Browser" button</li>
        <li>Share the original article link with others using the "Share" button</li>
      </ul>
      <p>GameShortsXP do not claim ownership of the content sourced from these public RSS feeds. All content is summarized to provide quick and concise news updates.</p>

      <h3>3. Ad Networks and Data Collection</h3>
      <p>
        Our App displays ads from third-party ad providers such as AdMob and Meta Audience Network.
        These services may collect and use anonymous information about your device and activity within
        the App to serve relevant ads. No personally identifiable information is shared with these ad providers.
      </p>

      <h3>Third-party Advertising Networks:</h3>
      <ul>
        <li><a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">AdMob: Google AdMob Policy</a></li>
        <li><a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer">Meta Audience Network: Meta Audience Network Policy</a></li>
      </ul>
      <p>
        These providers may use cookies, web beacons, or other technologies to collect information for
        advertising purposes. You can opt out of personalized advertising through your device's settings.
      </p>

      <h3>4. How GameShortsXP Use Collected Information</h3>
      <p>GameShortsXP may use non-personal information for the following purposes:</p>
      <ul>
        <li>To operate and improve the App’s features and functionality</li>
        <li>To display relevant advertisements within the App</li>
      </ul>
      <p>GameShortsXP do not sell or share any personal data as GameShortsXP do not collect such information.</p>

      <h3>5. Content Disclaimer</h3>
      <p>
        Our App uses publicly available sources, such as RSS feeds, to provide brief summaries of gaming news articles.
        GameShortsXP ensure proper attribution to the original sources in every article and provide links to the full content on
        the original websites. Our content is transformative in nature, summarizing the key points of news articles.
      </p>

      <h3>6. Use of Lottie Files</h3>
      <p>
        Our App uses animation files provided by LottieFiles, which are distributed under the <strong>Lottie Simple License</strong>.
        You can review the license details <a href="https://lottiefiles.com/page/license" target="_blank" rel="noopener noreferrer">here</a>.
      </p>
      <blockquote>
        "Lottie Simple License (FL 9.13.21)...
      </blockquote>

      <h3>7. External Links</h3>
      <p>The App includes external links to the original news articles. GameShortsXP are not responsible for the privacy practices or the content of these external websites.</p>

      <h3>8. Changes to This Privacy Policy</h3>
      <p>GameShortsXP may update this Privacy Policy from time to time. Any changes will be posted here with an updated revision date.</p>

      <h3>9. Contact Us</h3>
      <p>
        If you have any questions or concerns about this Privacy Policy or the use of your information, please contact us:
      </p>
      <ul>
        <li>Email: carljohnson.akash@gmail.com</li>
        <li><button onClick={handleContactClick} style={{ background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>
              Contact Us Page
            </button></li>
      </ul>
    </div>
  );
};

export default Privacy;
