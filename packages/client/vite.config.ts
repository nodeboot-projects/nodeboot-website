/* eslint-disable sonarjs/no-duplicate-string */
/// <reference types="vitest" />

import react from "@vitejs/plugin-react-swc";
import type { UserConfigExport, UserConfigFn, UserConfigFnObject } from "vite";
import { defineConfig } from "vite";

export default defineConfig({
  appType: "spa",
  base: "/",
  build: {
    copyPublicDir: true,
    cssMinify: false,
    emptyOutDir: true,
    minify: false,
    rollupOptions: {
      output: {
        assetFileNames: (chunkInfo) => {
          return "assets/[name].[ext]";
        },
        chunkFileNames: (chunkInfo) => {
          return "assets/[name].js";
        },
        entryFileNames: (chunkInfo) => {
          return "assets/[name].js";
        },
      },
    },
    sourcemap: true,
  },
  clearScreen: false,
  envDir: "./environments/",
  envPrefix: "NODEBOOT_",
  esbuild: {},
  plugins: [react()],
  preview: {
    port: 3000,
    strictPort: true,
  },
  publicDir: "./public/",
  resolve: {},
  server: {
    port: 3000,
    strictPort: true,
  },
});
