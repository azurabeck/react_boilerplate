// vite.config.ts
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths'; // Import the plugin

export default defineConfig({
  plugins: [tsconfigPaths()], // Use the plugin
});
