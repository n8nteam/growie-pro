# Growie Pro

Cannabis growing guides website built with Next.js and next-intl.

## Tech Stack

- **Next.js 14** (App Router)
- **next-intl** — i18n (Russian / English)
- **MDX** — guide articles via next-mdx-remote + remark-gfm
- **Tailwind CSS** — styling
- **gray-matter** — frontmatter parsing

## Project Structure

```
app/                  # Next.js App Router pages
  [locale]/           # Locale-based routing (ru, en)
    guides/           # Guide pages (category → article)
components/           # React components (Header, Footer, Hero, etc.)
content/
  guides/
    ru/               # Russian guides (16 categories, 19+ articles)
    en/               # English guides (16 categories, 19+ articles)
  i18n/               # UI translation strings (ru.json, en.json)
lib/                  # Utilities (guides.js — MDX loading)
public/
  images/guides/      # Guide images with "growie" watermark
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Guides

Currently **19 growbox guides** available in both Russian and English:

- What is a growbox
- Choosing equipment
- Growbox coatings
- Winter insulation & heating
- Mini greenhouse
- Monolith (permanent box build)
- Compact grow box
- AquaFarm hydroponic system
- Space Buckets
- Aquaponics
- Multi-chamber NGB box
- Side lighting
- LEC/CMH ceramic lamps
- Stealth PC case box
- Barrel of Green (vertical)
- Ready-made hydroponic box
- Emergency shutdown system
- Thermostat
- Hygrostat

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## License

Private project.
