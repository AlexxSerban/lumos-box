# Lumos - Event Experience Landing Page

A minimalist, Apple-like landing page for a modern event experience company.

## Tech Stack

- React 18 with TypeScript
- Vite
- Tailwind CSS
- shadcn/ui (Radix-based components)
- Framer Motion (subtle animations)
- Lucide React (minimal icons)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Design Tokens

- Background: `#FFFFFF`
- Foreground: `#0A0A0A`
- Accent: `#D90B12`
- Border Subtle: `rgba(0, 0, 0, 0.08)`

## Project Structure

```
src/
  components/
    ui/          # shadcn/ui components
    Navbar.tsx
    Hero.tsx
    Services.tsx
    Gallery.tsx
    Steps.tsx
    CTA.tsx
    Footer.tsx
  lib/
    utils.ts     # Utility functions
  App.tsx
  main.tsx
  index.css      # Global styles with design tokens
```

