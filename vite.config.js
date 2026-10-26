import { defineConfig } from 'vite';

export default defineConfig({
  // Replace 'portofolio-athaulla-hafizh' with your exact GitHub repository name
  base: '/portofolio-athaulla-hafizh/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    port: 3000,
    open: true,
    watch: {
      usePolling: true,
      interval: 300,
    },
  },
});
