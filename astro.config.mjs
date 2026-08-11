import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Dos destinos con la misma base de código:
//   - Producción: dominio propio (futurite.mx), en la raíz.
//   - Vista previa: GitHub Pages sirve el repo bajo /lp-futurite/.
// El workflow de despliegue activa el segundo con GITHUB_PAGES=true.
const enPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  site: enPages ? 'https://adriangarza84.github.io' : 'https://futurite.mx',
  base: enPages ? '/lp-futurite' : '/',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
