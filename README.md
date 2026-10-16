# Jay Ademola’s portfolio

React 19, strict TypeScript, Vite and Tailwind CSS v4. No backend or Amplify.

## Development

Use Node.js 22.12+ (validated with Node 24.19.0).

```sh
npm ci
npm run dev
```

`npm run build` checks TypeScript and builds `dist/`. `npm run lint` checks the source. `npm run preview` serves the production build locally. On restricted machines use `npm ci --cache /tmp/jay-npm-cache`.

## Content

Edit typed products, capabilities, original asset paths and the booking destination in `src/content.ts`. Page copy and layout are in `src/App.tsx`; styles are in `src/style.css`. Update metadata and Person structured data in `index.html` when changing identity or canonical URLs. The year updates automatically.

The homepage uses expanded product sections rather than thin case-study routes. Product descriptions use the supplied brief and the existing live portfolio. No employment, customer or performance claims have been added. URLList is retained as a smaller project.

## Original sources and remaining checks

The live homepage and `/book-me` were inspected on 16 October 2026. The original booking iframe is preserved at `/book-me`, including its query parameters. Email remains available if the third-party calendar fails.

Original portrait and product image URLs are retained from the existing homepage, with proportion-preserving image containers and typographic fallbacks if requests fail. The asset host and booking subdomain are blocked by the current cloud egress policy; their content, original image dimensions and end-to-end booking interactions still need inspection once access is applied. Images use explicit layout dimensions, `object-fit: contain` and lazy loading. They are not invented product interfaces. Download and optimise authentic assets locally once access is available.

All five product homepages, the SDK page, GitHub and LinkedIn returned HTTP 200. YouTube matches the original site’s channel link but its destination could not be fetched in this environment. No individual videos are invented.

## Hosting

Publish `dist/` to a static host only when requested. Configure an SPA fallback to `index.html` for `/book-me`. The booking page sets its own browser title, canonical URL and Open Graph URL. No deployment was performed. The third-party booking service processes scheduling data; no local fake form is used.
