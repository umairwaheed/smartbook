import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Change the base to where your static files will be served from
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/static/",
  server: {
    proxy: {
      "/api": "http://127.0.0.1:8000",
    },
  },
  build: {
    outDir: "./static",
    emptyOutDir: true,
  },
});
