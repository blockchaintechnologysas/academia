import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: 'https://academia.blockchaintechnologysas.com/',
  plugins: [react()],
  server: {
    host: true,
    port: 3324
  },
  preview: {
    host: true,
    port: 3324,
    allowedHosts: ['academia.blockchaintechnologysas.com']
  }
});
