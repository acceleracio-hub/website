import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths()],
  base: "/website/",
  build: {
    outDir: "dist",
  },
  esbuild: {
    target: "es2020",
  },
  server: {
    host: "0.0.0.0", // Это позволит Vite слушать на всех интерфейсах
    port: 5173,
  },
  resolve: {
    alias: {
      "@ui-kit": path.resolve(__dirname, "./src/ui-kit"),
    },
  },
});
