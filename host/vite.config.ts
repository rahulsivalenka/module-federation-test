import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

import pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  preview: {
    port: 8081,
  },
  plugins: [
    react(),
    federation({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        remote: "http://localhost:8082/assets/remoteEntry.js",
      },
      shared: {
        ...pkg.dependencies,
        react: {
          singleton: true,
          requiredVersion: pkg.dependencies["react"],
        },
        "react-dom": {
          singleton: true,
          requiredVersion: pkg.dependencies["react-dom"],
        },
      },
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        minifyInternalExports: false,
      },
    },
  },
});
