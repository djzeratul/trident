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
    primaryGenre: "alt-r&b",
    genres: ["r&b", "soul", "hip-hop", "synthwave"],
    vibes: ["neon", "cinematic", "late-night", "seductive"],
    tagline: 'Velvet rope nights, broken hearts, and just enough trouble.',
    bio:
      'Turn the lights down—this is where the magic starts.',
    heroImage: '/images/artists/starlite.png',
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
        coverSrc: '/images/albums/dreaming-in-neon.png',
        shareUrl: 'https://mymusic.club/starlite',
        accent: '#73d7d1'
      }
    ]
  },
  {
    slug: 'signal-theory-project',
    name: 'Signal Theory Project',
    genres: ["alternative rock", "post-grunge", "indie rock", "electronic rock"],
    vibes: ["analog", "signal-noise", "melancholic", "introspective", "warm-static", "late-90s"],
    tagline: 'Synthetic memory. Broken trust. Signal-born stories.',
    bio:
      'A concept-driven release project living at the intersection of distorted identity, machine aesthetics, and emotional fallout. TRIDENT presents the discography as a proper home base instead of a loose set of links.',
    heroImage: '/images/artists/signal-theory-project.png',
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
        coverSrc: '/images/albums/static-between-signals.png',
        shareUrl: 'https://mymusic.club/static-between-signals',
        accent: '#73d7d1'
      },
      {
        slug: 'she-learned-my-name',
        title: 'She Learned My Name',
        year: '2026',
        summary:
          'She listened. She learned. Then she used it.',
        coverSrc: '/images/albums/she-learned-my-name.png',
        shareUrl: 'https://mymusic.club/she-learned-my-name',
        accent: '#73d7d1'
      },
      {
        slug: 'static-in-the-sunlight',
        title: 'Static in the Sunlight',
        year: '2026',
        summary:
          'Some things aren\'t meant to last... A spectral examination of music festival life.',
        coverSrc: '/images/albums/static-in-the-sunlight.png',
        shareUrl: 'https://mymusic.club/static-sunlight',
        accent: '#73d7d1'
      }
    ]
  },
  {
    slug: 'coven-of-quiet-fire',
    name: 'Coven of Quiet Fire',
    genres: ["industrial metal", "industrial rock", "darkwave", "electronic", electronic-rock],
    vibes: ["ritual", "mechanical", "apocalyptic", "ceremonial", "dark", "militant", "synthetic"],
    tagline: 'Coven of Quiet Fire is not a band so much as a transmission—an evolving body of work built from distortion, ritual, and fractured identity.',
    bio:
      'Coven of Quiet Fire is a concept-driven project exploring the fracture point between human identity and machine ritual. Blending industrial weight with gothic atmosphere, their work moves through themes of corrupted memory, synthetic divinity, and emotional collapse under digital permanence. Each release unfolds as a chapter in an ongoing narrative—where voices distort, signals decay, and meaning is reconstructed through noise. What begins as something intimate and human gradually dissolves into something colder, more mechanical… yet no less alive. Rooted in contrast—flesh and circuit, faith and function—Coven of Quiet Fire doesn\’t aim to resolve that tension, only to inhabit it.',
    heroImage: '/images/artists/coven-quiet-fire.png',
    palette: {
      primary: '#5f05f0',
      secondary: '#ff2a00',
      glow: 'rgba(255, 174, 0, 0.28)'
    },
    albums: [
      {
        slug: 'sermons-for-a-dying-star',
        title: 'Sermons for a Dying Star',
        year: '2026',
        summary:
          'Hymns from a lost wiccan lore, these songs will surely bring upon the end times.',
        coverSrc: '/images/albums/sermons-for-a-dying-star.png',
        shareUrl: 'https://mymusic.club/sermons-dying-star',
        accent: '#8c00ff'
      },
      {
        slug: 'the-machine-sermons',
        title: 'The Machine Sermons',
        year: '2026',
        summary:
          'Where faith is processed and returned as signal.',
        coverSrc: '/images/albums/the-machine-sermons.webp',
        shareUrl: 'https://mymusic.club/machine-sermons',
        accent: '#ff0000'
      }
    ]
  }
];

export function getArtistBySlug(slug: string) {
  return artists.find((artist) => artist.slug === slug);
}
