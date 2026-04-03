export type Album = {
  slug: string;
  title: string;
  year: string;
  summary: string;
  coverSrc: string;
  shareUrl: string;
  accent: string;
};

export type Artist = {
  slug: string;
  name: string;
  tagline: string;
  bio: string;
  heroImage: string;
  palette: {
    primary: string;
    secondary: string;
    glow: string;
  };
  albums: Album[];
};

export const artists: Artist[] = [
  {
    slug: 'signal-theory-project',
    name: 'Signal Theory Project',
    tagline: 'Synthetic memory. Broken trust. Signal-born stories.',
    bio:
      'A concept-driven release project living at the intersection of distorted identity, machine aesthetics, and emotional fallout. TRIDENT presents the discography as a proper home base instead of a loose set of links.',
    heroImage: '/images/artists/signal-theory-project.svg',
    palette: {
      primary: '#69d2ff',
      secondary: '#ff7b61',
      glow: 'rgba(105, 210, 255, 0.28)'
    },
    albums: [
      {
        slug: 'analog-tide-dreams',
        title: 'Analog Tide Dreams',
        year: '2026',
        summary:
          'A luminous, oceanic signal-pop release where mystery and motion feel beautiful before the static turns strange.',
        coverSrc: '/images/albums/analog-tide-dreams.svg',
        shareUrl: 'https://mymusic.club/analog-tide-dreams',
        accent: '#73d7d1'
      },
      {
        slug: 'she-learned-my-name',
        title: 'She Learned My Name',
        year: '2026',
        summary:
          'The signal comes back malicious: trust becomes access, identity becomes leverage, and the aftermath keeps echoing.',
        coverSrc: '/images/albums/she-learned-my-name.png',
        shareUrl: 'https://mymusic.club/she-learned-my-name',
        accent: '#ff7b61'
      }
    ]
  }
];

export function getArtistBySlug(slug: string) {
  return artists.find((artist) => artist.slug === slug);
}
