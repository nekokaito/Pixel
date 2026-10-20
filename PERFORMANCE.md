# Pixels — Performance Optimized Version

This version keeps the existing UI/features but changes the data-loading and delivery strategy.

## Main improvements

- MongoDB connection is established once during server startup instead of paying the first-query connection cost.
- MongoDB indexes were added for `email` and `subcategory_Name`.
- Server-side short-lived cache for dynamic item/category reads.
- HTTP `Cache-Control` headers for CDN/browser caching.
- `compression` enabled on the Express API.
- Client-side memory + localStorage API cache with stale-while-revalidate behavior.
- Add/update/delete operations invalidate the relevant client cache immediately.
- Delete no longer reloads the whole page.
- Item details now request one item instead of downloading the entire item collection.
- Categories and reviews are cached much longer because they change rarely.
- AOS was removed because every card was initializing it repeatedly; this also removes its extra JS/CSS payload.
- Particle.js/tsParticles is lazy-loaded after the first content paint and uses a lightweight immediate CSS fallback.
- Reduced tsParticles bundle from `@tsparticles/all` to `@tsparticles/slim`.
- Non-home routes are code-split with `React.lazy`.
- First carousel image is preconnected/preloaded and marked high priority; later slides are lazy.
- Removed redundant `srcSet={same-url}` usage.
- Firebase Hosting cache headers were added for hashed Vite assets and static files.
- Root-relative public asset paths were fixed so images/audio don't become broken on nested routes.

## Client

```bash
npm install
npm run build
npm run dev
```

Optional `.env`:

```env
VITE_API_URL=https://pixels-server.vercel.app
```

## Server

```bash
npm install
npm start
```

Keep the existing MongoDB environment variables:

```env
DB_USERNAME=...
DB_PASSWORD=...
```

## Important image note

The product images are still hosted on external `i.ibb.co` URLs. The app now prioritizes/lazy-loads them correctly, but the biggest possible image-speed improvement would come from putting those images behind an image CDN that can resize/compress them (for example WebP/AVIF variants).
