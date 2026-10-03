import { useEffect } from 'react';

export const SITE_ORIGIN = 'https://akashvercetti.github.io';

export const AUTHOR = 'Akash Malhotra';

// Used by every page that does not name its own icon. The query string is a
// version marker, because browsers cache a favicon for a long time.
const DEFAULT_FAVICON = '/favicon.ico?v=2';

// Create or update a <meta> tag, matched by either its `name` or `property`.
// A null or undefined `content` deletes the tag. Deleting matters here: every
// page starts from the tags in index.html, so a page that says nothing about
// its own keywords or artwork would otherwise keep the home page's.
const upsertMeta = (attr, key, content) => {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (content == null) {
    if (el) el.remove();
    return;
  }
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
// Open Graph tags, keyword list, and artwork.
const usePageMeta = ({ title, description, siteName, image, keywords, favicon }) => {
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
    upsertMeta('name', 'author', AUTHOR);
    upsertMeta('name', 'keywords', keywords);

    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:site_name', siteName);

    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:url', url);

    // A page with no artwork of its own must not fall back to the Pulstral app
    // icon. Without an image the large-image Twitter card renders badly, so
    // drop down to the small card.
    const absImage = image
      ? (image.startsWith('http') ? image : SITE_ORIGIN + image)
      : null;
    upsertMeta('property', 'og:image', absImage);
    upsertMeta('name', 'twitter:image', absImage);
    upsertMeta('name', 'twitter:card', absImage ? 'summary_large_image' : 'summary');

    // Canonical must point at THIS page, not the home page.
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    // Some pages stand for something other than the app and carry their own
    // icon. Chrome only redraws the tab icon when the link element itself is
    // new, so the old one is removed instead of being edited.
    const nextIcon = favicon || DEFAULT_FAVICON;
    const currentIcon = document.querySelector('link[rel="icon"]');
    if (!currentIcon || currentIcon.getAttribute('href') !== nextIcon) {
      document
        .querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]')
        .forEach((el) => el.remove());
      const el = document.createElement('link');
      el.setAttribute('rel', 'icon');
      el.setAttribute('type', nextIcon.split('?')[0].endsWith('.ico') ? 'image/x-icon' : 'image/png');
      el.setAttribute('href', nextIcon);
      document.head.appendChild(el);
    }
  }, [title, description, siteName, image, keywords, favicon]);
};

export default usePageMeta;
