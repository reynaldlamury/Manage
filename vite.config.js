import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import sass from "sass";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      sass: {
        implementation: sass,
      },
    },
  },

  assets: {
    include: [
      "**/*.mp3",
      "**/*.jpg",
      "**/*.JPG",
      "**/*.png",
      "**/*.PNG",
      "**/*.svg",
    ],
  },
});
