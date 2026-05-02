import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>
        Got a bug to report, a feature you'd like to see, or just want to say hi?
        We'd love to hear from you.
      </p>
      <p>
        Email us at:{' '}
        <a href="mailto:carljohnson.akash@gmail.com">carljohnson.akash@gmail.com</a>
      </p>
      <p>
        We read every message and reply to most of them. Feature requests are always welcome —
        Pulstral is actively developed and your feedback shapes what gets built next.
      </p>
    </div>
  );
};

export default ContactUs;
