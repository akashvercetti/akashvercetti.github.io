import React from 'react';
import usePageMeta from '../usePageMeta';
import './ContactUs.css';

const ContactUs = () => {
  usePageMeta(
    'Contact Us - Pulstral',
    'Get in touch with the Pulstral team. Report bugs, request features, or just say hi.'
  );

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
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
