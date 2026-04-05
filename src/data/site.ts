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
    slug: 'starlite',
    name: 'Starlite',
    tagline: 'Velvet rope nights, broken hearts, and just enough trouble.',
    bio:
      'Turn the lights down—this is where the magic starts.',
    heroImage: '../../images/artists/starlite.png',
    palette: {
      primary: '#e9e501',
      secondary: '#a50ae2',
      glow: 'rgba(105, 210, 255, 0.56)'
    },
    albums: [
      {
        slug: 'dreaming-in-neon',
        title: 'Dreaming In Neon',
        year: '2026',
        summary:
          'Dancing on the edge of a better bad idea.',
        coverSrc: '../images/albums/dreaming-in-neon.png',
        shareUrl: 'https://mymusic.club/starlite',
        accent: '#73d7d1'
      }
    ]
  },
  {
    slug: 'signal-theory-project',
    name: 'Signal Theory Project',
    tagline: 'Synthetic memory. Broken trust. Signal-born stories.',
    bio:
      'A concept-driven release project living at the intersection of distorted identity, machine aesthetics, and emotional fallout. TRIDENT presents the discography as a proper home base instead of a loose set of links.',
    heroImage: '../../images/artists/signal-theory-project.png',
    palette: {
      primary: '#69d2ff',
      secondary: '#ff7b61',
      glow: 'rgba(105, 210, 255, 0.28)'
    },
    albums: [
      {
        slug: 'static-between-signals',
        title: 'Static Between Signals',
        year: '2026',
        summary:
          'Where the signal fades and something else answers.',
        coverSrc: '../../images/albums/static-between-signals.png',
        shareUrl: 'https://mymusic.club/static-between-signals',
        accent: '#73d7d1'
      },
      {
        slug: 'she-learned-my-name',
        title: 'She Learned My Name',
        year: '2026',
        summary:
          'She listened. She learned. Then she used it.',
        coverSrc: '../../images/albums/she-learned-my-name.png',
        shareUrl: 'https://mymusic.club/she-learned-my-name',
        accent: '#73d7d1'
      }
    ]
  }
];

export function getArtistBySlug(slug: string) {
  return artists.find((artist) => artist.slug === slug);
}
