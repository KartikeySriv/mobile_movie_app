import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Ensures correct asset loading
  server: {
    open: true,
    historyApiFallback: true, // Enables SPA routing
  },
});
