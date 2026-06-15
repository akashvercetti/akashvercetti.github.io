import { useEffect } from 'react';

export const SITE_ORIGIN = 'https://akashvercetti.github.io';

// Create or update a <meta> tag, matched by either its `name` or `property`.
const upsertMeta = (attr, key, content) => {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

// Sets per-route SEO + social metadata. This is a client-rendered SPA and
// index.html only carries the default home metadata, so without this every
// prerendered page would inherit the home page's title, description, canonical,
// and Open Graph tags. `image` is optional and falls back to the home default.
const usePageMeta = (title, description, image) => {
  useEffect(() => {
    document.title = title;

    // GitHub Pages serves directory-style URLs with a trailing slash and
    // 301-redirects the no-slash form (e.g. /tees -> /tees/). Match that here so
    // canonical, og:url, and the sitemap all point at the URL that actually
    // returns 200, instead of a redirecting one. Root stays as "/".
    const rawPath = window.location.pathname.replace(/\/+$/, '');
    const path = rawPath === '' ? '/' : `${rawPath}/`;
    const url = SITE_ORIGIN + path;

    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:url', url);

    if (image) {
      const absImage = image.startsWith('http') ? image : SITE_ORIGIN + image;
      upsertMeta('property', 'og:image', absImage);
      upsertMeta('name', 'twitter:image', absImage);
    }

    // Canonical must point at THIS page, not the home page.
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }, [title, description, image]);
};

export default usePageMeta;
