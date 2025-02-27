import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Change the base to where your static files will be served from
export default defineConfig({
  plugins: [react()],
  base: "/static/",
  server: {
    proxy: {
      "/api": "http://127.0.0.1:8000", // Proxy API requests to Django
    },
  },
  build: {
    outDir: "./static", // Output to Django's static folder
    emptyOutDir: true,
  },
});
