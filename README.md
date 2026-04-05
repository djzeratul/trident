# TRIDENT

Transformative Rendering Interface for Discography, Experience & Navigation Toolkit

Front-of-house publishing layer for Leviathan.

## What this is

TRIDENT is a static Astro site meant to live behind nginx and give your music projects a proper home base under `mymusic.club`.

Current scaffold includes:

- a root landing page for artists
- a generated artist page at `/artists/signal-theory-project/`
- a reusable artist hero component
- a reusable discography grid
- album cards that link out to existing album share pages
- placeholder artwork you can replace with real covers later

## Requirements

Astro's official docs show the recommended project bootstrap command as `npm create astro@latest`, and the usual local workflow uses `npm run dev` and `npm run build`. Astro v6 also drops Node 18 and 20 support, so use Node 22+ for this project. citeturn660692search0turn660692search1turn660692search2

## Quick start

```bash
cd trident
npm install
npm run dev
```

Then open the local URL Astro prints, usually:

```text
http://localhost:4321
```

## Build for production

```bash
npm run build
```

Astro outputs the production site into:

```text
dist/
```

That `dist/` directory is what nginx should serve.

## Preview the production build locally

```bash
npm run preview
```

## Suggested repo layout

```text
trident/
├── astro.config.mjs
├── package.json
├── public/
│   └── images/
├── src/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   └── pages/
└── README.md
```

## Content model

Artist and album data currently live in:

```text
src/data/site.ts
```

That file is the fastest way to add more artists and albums right now.

### Add another album

Add another object to the `albums` array for the artist.

Required fields:

- `slug`
- `title`
- `year`
- `summary`
- `coverSrc`
- `shareUrl`
- `accent`

### Add another artist

Add a new artist object to the exported `artists` array in `src/data/site.ts`.

TRIDENT will automatically generate a new page for any artist in that array because `src/pages/artists/[slug].astro` uses Astro static paths.

## Replace placeholder art

Current image locations:

```text
public../images/artists/
public../images/albums/
```

Recommended filenames for the current scaffold:

```text
public../images/artists/signal-theory-project.svg
public../images/albums/analog-tide-dreams.svg
public../images/albums/she-learned-my-name.png
```

The `she-learned-my-name.png` file is already included in this scaffold. Replace the SVG placeholders whenever you're ready.

## nginx example

If you build this project on Leviathan and want nginx to serve it directly, point the location at the built `dist/` directory.

Example:

```nginx
server {
    listen 443 ssl http2;
    server_name mymusic.club;

    root /var/www/trident/dist;
    index index.html;

    location /artists/ {
        try_files $uri $uri/ /artists/index.html;
    }

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

Adjust the root path to wherever you deploy the built output.

## Deployment flow I recommend

```bash
git clone <your-repo>
cd trident
npm install
npm run build
rsync -av --delete dist/ /var/www/trident/dist/
```

Then reload nginx.

## Good next steps

- replace placeholder art with final covers
- add release dates and track counts
- add album detail pages later if you want lyrics, credits, or notes
- add a shared site nav once you have more than one artist
- add sitemap generation if you want search-friendly indexing later

Astro has an official sitemap integration available if you decide to add that next. citeturn660692search8
