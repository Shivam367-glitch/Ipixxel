import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Ipixxel',
        short_name: 'Ipixxel',
        description: 'Ipixxel Development Company',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/icon192.webp',
            sizes: '192x192',
            type: 'image/webp'
          },
          {
            src: '/icon512.webp',
            sizes: '512x512',
            type: 'image/webp'
          }
        ]
      },
      workbox: {
        // Workbox options for caching strategies
        globPatterns: ['**/*.{js,css,html,png,svg,webp,jpg}']
      }
    })
  ]
});
