import dotenv from 'dotenv';
import react from '@vitejs/plugin-react';

dotenv.config();

import { defineConfig } from 'vite';

const { serverPORT = 3001, appPort = 3000 } = process.env;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: appPort,
    proxy: {
      '/api': {
        target: `http://localhost:${serverPORT}`,
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist/app',
  },
});
