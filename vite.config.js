import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: '/miroir-foncier/',
  plugins: [tailwindcss(), react()],
  // base: process.env.NODE_ENV === 'production' ? '/miroir-foncier/' : '/',
  
});