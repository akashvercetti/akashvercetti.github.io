import React from 'react';
import { Link } from 'react-router-dom';
import usePageMeta, { SITE_ORIGIN, AUTHOR } from '../usePageMeta';
import { PERSON_ID, personRef } from '../personSchema';
import { tees } from '../teesData';
import './Tees.css';

const Tees = () => {
  usePageMeta({
    title: 'Funny Gaming & Office T-Shirts - Akash Malhotra',
    description: 'Browse original funny t-shirt designs - gaming and gamer tees, office and corporate humour, coder and meme shirts. Tap any design to grab it on Frankly Wearing.',
    siteName: 'Akash Malhotra',
    image: tees[0] && tees[0].image,
    keywords: 'funny t-shirts, gaming t-shirts, gamer tees, office humour shirts, coder t-shirt, meme shirts, retro gaming tee, Frankly Wearing',
  });

  // ItemList structured data so Google understands this as a list of products
  // and can show richer results. Detail/pricing lives on the linked pages.
  // ItemList on its own cannot name an author. It is an Intangible, not a
  // CreativeWork. Both types are listed so that `author` becomes allowed.
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['ItemList', 'CreativeWork'],
        '@id': `${SITE_ORIGIN}/tees/#tees`,
        name: 'Funny Gaming & Office Tees',
        author: { '@id': PERSON_ID },
        itemListElement: tees.map((tee, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: tee.title.trim(),
          image: `${SITE_ORIGIN}${tee.image}`,
          url: tee.url,
        })),
      },
      personRef,
    ],
  };

  return (
    <div className="tees-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <section className="tees-hero">
        <h1 className="tees-title">Gaming &amp; Office Tees</h1>
        <p className="tees-subtitle">
          Original gaming, office and meme t-shirt designs. Tap a tee to grab it
          on Frankly Wearing.
        </p>
        <p className="tees-intro">
          Browse my original t-shirt designs spanning gaming and office humour -
          from funny gamer and coder tees to retro pixel-art, meme shirts, and
          corporate office jokes inspired by classics like Tekken, GTA and The
          Office. Every design is printed on demand by Frankly Wearing, so tap a
          tee to see sizes, colours and pricing.
        </p>
        {/* Names the designer in plain text. The structured data makes the same
            claim. A search engine trusts that claim more when the page itself
            says it. */}
        <p className="tees-byline">
          Designed by{' '}
          <Link to="/portfolio" className="tees-byline-link">{AUTHOR}</Link>
          {' '}(akashvercetti)
        </p>
      </section>

      <div className="tees-grid">
        {tees.map((tee) => (
          <a
            key={tee.id}
            className="tee-card"
            href={tee.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="tee-image-wrap">
              <img
                src={`${process.env.PUBLIC_URL}${tee.image}`}
                alt={tee.alt}
                className="tee-image"
                loading="lazy"
                width="480"
                height="533"
              />
            </div>
            <h2 className="tee-name">{tee.title.trim()}</h2>
          </a>
        ))}
      </div>

      <section className="tees-footer-cta">
        <a
          className="tees-creator-link"
          href="https://www.franklywearing.com/creator/akashmalhotra"
          target="_blank"
          rel="noopener noreferrer"
        >
          View all my designs on Frankly Wearing →
        </a>
      </section>
    </div>
  );
};

export default Tees;
