import React from 'react';
import usePageMeta, { SITE_ORIGIN } from '../usePageMeta';
import { tees } from '../teesData';
import './Tees.css';

const Tees = () => {
  usePageMeta(
    'Funny Gaming & Office T-Shirts - Pulstral',
    'Browse original funny t-shirt designs - gaming and gamer tees, office and corporate humour, coder and meme shirts. Tap any design to grab it on Frankly Wearing.',
    tees[0] && tees[0].image
  );

  // ItemList structured data so Google understands this as a list of products
  // and can show richer results. Detail/pricing lives on the linked pages.
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Funny Gaming & Office Tees',
    itemListElement: tees.map((tee, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: tee.title.trim(),
      image: `${SITE_ORIGIN}${tee.image}`,
      url: tee.url,
    })),
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
    </div>
  );
};

export default Tees;
