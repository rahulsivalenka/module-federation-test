import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  preview: {
    port: 8082,
    strictPort: true,
  },
  plugins: [
    react(),
    federation({
      name: 'remote',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.tsx',
      },
      shared: {
        ...pkg.dependencies,
        react: {
          singleton: true,
          requiredVersion: pkg.dependencies['react'],
        },
        'react-dom': {
          singleton: true,
          requiredVersion: pkg.dependencies['react-dom'],
        },
      },
    }),
  ],
  build: {
    target: 'esnext',
    // minify: false,
    // cssCodeSplit: true,
    // rollupOptions: {
    //   output: {
    //     minifyInternalExports: false,
    //   },
    // },
  },
});
