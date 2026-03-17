import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",
  },
  base: "./", // Important: use relative paths so Electron can load built files
  build: {
    outDir: "dist",
  },
  server: {
    port: 5173,
    strictPort: true,
  },
});
