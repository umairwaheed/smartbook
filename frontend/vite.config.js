import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: '../static/frontend',  // This ensures React builds into Django's static folder
        emptyOutDir: true,
    },
    server: {
        proxy: {
            '/api': 'http://127.0.0.1:8000',  // Proxy API requests to Django
        }
    }
});
