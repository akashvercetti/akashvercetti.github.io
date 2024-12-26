import React, { useEffect } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  useEffect(() => {
    console.log('contact us')
  });

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>For any feature requests or feedback, email at: <a href="mailto:carljohnson.akash@gmail.com">carljohnson.akash@gmail.com</a></p>
    </div>
  );
};

export default ContactUs;
