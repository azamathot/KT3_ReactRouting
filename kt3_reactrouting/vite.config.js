import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin()],
    server: {
        port: 56147,
    },
    base: "/KT3_ReactRouting/"  // Укажите имя вашего репозитория
})