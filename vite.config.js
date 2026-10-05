import { defineConfig } from 'vite';

export default defineConfig({
  assetsInclude: ['**/*.glb', '**/*.mp4'],
  server: {
    port: 3000
  }
});
