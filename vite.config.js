import dotenv from 'dotenv';
import react from '@vitejs/plugin-react';

dotenv.config();

import { defineConfig } from 'vite';

const { ServerPORT = 3001, AppPort = 3000 } = process.env;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: AppPort,
    proxy: {
      '/api': {
        target: `http://localhost:${ServerPORT}`,
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist/app',
  },
});
