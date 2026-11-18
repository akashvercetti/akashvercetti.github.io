import { SITE_ORIGIN, AUTHOR } from './usePageMeta';

// One person stands behind every part of this site. He is known by three names:
// his real name, the handle "akashvercetti", and the channel name
// "InvertedControlFreak". Search engines treat each name as a separate thing
// until something tells them otherwise. The data here is that something.
//
// Every page carries its own copy of the person. A search engine reads the
// structured data of one page at a time. It does not follow an @id from one
// page to another. A page that only held the @id would describe nothing.
// The shared @id still matters. It tells the search engine that the person on
// the portfolio page and the person on the tees page are one person.

export const PERSON_ID = `${SITE_ORIGIN}/portfolio/#akash`;

// Public profiles that stand for this same person. A search engine uses these
// to confirm the link between the three names. Gaming stat pages such as
// Exophase are left out on purpose. Few people search for them. Each extra
// entry makes the match less certain, not more.
export const PERSON_SAME_AS = [
  'https://www.linkedin.com/in/akash-malhotra-9b492671',
  'https://github.com/akashvercetti',
  'https://www.youtube.com/@InvertedControlFreak',
  'https://x.com/akashvercetti',
  'https://www.instagram.com/akash_vercetti',
  'https://medium.com/@akashvercetti',
  'https://steamcommunity.com/id/akashvercetti',
  'https://www.franklywearing.com/creator/akashmalhotra',
];

// The other names people use to search for this person.
export const PERSON_ALTERNATE_NAMES = ['akashvercetti', 'InvertedControlFreak'];

// Use this on pages whose subject is not the person. It is short. It still
// names the person. It still lists the profiles. A page can be read on its own.
export const personRef = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: AUTHOR,
  alternateName: PERSON_ALTERNATE_NAMES,
  url: `${SITE_ORIGIN}/portfolio/`,
  sameAs: PERSON_SAME_AS,
};
