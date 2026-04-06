export type Album = {
  slug: string;
  title: string;
  year: string;
  summary: string;
  coverSrc: string;
  shareUrl: string;
  accent: string;
  genres?: string[];
  vibes?: string[];
};

export type Artist = {
  slug: string;
  name: string;
  primaryGenre: string;
  genres: string[];
  vibes?: string[];
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

function overlapScore(a: string[] = [], b: string[] = []): number {
  const aSet = new Set(a.map((x) => x.toLowerCase()));
  const bSet = new Set(b.map((x) => x.toLowerCase()));

  let score = 0;
  for (const item of aSet) {
    if (bSet.has(item)) score++;
  }
  return score;
}

export function getRelatedArtists(current: Artist, allArtists: Artist[], limit = 3): Artist[] {
  return allArtists
    .filter((artist) => artist.slug !== current.slug)
    .map((artist) => {
      const genreScore = overlapScore(current.genres, artist.genres);
      const vibeScore = overlapScore(current.vibes ?? [], artist.vibes ?? []);

      return {
        artist,
        score: genreScore * 2 + vibeScore,
      };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.artist.name.localeCompare(b.artist.name))
    .slice(0, limit)
    .map((entry) => entry.artist);
}