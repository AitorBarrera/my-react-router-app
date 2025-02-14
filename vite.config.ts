import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [reactRouter()],
  base: '/my-react-router-app/',
  build: {
    outDir: 'docs',
  },
});
